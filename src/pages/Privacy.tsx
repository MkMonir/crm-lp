import React from 'react';
import LegalPage from '../components/LegalPage';

const content = `
## Introduction

Your privacy matters. This Privacy Policy explains how we collect, use, and protect your data when you use our CRM software and website.

## Information We Collect

### Personal Information

* Name
* Email address
* Phone number
* Company details

### Business Data

* Leads and customer data
* Sales and transaction data
* Payment and invoice data

### Technical Data

* IP address
* Browser type
* Device information
* Usage activity

## How We Use Your Information

We use your data to:

* Provide and improve our CRM services
* Manage your account
* Process payments
* Provide customer support
* Send updates and notifications

## Data Sharing

We do NOT sell your data.

We may share data with:

* Trusted service providers (hosting, SMS, email services)
* Legal authorities if required by law

## Data Security

We implement security measures including:

* Secure servers
* Access control
* Data encryption (where applicable)

But no system is completely secure.

## Data Retention

* Your data is stored as long as your account is active
* You can request data deletion at any time

## Cookies & Tracking

We may use cookies to:

* Improve user experience
* Analyze website traffic

You can disable cookies in your browser settings.

## User Rights

You have the right to:

* Access your data
* Update your data
* Request deletion
* Withdraw consent

## Third-Party Links

Our website may contain links to external sites.
We are not responsible for their privacy practices.

## Children’s Privacy

Our services are not intended for users under 18.

## Updates to Privacy Policy

We may update this policy anytime. Changes will be posted on this page.

## Contact Us

For privacy-related concerns:
📧 Email: alabdullah252@gmail.com
📞 Phone: +880 1XXX XXXXXX
`;

export default function Privacy() {
  return <LegalPage title="Privacy Policy" content={content} />;
}
