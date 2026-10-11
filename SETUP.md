# Accel House website: setup

The site for **accelhouse.com**. It is separate from the Accel Elite site at
accel-elite.asia, which is not changed by anything here. The member login,
dashboard and admin panel stay on accel-elite.asia.

## 1. Put the site online (Vercel)

1. Sign in to vercel.com with the account that already hosts the Accel Elite site.
2. Choose **Add New > Project**.
3. Under "Import Git Repository" pick **chanhoong88-cmd/accelhouse**, then **Import**.
   If it is not listed, choose "Adjust GitHub App Permissions" and allow the `accelhouse` repository.
4. Leave every setting as it is. Unlike the old site, **Root Directory stays empty**.
5. Press **Deploy**. After about a minute Vercel gives you an address ending in `.vercel.app`.
   The site is viewable there straight away. The forms will not send yet (step 2).

## 2. Connect the invitation form to your existing applications list

The form saves into the same database the admin panel at accel-elite.asia/admin
already reads, so new requests appear there. Nothing on the old site changes.

1. In Vercel, open the **old** project (the Accel Elite site) > **Settings > Environment Variables**.
2. For each name below, click the eye icon to reveal the value and copy it:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `APPLICATIONS_FROM_EMAIL`
3. Open the **new** project (accelhouse) > **Settings > Environment Variables** and add
   the same four names with the same values.
4. Add three more in the new project:
   - `APPLICATIONS_NOTIFY_EMAIL` = `membership@accel-elite.asia`
   - `CONTACT_NOTIFY_EMAIL` = `enquiry@accel-elite.asia`
   - `NEXT_PUBLIC_MEMBER_LOGIN_URL` = `https://accel-elite.asia/login`
5. Go to **Deployments**, open the menu on the latest one and choose **Redeploy**.
   Environment variables only take effect after a redeploy.

If Vercel will not reveal a value: the two Supabase values are in the Supabase
dashboard under Project Settings > API, and a new Resend key can be created at
resend.com under API Keys.

Keep `SUPABASE_SERVICE_ROLE_KEY` private. It is only ever used on the server.

## 3. Test it

1. Open the `.vercel.app` address, scroll to "Request an invitation" and send a test request.
2. You should see: "Thank you. Your request has been received."
3. Sign in at accel-elite.asia/admin. The test request appears in the applications list.
   Its note begins with "Source: accelhouse.com", followed by company, position and interest.
4. An email also arrives at membership@accel-elite.asia.
5. Send a test from the Contact us page. It arrives by email at enquiry@accel-elite.asia
   (contact messages are emailed only, not stored).

## 4. Point accelhouse.com at the site (GoDaddy)

1. In Vercel, open the new project > **Settings > Domains**.
2. Add `accelhouse.com`, then add `www.accelhouse.com`. Vercel shows the DNS records it needs.
   **Use the values Vercel shows you.** They are normally:
   - Type `A`, Name `@`, Value `76.76.21.21`
   - Type `CNAME`, Name `www`, Value `cname.vercel-dns.com`
3. In GoDaddy: **My Products > accelhouse.com > DNS**.
4. Edit the existing `A` record named `@` to the value from Vercel. Delete any other `A` record
   named `@` (GoDaddy usually adds a "Parked" one).
5. Edit the `CNAME` record named `www` to the value from Vercel.
6. Save. Within a few minutes to an hour Vercel shows both domains as "Valid" and adds HTTPS itself.

## 5. Google

The site can be listed by Google as soon as accelhouse.com points to it.
To hide it again, add `NEXT_PUBLIC_ALLOW_INDEXING` = `false` in Vercel and redeploy.

1. Go to search.google.com/search-console and add the property `accelhouse.com`.
2. Verify it with the DNS record Google gives you (add it as a TXT record in GoDaddy).
3. Under **Sitemaps**, submit `https://accelhouse.com/sitemap.xml`.

## If the forms do not send

Open `https://accelhouse.com/api/health`. It lists each setting as "set" or
"missing" (it never shows a value) and says whether the applications list can be reached.
A setting that shows "missing" after you added it almost always means the site was not
redeployed, or the setting was saved for Preview only and not Production.

## Where things are

| To change | Edit |
|---|---|
| Home page wording and sections | `app/page.tsx` |
| Accel Collection and Accel Reserve | `app/collection/page.tsx` |
| FAQ | `app/faq/page.tsx` |
| Contact page | `app/contact/page.tsx` |
| Menu and three-dot menu | `app/components/Nav.tsx` |
| Footer | `app/components/Footer.tsx` |
| Colours, type, spacing, motion | `app/globals.css` |
| Photographs | `public/img/` |
| Invitation form and its handler | `app/components/InviteForm.tsx`, `app/api/apply/route.ts` |
| Contact form and its handler | `app/components/ContactForm.tsx`, `app/api/contact/route.ts` |
