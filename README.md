# Craft Brew & Commerce static site

This is a deploy-anywhere static event page designed for GitHub Pages or GitLab Pages.

## What is included

- `index.html` — the page
- `styles.css` — the full typographic design system
- `config.js` — all event settings in one place
- `app.js` — renders the route and generates the downloadable calendar invite
- `assets/hero-poster.png` — the matching poster image

## Fast setup

1. Open `config.js`.
2. Edit the conference name, date label, start/end ISO timestamps, and any route notes.
3. Paste your Kit inline embed into `formEmbedHtml`.
4. Deploy the folder to GitHub Pages or GitLab Pages.
5. Point your domain at the site.

## Kit form instructions

Kit provides embeddable form HTML from **Grow → Landing Pages & Forms → Embed**. The page is already styled to visually frame that embed. Replace the placeholder fallback form by pasting the inline HTML into `formEmbedHtml` in `config.js`. The Kit help article on form embedding basics documents where to find those embed codes. citeturn141752search3

### Suggested Kit form settings

- Form name: `Craft Brew & Commerce RSVP`
- Fields: first name, email, optional “What are you building?”
- Tag: `boise-crawl-2026`
- Automation ideas:
  - confirmation email immediately
  - reminder morning-of
  - reminder one hour before
  - follow-up email next day

## Brewery references used on the page

- Boise Brewing lists its address as **521 W Broad St, Boise, ID 83702** on its official site. citeturn141752search0turn141752search4
- White Dog Brewing is listed at **705 W Fulton St, Boise, ID 83702** by a regional tourism listing, while its official site confirms the Boise location. citeturn141752search11turn141752search14
- Payette Brewing lists its address as **733 S Pioneer St, Boise, ID 83702** on its official contact page. citeturn141752search2turn141752search18
