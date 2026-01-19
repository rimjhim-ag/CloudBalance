export const rdsColumns = [
  {
    key: "resourceId",
    label: "Resource ID",
  },
  {
    key: "resourceName",
    label: "Resource Name",
  },
  {
    key: "engine",
    label: "Engine",
  },
  {
    key: "region",
    label: "Region",
  },
  {
    key: "status",
    label: "Status",
  },
];

export const rdsRows = [
  {
    id: 1,
    resourceId: "arn:aws:rds:us-east-1:951485052809:db:ck-uat-ue1-kong-rds",
    resourceName: "ck-uat-ue1-kong-rds",
    engine: "postgres",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    id: 2,
    resourceId: "arn:aws:rds:us-east-1:951485052809:db:cloudnomic-dev",
    resourceName: "cloudnomic-dev",
    engine: "mysql",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    id: 3,
    resourceId: "arn:aws:rds:us-east-1:951485052809:db:cloud-pricing-rds",
    resourceName: "cloud-pricing-rds",
    engine: "postgres",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    id: 4,
    resourceId: "arn:aws:rds:us-east-1:951485052809:db:tuner-database-2",
    resourceName: "tuner-database-2",
    engine: "aurora-postgresql",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    id: 5,
    resourceId: "arn:aws:rds:us-east-1:951485052809:db:ck-prod-keycloak-rds",
    resourceName: "ck-prod-keycloak-rds",
    engine: "postgres",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    id: 6,
    resourceId: "arn:aws:rds:us-east-1:951485052809:db:ck-prod-ue1-kong-rds",
    resourceName: "ck-prod-ue1-kong-rds",
    engine: "postgres",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    id: 7,
    resourceId: "arn:aws:rds:us-east-1:951485052809:db:ck-prod-ue1-strap-rds",
    resourceName: "ck-prod-ue1-strap-rds",
    engine: "postgres",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    id: 8,
    resourceId: "arn:aws:rds:us-east-1:951485052809:db:ck-tuner-pricing-rds",
    resourceName: "ck-tuner-pricing-rds",
    engine: "postgres",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    id: 9,
    resourceId: "arn:aws:rds:us-east-1:951485052809:db:cloudnomic-prod-rds",
    resourceName: "cloudnomic-prod-rds",
    engine: "mysql",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    id: 10,
    resourceId: "arn:aws:rds:us-east-1:951485052809:db:cloudnomic-stage-rds",
    resourceName: "cloudnomic-stage-rds",
    engine: "postgres",
    region: "N. Virginia",
    status: "STOPPED",
  },
];

export const ec2Columns = [
  {
    key: "resourceId",
    label: "Resource ID",
  },
  {
    key: "name",
    label: "Engine",
  },
  {
    key: "region",
    label: "Region",
  },
  {
    key: "status",
    label: "Status",
  },
];


export const ec2Rows = [
  {
    id: 1,
    resourceId: "i-A93KD82MSQ7128F3",
    name: "Web Server",
    status: "RUNNING",
    region: "Mumbai"
  },
  {
    id: 2,
    resourceId: "i-Z81MN72PLK9902D1F7",
    name: "Database Server",
    status: "STOPPED",
    region: "N. Virginia"
  },
  {
    id: 3,
    resourceId: "i-K19XQ72LAH8819S0",
    name: "Auth Service",
    status: "RUNNING",
    region: "Singapore"
  },
  {
    id: 4,
    resourceId: "i-P00LS82NDJ5527YH",
    name: "Payment Gateway",
    status: "STOPPED",
    region: "Frankfurt"
  },
  {
    id: 5,
    resourceId: "i-W71OP93BVS1193DKF4",
    name: "Notification Engine",
    status: "RUNNING",
    region: "Sydney"
  },
  {
    id: 6,
    resourceId: "i-H29DL72QWE9021XMN",
    name: "Analytics Engine",
    status: "RUNNING",
    region: "Oregon"
  },
  {
    id: 7,
    resourceId: "i-Q82PL19XSJ7720BDK5",
    name: "Search API",
    status: "STOPPED",
    region: "Tokyo"
  },
  {
    id: 8,
    resourceId: "i-M17XZ62ALP5529QRT8",
    name: "Cache Layer",
    status: "RUNNING",
    region: "Paris"
  },
  {
    id: 9,
    resourceId: "i-R51YT82BGK1902LQA2",
    name: "Image Processor",
    status: "STOPPED",
    region: "Seoul"
  },
  {
    id: 10,
    resourceId: "i-J81MK20PLS7728NWF9",
    name: "Messaging Queue",
    status: "RUNNING",
    region: "Ireland"
  }
];

