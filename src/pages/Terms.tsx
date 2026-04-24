import React from 'react';
import LegalPage from '../components/LegalPage';

const content = `
## Introduction

Welcome to our website and CRM software platform (“Service”). By accessing or using our Service, you agree to comply with and be bound by these Terms & Conditions.

If you do not agree, do not use the Service.

## Services Provided

We provide custom CRM software solutions including but not limited to:

* Lead and deal management
* Sales tracking
* Payment and invoice tracking
* Task and activity management
* Reporting and analytics

Services may be customized based on client requirements.

## User Responsibilities

You agree to:

* Provide accurate and complete information
* Use the system lawfully
* Maintain the confidentiality of your login credentials
* Not misuse, hack, or disrupt the system

You are fully responsible for all activities under your account.

## Account & Access

* We reserve the right to suspend or terminate accounts if misuse is detected
* Access levels may vary based on your subscription or agreement
* You must notify us immediately of any unauthorized access

## Payments & Billing

* Pricing is based on agreed proposals or subscription plans
* Payments must be made on time as per agreement
* Late payments may result in service suspension
* All fees are non-refundable unless otherwise agreed

## Custom Development

* Custom CRM features are developed based on your requirements
* Once approved and delivered, revisions may incur additional cost
* Timeline depends on scope and complexity

## Data Ownership

* You fully own your business data
* We do not claim ownership of your data
* You are responsible for maintaining backups unless included in your plan

## Data Security

We take reasonable steps to protect your data, but:

* No system is 100% secure
* We are not liable for data loss due to external attacks or user negligence

## Limitation of Liability

We are not liable for:

* Business losses or missed opportunities
* Data loss due to user actions
* Third-party integrations or failures

Use the system at your own risk.

## Third-Party Services

Our system may integrate with third-party tools (e.g., email, SMS, payment gateways).
We are not responsible for their performance or policies.

## Termination

We reserve the right to:

* Suspend or terminate services for violation of terms
* Modify or discontinue services with notice

## Changes to Terms

We may update these Terms at any time. Continued use means you accept the updated terms.

## Governing Law

These Terms shall be governed by the laws of Bangladesh.

## Contact Information

For any questions:
📧 Email: alabdullah252@gmail.com
📞 Phone: +880 1XXX XXXXXX
`;

export default function Terms() {
  return <LegalPage title="Terms & Conditions" content={content} />;
}
