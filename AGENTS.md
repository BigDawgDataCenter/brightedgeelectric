# House rules for coding agents (Jules and friends)

This repo is a client's public website, served as plain static files by GitHub Pages
(index.html, privacy.html, accessibility.html, assets/). Every pull request is reviewed before merge.

## Before you submit
- Open each page you changed and check it at 375px wide: no horizontal scroll, tap targets at least 44px.
- `git status`: only the files the task names may change. Show the list.
- Your summary must match the diff. Don't describe work that isn't in the commit.

## Never commit
- Scratch, helper or debug files, screenshots, or anything outside the task.
- Keys, tokens, customer data, or the client's private details beyond what's already public on the site.
- Whole-file reformatting or line-ending changes. Keep diffs to what the task needs.

## Content rules
- Never invent facts about the business: no made-up reviews, ratings, awards, years, prices,
  insurance or bonding claims ("bonded and insured" is never used), certifications or service areas.
  Use only what's already on the site or given in the task.
- Keep `<meta name="robots" content="noindex">` on every page until the owner says to launch.
- The request form posts to the business's HQ app. Don't change its field names, its endpoint
  or the hidden honeypot field.
- No new libraries, trackers, analytics or third-party embeds. Fonts come from Google Fonts only.
- Buttons and the form ask for a call back, not an estimate (estimates live in the owner's own app).

## Done means
Pages render, only intended files changed, and a PR description listing every file and how you checked it.
