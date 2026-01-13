import React from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TimelineIcon from "@mui/icons-material/Timeline";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import CopyToClipboard from "../../components/CopyToClipboard";
import PolicyImage1 from "../../assets/PolicyImage1.png";
import PolicyImage2 from "../../assets/PolicyImage2.png";
import PolicyImage3 from "../../assets/PolicyImage3.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const StepsCount = ({ children }) => (
  <div className="shrink-0 rounded-full bg-[#A0A0A0] w-8 h-8 flex justify-center items-center text-white">
    {children}
  </div>
);

const StepItem = ({ number, children }) => (
  <div className="flex flex-row gap-3">
    <StepsCount>{number}</StepsCount>
    <div className="flex-1">{children}</div>
  </div>
);

const AddManagedPolicies = ({onBack, onNext}) => {

  
  return (
    <div className="h-[90%] overflow-auto px-10 py-6">
      <div className="my-10">
        <h1 className="font-bold text-3xl">Add Customer Managed Policies</h1>
        <p className="mt-2">
          Create an Inline policy for the role by following these steps
        </p>
      </div>
      {/* Main Steps Box */}
      <div className="bg-white px-6 py-9 flex flex-col gap-5 rounded-md shadow-md">
        <StepItem number="1">
          Go to the{" "}
          <Link className="font-bold text-[#0a3ca2] underline">
            Create Policy
          </Link>{" "}
          Page
        </StepItem>

        <StepItem number="2">
          Click on the
          <span className="font-bold"> JSON </span>tab and paste the following
          policy and click on Next:
        </StepItem>
        <CopyToClipboard
          isCode="true"
          data={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CostAudit",
      "Effect": "Allow",
      "Action": [
        "dms:Describe*",
        "dms:List*",
        "kafka:Describe*",
        "kafka:Get*",
        "kafka:List*",
        "mq:Describe*",
        "mq:List*",
        "route53resolver:Get*",
        "route53resolver:List*",
        "memorydb:Describe*",
        "savingsplans:Describe*",
        "cloudsearch:Describe*",
        "quicksight:Describe*",
        "quicksight:List*",
        "codepipeline:Get*",
        "codepipeline:List*",
        "codebuild:Get*",
        "codebuild:List*",
        "codebuild:Describe*",
        "codebuild:BatchGet*",
        "codedeploy:Get*",
        "codedeploy:List*",
        "codedeploy:BatchGet*",
        "mediaconnect:Describe*",
        "mediaconnect:List*",
        "mediaconvert:Describe*",
        "mediaconvert:Get*",
        "mediaconvert:List*",
        "medialive:Describe*",
        "medialive:List*",
        "mediapackage:Describe*",
        "mediapackage:List*",
        "mediapackage-vod:Describe*",
        "mediapackage-vod:List*",
        "mediastore:DescribeObject",
        "mediastore:Get*",
        "mediastore:List*",
        "mediatailor:Describe*",
        "mediatailor:Get*",
        "mediatailor:List*",
        "ec2:Describe*",
        "elasticache:Describe*",
        "events:DescribeEventBus",
        "events:List*",
        "elasticloadbalancing:Describe*",
        "kinesis:Describe*",
        "kinesis:List*",
        "kinesisanalytics:Describe*",
        "kinesisanalytics:List*",
        "dynamodb:Describe*",
        "dynamodb:List*",
        "cloudwatch:Describe*",
        "cloudwatch:List*",
        "cloudwatch:GetMetricStatistics",
        "ecr:GetLifecyclePolicy",
        "ecr:GetRepositoryPolicy",
        "ecr-public:DescribeRepositories",
        "ecr:Describe*",
        "ecr:List*",
        "lambda:List*",
        "lambda:Get*",
        "rds:Describe*",
        "rds:ListTagsForResource",
        "sqs:GetQueueAttributes",
        "sqs:List*",
        "firehose:Describe*",
        "firehose:List*",
        "glue:GetDevEndpoint",
        "s3:GetBucketPolicy",
        "s3:List*",
        "network-firewall:Describe*",
        "network-firewall:List*",
        "elasticfilesystem:Describe*",
        "kms:Describe*",
        "kms:GetKeyPolicy",
        "kms:GetKeyRotationStatus",
        "kms:List*",
        "elasticmapreduce:List*",
        "es:Describe*",
        "es:Get*",
        "es:List*",
        "aoss:Get*",
        "aoss:List*",
        "logs:Describe*",
        "logs:List*",
        "application-autoscaling:Describe*",
        "route53:List*",
        "redshift:Describe*",
        "backup:Describe*",
        "backup:Get*",
        "backup:List*",
        "dlm:Get*",
        "dlm:List*",
        "sagemaker:List*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "BillingReadOnly",
      "Effect": "Allow",
      "Action": [
        "billingconductor:List*",
        "billing:ListBillingViews"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ComputeOptimizerReadAccess",
      "Effect": "Allow",
      "Action": [
        "compute-optimizer:Get*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CostExplorerAccess",
      "Effect": "Allow",
      "Action": [
        "ce:Describe*",
        "ce:Get*",
        "ce:List*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CURReportDefinitions",
      "Effect": "Allow",
      "Action": [
        "organizations:Describe*",
        "organizations:List*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "PricingAPIAccess",
      "Effect": "Allow",
      "Action": [
        "pricing:*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "WellArchitectedAccess",
      "Effect": "Allow",
      "Action": [
        "wellarchitected:*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ReadOnlyForOrgServices",
      "Effect": "Allow",
      "Action": [
        "detective:Describe*",
        "detective:Get*",
        "detective:List*",
        "devops-guru:Describe*",
        "devops-guru:Get*",
        "devops-guru:List*",
        "devops-guru:Search*",
        "guardduty:Describe*",
        "guardduty:Get*",
        "guardduty:List*",
        "inspector:Describe*",
        "inspector:Get*",
        "inspector2:Describe*",
        "inspector2:Get*",
        "inspector2:List*",
        "macie2:Describe*",
        "macie2:Get*",
        "macie2:List*",
        "account:Get*",
        "account:ListRegions",
        "auditmanager:Get*",
        "auditmanager:List*",
        "controltower:Describe*",
        "controltower:Get*",
        "controltower:List*",
        "sso:Describe*",
        "sso:Get*",
        "sso:List*",
        "sso:Search*",
        "sso-directory:Describe*",
        "sso-directory:Get*",
        "sso-directory:List*",
        "sso-directory:Search*",
        "aws-marketplace:DescribeAgreement",
        "aws-marketplace:Get*",
        "aws-marketplace:List*",
        "aws-marketplace:ViewSubscriptions",
        "aws-marketplace:SearchAgreements",
        "networkmanager:DescribeGlobalNetworks",
        "networkmanager:Get*",
        "networkmanager:List*",
        "trustedadvisor:Describe*",
        "trustedadvisor:List*",
        "cloudtrail:Describe*",
        "cloudtrail:Get*",
        "cloudtrail:List*",
        "cloudtrail:LookupEvents",
        "cloudformation:Describe*",
        "cloudformation:Get*",
        "cloudformation:List*",
        "compute-optimizer:DescribeRecommendationExportJobs",
        "config:Describe*",
        "config:Get*",
        "config:List*",
        "ds:Describe*",
        "ds:Get*",
        "ds:List*",
        "fms:Get*",
        "fms:List*",
        "access-analyzer:Get*",
        "access-analyzer:List*",
        "healthlake:Describe*",
        "healthlake:GetCapabilities",
        "healthlake:List*",
        "healthlake:ReadResource",
        "healthlake:Search*",
        "health:Describe*",
        "license-manager:Get*",
        "license-manager:GetGrant",
        "license-manager:List*",
        "license-manager:ListTokens",
        "license-manager-user-subscriptions:List*",
        "servicecatalog:Describe*",
        "servicecatalog:Get*",
        "servicecatalog:List*",
        "servicecatalog:ScanProvisionedProducts",
        "servicecatalog:Search*",
        "securityhub:Describe*",
        "securityhub:Get*",
        "securityhub:List*",
        "ssm:Describe*",
        "ssm:List*",
        "ram:Get*",
        "ram:List*",
        "servicequotas:Get*",
        "servicequotas:List*",
        "s3:Describe*"
      ],

      "Resource": "*"
    }
  ]
}

        
        `}
        />

        <StepItem number="3">
          In the <span className="font-bold">Name</span> field, enter
          below-mentioned policy name and click on Create Policy
        </StepItem>

        <CopyToClipboard data="cktuner-CostAuditPolicy" />

        <StepItem number="4">
          Again go to the{" "}
          <Link className="font-bold text-[#0a3ca2] underline">
            Create Policy
          </Link>{" "}
          Page.
        </StepItem>

        <StepItem number="5">
          Click on the
          <span className="font-bold"> JSON </span>tab and paste the following
          policy and click on Next:
        </StepItem>

        <CopyToClipboard
          isCode="true"
          data={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "SecAudit",
      "Effect": "Allow",
      "Action": [
        "cloudfront:List*",
        "cloudfront:Get*",
        "cloudfront:Describe*",
        "ecr:DescribeRepositories",
        "ecr:BatchGetRepositoryScanningConfiguration",
        "iam:List*",
        "iam:Get*",
        "lambda:GetFunctionConfiguration",
        "lambda:GetFunctionUrlConfig",
        "cloudwatch:GetMetricStatistics",
        "ec2:DescribeInstances",
        "ec2:DescribeVpcs",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeNetworkInterfaces",
        "redshift:DescribeClusters",
        "inspector2:BatchGetAccountStatus",
        "ec2:DescribeFlowLogs",
        "securityhub:GetEnabledStandards",
        "s3:ListAllMyBuckets",
        "s3:GetBucketLogging",
        "s3:GetEncryptionConfiguration",
        "s3:GetBucketPolicyStatus",
        "s3:GetBucketAcl",
        "s3:GetBucketVersioning",
        "s3:GetAccountPublicAccessBlock",
        "s3:GetBucketCORS",
        "s3:GetBucketPolicy",
        "s3:GetBucketVersioning",
        "s3:GetEncryptionConfiguration",
        "s3:GetLifecycleConfiguration",
        "sts:GetCallerIdentity",
        "wafv2:List*",
        "wafv2:Get*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "SecAuditServiceQuotas",
      "Effect": "Allow",
      "Action": [
        "states:ListStateMachines",
        "servicequotas:GetServiceQuota",
        "acm:List*",
        "acm:DescribeCertificate",
        "athena:ListWorkGroups",
        "athena:GetWorkGroup",
        "apigateway:GET",
        "autoscaling:Describe*",
        "cloudformation:DescribeAccountLimits",
        "cloudformation:DescribeStacks",
        "cloudwatch:GetMetricData",
        "ds:GetDirectoryLimits",
        "ec2:Describe*",
        "ec2:GetEbsDefaultKmsKeyId",
        "ec2:GetEbsEncryptionByDefault",
        "ecs:Describe*",
        "ecs:List*",
        "eks:Describe*",
        "eks:List*",
        "elasticache:DescribeCacheClusters",
        "elasticache:DescribeCacheParameterGroups",
        "elasticache:DescribeCacheSecurityGroups",
        "elasticache:DescribeCacheSubnetGroups",
        "elasticbeanstalk:DescribeApplicationVersions",
        "elasticbeanstalk:DescribeApplications",
        "elasticbeanstalk:DescribeEnvironments",
        "elasticfilesystem:DescribeFileSystems",
        "firehose:ListDeliveryStreams",
        "lambda:GetAccountSettings",
        "redshift:DescribeClusterSnapshots",
        "redshift:DescribeClusterSubnetGroups",
        "route53:GetHostedZone",
        "route53:GetHostedZoneLimit",
        "route53:ListHostedZones",
        "servicequotas:List*",
        "servicequotas:Get*",
        "ses:Get*",
        "ses:List*",
        "support:Describe*",
        "support:SearchForCases",
        "trustedadvisor:Describe*",
        "trustedadvisor:GenerateReport",
        "trustedadvisor:RefreshCheck",
        "iam:GenerateCredentialReport",
        "iam:GetCredentialReport",
        "secretsmanager:ListSecrets",
        "secretsmanager:DescribeSecret",
        "sns:List*",
        "sns:Get*",
        "artifact:ListReports",
        "artifact:GetReportMetadata",
        "artifact:GetReport",
        "artifact:GetTermForReport"
      ],
      "Resource": "*"
    },
    {
      "Sid": "NewReadAccountBillingPermissions",
      "Effect": "Allow",
      "Action": [
        "consolidatedbilling:GetAccountBillingRole",
        "consolidatedbilling:ListLinkedAccounts",
        "billing:Get*",
        "payments:ListPaymentPreferences",
        "invoicing:GetInvoicePDF",
        "invoicing:ListInvoiceSummaries"
      ],
      "Resource": "*"
    }
  ]
}`}
        />

        <StepItem number="6">
          {" "}
          In the <span className="font-bold">Name</span> field, enter
          below-mentioned policy name and click on Create Policy
        </StepItem>

        <CopyToClipboard data="cktuner-SecAuditPolicy" />

        <StepItem number="7">
          Again go to the{" "}
          <Link className="font-bold text-[#0a3ca2] underline">
            Create Policy
          </Link>{" "}
          Page.
        </StepItem>

        <StepItem number="8">
          Click on the
          <span className="font-bold"> JSON </span>tab and paste the following
          policy and click on Next:
        </StepItem>

        <CopyToClipboard
          isCode="true"
          data={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CostExplorer",
      "Action": [
        "ce:StartSavingsPlansPurchaseRecommendationGeneration",
        "ce:UpdatePreferences"
      ],
      "Effect": "Allow",
      "Resource": "*"
    },
    {
      "Sid": "ListEC2SPReservations",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeCapacityReservations",
        "ec2:DescribeCapacityReservationFleets",
        "ec2:GetCapacityReservationUsage",
        "ec2:GetGroupsForCapacityReservation",
        "ec2:DescribeHostReservations",
        "ec2:DescribeHostReservationOfferings",
        "ec2:GetHostReservationPurchasePreview",
        "ec2:DescribeReservedInstancesOfferings",
        "ec2:DescribeReservedInstancesModifications",
        "ec2:DescribeReservedInstances",
        "ec2:GetReservedInstancesExchangeQuote",
        "ec2:DescribeReservedInstancesListings"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ComputeOptimizerAccess",
      "Effect": "Allow",
      "Action": [
        "compute-optimizer:UpdateEnrollmentStatus",
        "compute-optimizer:PutRecommendationPreferences"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ServiceLinkedRole",
      "Effect": "Allow",
      "Action": "iam:CreateServiceLinkedRole",
      "Resource": "arn:aws:iam::*:role/aws-service-role/compute-optimizer.amazonaws.com/AWSServiceRoleForComputeOptimizer*",
      "Condition": {
        "StringLike": {
          "iam:AWSServiceName": "compute-optimizer.amazonaws.com"
        }
      }
    },
    {
      "Sid": "ServiceLinkedRolePolicy",
      "Effect": "Allow",
      "Action": "iam:PutRolePolicy",
      "Resource": "arn:aws:iam::*:role/aws-service-role/compute-optimizer.amazonaws.com/AWSServiceRoleForComputeOptimizer"
    },
    {
      "Sid": "AllowRoleToInspectItself",
      "Effect": "Allow",
      "Action": [
        "iam:ListRolePolicies",
        "iam:GetRolePolicy"
      ],
      "Resource": "arn:aws:iam::275495855473:role/CK-Tuner-Role-dev2"
    }
  ]
}`}
        />

        <StepItem number="9">
          {" "}
          In the <span className="font-bold">Name</span> field, enter
          below-mentioned policy name and click on Create Policy
        </StepItem>

        <CopyToClipboard data="cktuner-TunerReadEssentials" />

        <StepItem number="10">
          Go to the {"   "}
          <Link className="font-bold text-[#0a3ca2] underline">
             CK-Tuner-Policy
          </Link>{" "}
        </StepItem>

        <div className="mx-10">
          <img
            src={PolicyImage1}
            alt="Policy Step 10"
            className="w-auto max-w-full rounded-md"
          />
        </div>

        <StepItem number="11">
          {" "}
          In Permission policies, click on{" "}
          <span className="font-bold"> Add permissions &gt; Attach Policy</span>
        </StepItem>

          <div className="mx-10">
          <img
            src={PolicyImage2}
            alt="Policy Step 11"
            className="w-auto max-w-full rounded-md"
          />
        </div>
        <StepItem number="7">
          Filter by Type &gt; Customer managed then search for {" "}
          <Link className="font-bold ">
            cktuner-CostAuditPolicy, cktuner-SecAuditPolicy, cktuner-TunerReadEssentials
          </Link>{" "}
        and select them.
        </StepItem>


  <div className="mx-10">
          <img
            src={PolicyImage3}
            alt="Policy Step 12"
            className="w-auto max-w-full rounded-md"
          />
        </div>


           <StepItem number="13">
         Now, click on <span className="font-bold">Add permissions</span> 
        </StepItem>


      </div>



      {/* Footer Buttons */}
      <div className="mt-6 flex justify-end gap-4">
       <Button  event={onBack} variant="primary" padding="px-8 py-2" margin="m-2">
         Back - Create An IAM Role
        </Button>
        <Button event={onNext} variant="secondary" padding="px-8 py-2" margin="m-2">
          Next - Create CUR
        </Button>
      </div>
    </div>
  );
};

export default AddManagedPolicies;
