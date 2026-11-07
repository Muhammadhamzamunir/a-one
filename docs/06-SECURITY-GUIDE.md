# Security Guide --- A-One Maintenance Service

## 1. Security objective

Protect: - customer contact information - phone/email - quote requests -
project data - admin accounts - uploaded project images/files -
database - API credentials

## 2. Authentication

Admin: - Spring Security - strong password policy - Argon2id or BCrypt -
MFA recommended for production - short-lived access tokens - refresh
token rotation if JWT refresh flow is implemented - logout/revocation
strategy - account lock/rate-limit after repeated failures

Never: - store passwords in plaintext - place JWT secrets in Git - put
admin tokens in URLs - log passwords/tokens

## 3. Authorization

Roles:

``` text
SUPER_ADMIN
CONTENT_MANAGER
LEAD_MANAGER
```

Every admin API must enforce authorization server side.

Do not rely on hiding buttons in React.

## 4. Public forms

Quote/contact endpoints are public and must have: - server-side
validation - rate limiting - request size limits - spam protection -
honeypot or CAPTCHA where necessary - normalization of phone/email -
output encoding

Never trust frontend validation alone.

## 5. Injection prevention

Use: - JPA parameterized queries - DTO validation - allowlists where
appropriate - safe HTML rendering

Never concatenate user input into SQL.

If rich blog HTML is supported: - sanitize it with a robust HTML
sanitizer - allow only required tags/attributes

## 6. XSS

-   escape user-generated content
-   sanitize rich text
-   use a strict Content Security Policy where practical
-   avoid dangerouslySetInnerHTML unless content has passed trusted
    sanitization

## 7. CSRF

If authentication uses cookies: - SameSite - Secure - HttpOnly - CSRF
protection for state-changing requests

If using Authorization headers with tokens, still review the complete
authentication architecture and browser storage risks.

## 8. CORS

Allow only known frontend origins.

Never use:

``` text
Access-Control-Allow-Origin: *
```

for authenticated production APIs.

## 9. File upload security

Allowed: - JPEG - PNG - WebP - PDF only if required

Validate: - MIME - extension - file signature - size

Use random storage keys.

Do not: - execute uploaded files - store uploads in executable
directories - trust filenames - allow unlimited file size

## 10. Secrets

Use: - environment variables - secret manager in production

Never commit: - DB password - JWT secret - storage secret - email
password - maps private keys

## 11. Database

-   least-privilege database account
-   encrypted connections where supported
-   daily backups
-   tested restore process
-   migration versioning
-   no production DB exposed publicly

## 12. Headers

Recommended: - HSTS - Content-Security-Policy - X-Content-Type-Options -
Referrer-Policy - Permissions-Policy - frame protection via CSP
`frame-ancestors`

Configure carefully so analytics/maps/forms still work.

## 13. Rate limits

Suggested starting points: - login: strict - contact/quote: moderate -
public GET: higher - admin mutation: strict

Exact limits should be tuned from traffic.

## 14. Logging

Log: - authentication success/failure - authorization failures - admin
content changes - lead state changes - file upload failures - server
errors

Do not log: - passwords - access tokens - refresh tokens - unnecessary
personal data

## 15. Privacy

Collect only what is needed to: - contact the customer - understand
their request - provide service

Add: - Privacy Policy - Terms - data retention rules - contact method
for privacy requests

## 16. Admin security

Admin route: `/admin`

Requirements: - authentication - role guard - no public indexing - no
sensitive data in HTML - session/token expiration - audit log - MFA
recommended

## 17. Dependency security

-   lock dependency versions
-   automated vulnerability scanning
-   update framework/security libraries
-   remove unused packages
-   review third-party scripts

## 18. Production checklist

Before launch: - HTTPS - secure cookies if cookies are used - CORS
reviewed - CSP reviewed - rate limits - validation - DB backups - secret
rotation - error pages - no debug mode - no stack traces to users -
admin protected - staging and production separated

## 19. Security testing

Run: - dependency audit - API authorization tests - file upload tests -
rate-limit tests - XSS tests - SQL injection tests - authentication
tests - basic OWASP-aligned penetration review

## 20. Third-party services

Minimize third-party scripts.

Load: - maps only on pages needing maps - analytics after
consent/configuration as appropriate - chat widgets only if genuinely
useful

Every third party should be reviewed for: - privacy - performance - data
transfer - security
