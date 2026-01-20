package com.backend.cloudbalance_backend.helper;


import com.backend.cloudbalance_backend.entity.Users;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

@Component
public class AuthUtil {

    @Value("${jwt.secretKey}")
    private String jwtSecretKey;

    @Value("${jwt.access-token.expiry}")
    private long accessTokenExpiry;

    @Value("${jwt.refresh-token.expiry}")
    private long refreshTokenExpiry;

    private SecretKey getSecretKey() {
        return Keys.hmacShaKeyFor(jwtSecretKey.getBytes(StandardCharsets.UTF_8));
    }


    public String generateAccessToken(Users user) {
        return buildToken(user, "ACCESS", accessTokenExpiry);
    }

    public String generateRefreshToken(Users user) {
        return buildToken(user, "REFRESH", refreshTokenExpiry);
    }

    private String buildToken(Users user, String type, long expiry) {
        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("userId", user.getUsersId())
                .claim("type", type)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiry))
                .signWith(getSecretKey())
                .compact();
    }



    public Claims getClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSecretKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public String getEmail(Claims claims) {
        return claims.getSubject();
    }

    public String getTokenType(Claims claims) {
        return claims.get("type", String.class);
    }

//    public LocalDateTime getExpirationDate(Claims claims) {
//        return claims.getExpiration()
//                .toInstant()
//                .atZone(ZoneId.systemDefault())
//                .toLocalDateTime();
//    }


}
