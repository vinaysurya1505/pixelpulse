# Portfolio Website

Next.js + Tailwind CSS portfolio for Akshay K Upadhyay.

## Quick Start
1. Install Node.js 18 or newer.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env.local` in the project root and add:
   ```bash
   NEXT_PUBLIC_GOOGLE_FORM_URL=<your-public-google-form-link>
   ```
4. Run the local dev server:
   ```bash
   npm run dev
   ```
   The site is available at `http://localhost:8000`.

## Available Scripts
- `npm run dev` – start the development server.
- `npm run build` – build the production bundle.
- `npm run start` – serve the production build locally.
- `npm run lint` – run ESLint (on first run choose the Next.js preset when prompted).

## Contact Form
The "Send Message" button opens the Google Form specified by `NEXT_PUBLIC_GOOGLE_FORM_URL`. Enable response notifications inside Google Forms to receive emails for new submissions.

## Deployment
To deploy on Netlify:
1. Push the repository to GitHub (or your git provider).
2. In Netlify, create a new site from git.
3. Use `npm run build` as the build command and `.next` as the publish directory.
4. Add `NEXT_PUBLIC_GOOGLE_FORM_URL` to the site environment variables.
