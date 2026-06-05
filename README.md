# Craft Brews + Commerce

A very simple static landing page for the Craft Brews + Commerce Boise meetup.

## Files

- `index.html` - the complete one-page landing page
- `styles.css` - layout, typography, responsive rules, and focus states
- `assets/hero-kegs.png` - hero background
- `assets/stop-one-food.png` - Stop One image
- `assets/stop-two-dinner.png` - Stop Two image
- `assets/stop-three-taps.png` - Optional Stop Three image
- `assets/headshot-jerry-travel.jpg` - host headshot
- `assets/og-social.png` - 1200x630 Open Graph / social share image

## Event Content

- Date: Tuesday, June 9
- Time: 4PM-7PM
- Stop One: 10 Barrel Brewing, 4pm-5pm
- Stop Two: Boise Brewing, 5pm-6pm
- Optional Stop Three: White Dog Brewing, after dinner
- Host: Jerry Towler

The read-more link scrolls to the stop details. Each stop includes menu and/or directions links.

## Preview Locally

Because this is plain HTML and CSS, opening `index.html` directly works. For a local HTTP preview:

```sh
python3 -m http.server 8123
```

Then open `http://127.0.0.1:8123/`.

## Social Sharing

The page includes Open Graph and Twitter card metadata using `assets/og-social.png`.

If the eventual hosting platform requires absolute share-image URLs, update these tags in `index.html` after the final domain is known:

- `og:image`
- `twitter:image`
