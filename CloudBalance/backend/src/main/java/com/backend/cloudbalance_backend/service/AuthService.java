package com.backend.cloudbalance_backend.service;


import com.backend.cloudbalance_backend.DTO.LoginRequestDTO;
import com.backend.cloudbalance_backend.DTO.LoginResponseDTO;
import com.backend.cloudbalance_backend.DTO.LogoutRequestDTO;

import com.backend.cloudbalance_backend.DTO.RefreshResponseDTO;
import com.backend.cloudbalance_backend.entity.RevokedTokens;
import com.backend.cloudbalance_backend.helper.AuthUtil;
import com.backend.cloudbalance_backend.entity.Users;

import com.backend.cloudbalance_backend.helper.CookieUtil;
import com.backend.cloudbalance_backend.repositories.RevokedTokenRepository;
import com.backend.cloudbalance_backend.repositories.UserRepository;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor

public class AuthService {

    private final RevokedTokenRepository revokedTokenRepository;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final AuthUtil authUtil;

    public LoginResponseDTO login(LoginRequestDTO loginRequestDTO, HttpServletResponse response) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequestDTO.getEmail(),
                        loginRequestDTO.getPassword()
                )
        );

        Users user = (Users) authentication.getPrincipal();

        String accessToken = authUtil.generateAccessToken(user);
        String refreshToken = authUtil.generateRefreshToken(user);


        RevokedTokens tokenEntity = new RevokedTokens();
        tokenEntity.setToken(refreshToken);
        tokenEntity.setRevoked(false);

        revokedTokenRepository.save(tokenEntity);


        CookieUtil.addCookie(response, "refreshToken", refreshToken);


        return new LoginResponseDTO(
                accessToken,
                refreshToken,
                user.getRole()


        );
    }

    public void logout(HttpServletRequest request, HttpServletResponse response) {

        String refreshToken = CookieUtil.getCookie(request, "refreshToken");


        if (refreshToken == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Refresh token not found");
        }


        RevokedTokens token = revokedTokenRepository
                .findByToken(refreshToken)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Refresh token not found"
                ));

        token.setRevoked(true);
        revokedTokenRepository.save(token);

        CookieUtil.clearCookie(response, "refreshToken");
    }

    public RefreshResponseDTO refresh(HttpServletRequest request) {

        String refreshToken = CookieUtil.getCookie(request, "refreshToken");


        if (refreshToken == null) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "Refresh token missing"
            );
        }


        Claims claims = authUtil.getClaims(refreshToken);

        if (!"REFRESH".equals(authUtil.getTokenType(claims))) {
            throw new ResponseStatusException(
                    HttpStatus.FORBIDDEN,
                    "Invalid token type"
            );
        }

        RevokedTokens storedToken = revokedTokenRepository
                .findByToken(refreshToken)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED,
                        "Refresh token not recognized"
                ));

        if (storedToken.isRevoked()) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "Refresh token revoked"
            );
        }

        String email = authUtil.getEmail(claims);

        Users user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "User not found"
                ));

        return new RefreshResponseDTO(authUtil.generateAccessToken(user));
    }

}
