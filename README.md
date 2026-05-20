# DTTtech.com

The source code for [dtttech.com](https://dtttech.com), the Digital Technology Training portfolio site.

## What this is

A static marketing site built with Vite, React, TypeScript, Tailwind, and Shadcn. It serves as the public face of Digital Technology Training. Sections include Hero, About, Services, Clients, Demos, Portfolio, Case Studies, Courses, and Contact.

This is not an application. It is a calling card site, used mainly to satisfy tender requirements and to give occasional clients a point of reference.

## Where it lives

The site is hosted on AWS:

- **S3 bucket**: `www.digitaltechnologytraining.com` (region `eu-west-2`)
- **CloudFront distribution**: `E12OLAF3D00MHI` (serving `dtttech.com` and `www.dtttech.com`)
- **Route 53** manages DNS for `dtttech.com`

## How deploys work

Every push to the `main` branch triggers `.github/workflows/deploy.yml`, which:

1. Checks out the code.
2. Installs dependencies with `npm install`.
3. Builds the site with `npm run build` (output goes to `dist/`).
4. Syncs `dist/` to the S3 bucket, excluding the `case-studies/*` and `courses/*` paths (those folders contain content managed directly in S3, not from this repo).
5. Invalidates the CloudFront cache so changes are visible within a minute.

A full deploy takes about 90 seconds. The status is visible under the **Actions** tab of this repo.

## How to make a small edit

For a one-word or one-line change, do it entirely in the browser:

1. Open the file you want to edit on GitHub. Most page copy lives under `src/components/`, for example `Hero.tsx`, `About.tsx`, `Services.tsx`, `Contact.tsx`.
2. Click the pencil icon at the top right of the file view to open the editor.
3. Make the change.
4. Scroll down to the **Commit changes** section, type a short message describing what you changed, and click **Commit changes**.
5. Wait about 90 seconds for the deploy to run. Refresh dtttech.com in a private browsing window to see the change.

If you cannot see your change after two minutes, check the **Actions** tab for a failed run.

## How to make a larger edit

For changes that touch more than one file, or for anything visual that needs previewing locally:

```bash
git clone https://github.com/DTTUser/dtttech-site.git
cd dtttech-site
npm install
npm run dev
```

The dev server runs at `http://localhost:8080` (or whatever Vite reports in the terminal). Edit files in VS Code or Cursor, see changes live in your browser, then commit and push when satisfied.

## AWS credentials

The deploy workflow authenticates to AWS using five GitHub Secrets, stored under **Settings > Secrets and variables > Actions**:

- `AWS_REGION`
- `AWS_S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

If a deploy fails with an authentication or permissions error, these are the first things to check. The access key pair belongs to an IAM user with permission to write to the S3 bucket and invalidate the CloudFront distribution, and nothing else.

## Why this repo exists separately

This repo was restored on 20 May 2026 from commit `9459c99` of an earlier repo named `ai-learning-packager` (formerly `dtt-portfolio-showcase`). That earlier repo had at one point hosted both the DTT site and a separate product, the AI Learning Packager. Because both projects shared the same Lovable project, work on the packager unintentionally overwrote the DTT site code in the shared repo, and AWS kept deploying whatever was at the head of `main` to dtttech.com.

The fix was to split the two projects into independent repos with independent deploy pipelines:

- This repo (`dtttech-site`) handles only the DTT portfolio site, deploying to AWS.
- The other repo (`ai-learning-packager`) handles only the AI Learning Packager product, deploying to Netlify.

The two are now fully independent. Changes here cannot affect the packager, and changes to the packager cannot affect this site.

## Related projects

- **AI Learning Packager**: a separate product, source at `github.com/DTTUser/ai-learning-packager`, live at `ai-learning-packager.netlify.app`. Has nothing to do with this repo. Maintained in its own Lovable project.

## If you are returning to this repo months from now

The most likely reason you are here is a tender or a client has asked you to update something specific on dtttech.com. The path is almost always:

1. Identify the file containing the text or section you need to change (it will be a `.tsx` file under `src/components/`).
2. Edit it on GitHub via the pencil icon.
3. Commit to `main`.
4. Wait about 90 seconds and confirm the change is live.

If something has broken in the meantime (the deploy fails, a domain has expired, an AWS credential has rotated), the place to start is the **Actions** tab. The most recent run's log will name the failing step. Common failures and fixes:

- **AccessDenied or InvalidAccessKeyId**: the AWS access key has been rotated or revoked. Generate a new pair in IAM and update the two secrets in this repo.
- **NoSuchBucket**: the S3 bucket name in the secret no longer matches the bucket in AWS. Check the S3 console and update.
- **CloudFront invalidation failed**: the distribution ID in the secret no longer matches the distribution in AWS. Check CloudFront and update.
