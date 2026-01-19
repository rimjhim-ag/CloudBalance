import { ROLE_ROUTES } from "./rbacConstant";

export const canAccessRoute = (role, pathname) => {
  const routes = ROLE_ROUTES[role];
  if (!routes) return false;

  return routes.some(route =>
    pathname === route || pathname.startsWith(route + "/")
  );
};

export const getFirstAllowedRoute = (role) => {
  console.log(role)
  const routes = ROLE_ROUTES[role];
  if (!routes || routes.length === 0) return null;

  return routes[0];
};
