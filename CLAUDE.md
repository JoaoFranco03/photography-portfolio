# Portfolio Redesign Brief — armstrongpeterson.com

This is a ground-up rebuild. Do not reuse the old site's code or structure
(inconsistent /dist and /src paths, hand-numbered photo-XX.jpg files, broken on mobile).

## Purpose
Personal showcase of all my photography (landscape, portraits, couples,
graduation) in one stream. Photos only, no video.

## Feel
Minimal white gallery. Photos are the whole experience:
generous white space, quiet typography, almost no visible UI.

## Layout (references: jamespopsys.com, snapsbyfox.com)
- Header: my name as a simple wordmark, plus small links to About and Contact
- Home: one continuous vertical stream, one centered column on white,
  consistent spacing between photos
- Tap any photo: opens a full-screen viewer, swipe left/right for next or
  previous, tap or swipe down to close
- Footer: small Instagram link only
- Pages: Home (stream), About, Contact
- Domain stays armstrongpeterson.com

## Links
- Instagram is the only social link on the site: https://www.instagram.com/armstrong_peterson/
- No Facebook, LinkedIn, or other social links anywhere

## Mobile first
- Designed for phones first; each image fills the screen width
- Desktop: same single column, centered, images sized to the viewport
- Fast load on mobile is a hard requirement: lazy loading, responsive
  image sizes, modern formats (AVIF/WebP with JPEG fallback)
- No captions or EXIF shown

## Adding photos (top priority)
- photos/pinned/  → shown first, in filename order (01-, 02-, 03-)
- photos/stream/  → everything else, newest first by capture date (EXIF)
- If a photo has no capture date, fall back to file modified date
- To add a photo: drop the full-size export in stream/, commit, push. That's it.
- To pin or unpin: move it between the two folders
- Build step auto-resizes, converts formats, and regenerates the stream
- Never require hand-editing HTML to add or remove a photo

## Git and branches
- Work only on the redesign branch. Never commit to or push to main.
- The old site is preserved under the git tag old-site, so old template
  files can be deleted on this branch.
- Migrate the existing photos from src/images/ into photos/stream/.
- Add a .gitignore that excludes .DS_Store and build artifacts.

## Deployment (Cloudflare)
- Static site, deployed to Cloudflare from GitHub (main branch = production).
  Branch pushes get Cloudflare preview URLs.
- I do not want to change Cloudflare settings. Before choosing a build
  approach, figure out how the current site is deployed and design the
  new site to work within that setup.
- If a Cloudflare change is truly unavoidable (e.g. build command or output
  folder), stop and tell me exactly what to change and why before building
  around it.
- Keep dependencies minimal; explain any build tool you choose before adding it

## Working style
- Ask before making big structural decisions
- Work in small steps and commit after each working step
