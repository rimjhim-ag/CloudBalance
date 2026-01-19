export const ROLE_ROUTES = {
  ADMIN: [
    "/dashboard/users",
    "/dashboard/onboarding",
    "/dashboard/cost-explorer",
    "/dashboard/aws-explorer",
  ],

  READ_ONLY: [
    "/dashboard/users",
    "/dashboard/onboarding",
    "/dashboard/cost-explorer",
    "/dashboard/aws-explorer",
  ],

  CUSTOMER: [
    "/dashboard/cost-explorer",
    "/dashboard/aws-explorer",
  ],
};


export const ROLE_SIDEBAR = {
  ADMIN: ["users", "onboarding", "cost-explorer", "aws-explorer"],
  READ_ONLY: ["users", "onboarding", "cost-explorer", "aws-explorer"],
  CUSTOMER: ["cost-explorer", "aws-explorer"], 
};