const aszRows = [
  {
    id: 1,
    resourceId: "arn:aws-asg:ap-south-1",
    name: "WebApp-ASG",
    desiredCapacity: 4,
    minSize: 2,
    maxSize: 8,
    status: "RUNNING",
    region: "Mumbai"
  },
  {
    id: 2,
    resourceId: "arn:aws-asg:us-east-1",
    name: "API-Service-ASG",
    desiredCapacity: 3,
    minSize: 1,
    maxSize: 6,
    status: "STOPPED",
    region: "N. Virginia"
  },
  {
    id: 3,
    resourceId: "arn:aws-asg:ap-southeast-1",
    name: "AuthEngine-ASG",
    desiredCapacity: 5,
    minSize: 2,
    maxSize: 9,
    status: "RUNNING",
    region: "Singapore"
  },
  {
    id: 4,
    resourceId: "arn:aws-asg:eu-central-1",
    name: "Payment-ASG",
    desiredCapacity: 2,
    minSize: 1,
    maxSize: 4,
    status: "STOPPED",
    region: "Frankfurt"
  },
  {
    id: 5,
    resourceId: "arn:aws-asg:ap-southeast-2",
    name: "Notification-ASG",
    desiredCapacity: 6,
    minSize: 3,
    maxSize: 10,
    status: "RUNNING",
    region: "Sydney"
  },
  {
    id: 6,
    resourceId: "arn:aws-asg:us-west-2",
    name: "Analytics-ASG",
    desiredCapacity: 4,
    minSize: 2,
    maxSize: 7,
    status: "RUNNING",
    region: "Oregon"
  },
  {
    id: 7,
    resourceId: "arn:aws-asg:ap-northeast-1",
    name: "Search-ASG",
    desiredCapacity: 3,
    minSize: 1,
    maxSize: 5,
    status: "STOPPED",
    region: "Tokyo"
  },
  {
    id: 8,
    resourceId: "arn:aws-asg:eu-west-3",
    name: "CacheLayer-ASG",
    desiredCapacity: 7,
    minSize: 4,
    maxSize: 9,
    status: "RUNNING",
    region: "Paris"
  },
  {
    id: 9,
    resourceId: "arn:aws-asg:ap-northeast-2",
    name: "ImageProcessor-ASG",
    desiredCapacity: 2,
    minSize: 1,
    maxSize: 3,
    status: "STOPPED",
    region: "Seoul"
  },
  {
    id: 10,
    resourceId: "arn:aws-asg:eu-west-1",
    name: "Messaging-ASG",
    desiredCapacity: 5,
    minSize: 2,
    maxSize: 8,
    status: "RUNNING",
    region: "Ireland"
  }
];

export const aszColumns = [
  {
    key: "resourceId",
    label: "Resource ID",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "desiredCapacity",
    label: "Desired Capacity",
  },
  {
    key: "minSize",
    label: "Min Size",
  },
  {
    key: "maxSize",
    label: "Max Size",
  },
];


export const serviceTableConfig = {
  EC2: {
    columns: ec2Columns,
    rows: ec2Rows,
  },
  RDS: {
    columns: rdsColumns,
    rows: rdsRows,
  },
  ASZ: {
    columns: aszColumns,
    rows: aszRows,
  },
};  