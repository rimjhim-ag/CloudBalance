package com.backend.cloudbalance_backend.helper;



import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class CookieUtil {

    private static final String DEFAULT_PATH = "/api/auth"; // adjust if needed
    private static final int MaxAge = 7 * 60 * 60 ;
    // Add a cookie
    public static void addCookie(HttpServletResponse response, String name, String value) {
        Cookie cookie = new Cookie(name, value);
        cookie.setHttpOnly(true);
        cookie.setSecure(false); // true in production
        cookie.setPath(DEFAULT_PATH);
        cookie.setMaxAge(MaxAge);
        response.addCookie(cookie);
    }

    // Clear a cookie
    public static void clearCookie(HttpServletResponse response, String name) {
        Cookie cookie = new Cookie(name, null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath(DEFAULT_PATH);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
    }

    // Get cookie value by name
    public static String getCookie(HttpServletRequest request, String name) {
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if (cookie.getName().equals(name)) {
                    return cookie.getValue();
                }
            }
        }
        return null;
    }
}

