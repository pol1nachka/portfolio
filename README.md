# portfolio

## GitHub Actions deployment

This repo now includes `.github/workflows/deploy.yml`, which:

1. Uses Node 20 on GitHub-hosted runners.
2. Runs `npm run lint` on every PR/push.
3. Builds the Vite app and keeps the `dist/` output as artifacts.
4. Publishes to GitHub Pages from the `main` branch.
5. Optionally deploys over SSH via `rsync` to any Linux host.

### Required project settings

- Enable GitHub Pages with the “GitHub Actions” source.
- For SSH deploys, add these repository secrets/variables:
  - Secrets: `SSH_PRIVATE_KEY`, `DEPLOY_USER`, `DEPLOY_HOST`, `DEPLOY_PATH`, `DEPLOY_PORT` (optional, defaults to 22).
  - Repository variable: `DEPLOY_URL` (used for the environment link).

### How deployments work

1. Push to any branch → lint + build jobs run.
2. Merge/push to `main` → the `deploy_pages` job uploads to GitHub Pages.
3. On the same branch, the `deploy_ssh` job (if secrets exist) rsyncs `dist/` to `DEPLOY_PATH` on the remote host, providing a direct custom-domain deployment.

### GitLab (optional)

The previous GitLab CI file (`.gitlab-ci.yml`) is still available if you mirror this repo to GitLab; steps mirror the GitHub flow (lint → build → GitLab Pages/SSH).

To customize hosting (e.g., SSH deploy, S3, etc.), duplicate the deploy stage and replace the `pages` job with the desired provider-specific commands/secrets.