# Beacon Academy website

This is a static HTML/CSS/JavaScript website ready for Cloudflare Pages.

## Files
- `index.html` — page content and structure
- `style.css` — responsive design and styling
- `script.js` — navigation and editable contact/registration settings

## Before publishing: edit your details
Open `script.js` and edit the `ACADEMY_CONFIG` values:
- `registrationUrl`: replace the sample Google Forms URL with your real registration form URL.
- `whatsappNumber`: enter your real WhatsApp number with country code, digits only.
- `displayPhoneNumber`: the phone number shown on the page.
- `contactEmail`: your real academy email address.

The current contact details are sample placeholders and must be replaced.
The course fee is set to ₹299. The curriculum is a suggested outline and can be revised.

## Test locally
Open `index.html` in a browser, or use the VS Code Live Server extension.

## Publish to Cloudflare Pages using GitHub
1. Extract this ZIP.
2. Upload the contents of the `beacon-academy` folder to the root of your GitHub repository.
3. Make sure `index.html`, `style.css`, and `script.js` are at the repository root.
4. Commit the changes.
5. Cloudflare Pages should automatically deploy the new commit.

For a plain static site, Cloudflare Pages build settings can use:
- Framework preset: None
- Build command: leave blank (or `exit 0` if the dashboard requires a command)
- Build output directory: `/` or `.` depending on the interface
- Root directory: repository root/default

## Important
This is a static marketing/landing website. It does not yet process payments, save registrations, authenticate students, or issue verified certificates. Connect a form/payment/backend service separately when ready.
