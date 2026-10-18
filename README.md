# DivyaPath Travels

A responsive, static travel website built with semantic HTML, CSS and vanilla JavaScript. No framework, build step or package installation is required.

The site includes a searchable Uttarakhand destination guide, category and duration filters, editable tour-package templates, responsive navigation, and a booking enquiry that opens a prefilled WhatsApp message. The customer must review and press **Send** in WhatsApp; opening the chat does not send or confirm a booking.

## Open and edit the website

1. Open this project folder in VS Code (`File` → `Open Folder…`).
2. Open `index.html` and use **Open with Live Server** if the Live Server extension is installed. Alternatively, open `index.html` directly in Chrome.
3. Edit the business settings near the top of `script.js`, then save and refresh the page. The main design is in `style.css`; page sections are in `index.html`.

Opening the file directly works for the page and local images. A local web server is recommended when checking browser behaviour and preparing to publish.

## Configure before publishing

Edit the single `CONFIG` object near the top of `script.js`:

- `phone`: public phone number; use a format suitable for displaying and calling.
- `whatsapp`: the business WhatsApp number used by the site. Keep the country calling code and digits only (for example, `919876543210`; do not include `+`, spaces or punctuation). The current value is the number previously supplied for this business; edit this one setting if it changes.
- `email`, `address`, `operatingHours`: verified business details.
- `instagramUrl`, `facebookUrl`: full, verified profile URLs.
- `domainUrl`: the final HTTPS website URL after the domain is connected.
- `departureLocation`: update only after the operating departure point and pickup arrangements are confirmed.

Blank contact settings remain hidden. A Google Maps link is generated only when an address has been entered. The LocalBusiness/TravelAgency structured data adds a phone, email, address or website only when its matching verified setting is populated. Canonical and Open Graph URLs are populated from `CONFIG.domainUrl`; set it to the final HTTPS base URL after choosing the real deployment address, and replace the `YOUR-DOMAIN.com` placeholders in `robots.txt` and `sitemap.xml`.

The package rates currently stored in `CONFIG.draftPricesINR` are **unverified draft figures** and are not shown as offers. Keep `pricesApproved: false` unless the owner has checked and approved the relevant cost calculations. After approval, set it to `true` to display the three corresponding draft rates; review package contents and rate basis at the same time. Quote rates for the other packages in writing rather than adding unapproved prices.

`destinationGroups` in `script.js` contains the destination names, regions, descriptions, durations, trip types, image categories and seasonal notes. Add or edit destinations there. The Chopta, Tungnath, Rudranath, Kartik Swami and Chandrashila cards include extra route, effort and overnight-planning guidance in the `trekGuides` object; confirm local access, current conditions and facilities before travel. The destination explorer filters by category, search text and duration. Non-temple destination photographs are illustrative regional landscapes and are not represented as photographs of each exact attraction.

`packages` and `fleet` in `script.js` are editable data arrays for booking-form package options, itinerary summaries and vehicle enquiry categories. Package templates are enquiry starting points, not confirmed offers. Pickup/drop-off, dates, stay, meals, vehicle, route, trek conditions, inclusions, exclusions and cancellation terms must all be confirmed in a written proposal. The fleet entries are not claims that the business owns or currently has any listed model. Confirm actual inventory, passenger and luggage capacity, AC, price and photographs before changing their “to be confirmed” details. Package stays, services and exclusions also require review against the actual supplier arrangements before publication.

## Enquiry form, calls and WhatsApp

- **Call:** after setting `phone`, use one of the “Call” links. The link uses `tel:` and opens the device’s configured calling application; a desktop browser may ask the user to choose one.
- **WhatsApp contact:** after setting `whatsapp`, the floating button and WhatsApp links open a `wa.me` chat. On a phone this may open the WhatsApp app; on a computer it may open WhatsApp Web.
- **Booking enquiry:** `script.js` → `CONFIG.whatsapp` is the single WhatsApp setting. Choose a destination or use a destination/package **Book This Trip** button to preselect the form, complete the required fields and submit. The form includes pickup and drop-off, travel dates, traveller count, package, vehicle, accommodation, room preference, meals and requests. It checks required fields, email format, traveller count, non-past dates, return date order and a mobile number of 10–15 digits. The formatted message opens in WhatsApp; the customer must review and tap **Send** for the message to reach the business.
- An enquiry, opening a chat or sending a message **does not confirm a booking**. DivyaPath Travels must confirm availability and accept the final written itinerary, price, inclusions and terms with the customer.
- A successful WhatsApp handoff temporarily disables the submit button to help prevent accidental duplicate submissions. Editing the form allows a new enquiry. If a pop-up is blocked, allow pop-ups for the page and try again.
- A fleet enquiry button fills the vehicle field in the form. A direct fleet WhatsApp button appears only when a WhatsApp number is configured.

### Static-site limitations

This HTML/CSS/JavaScript website cannot securely store bookings, send email by itself, check vehicle or hotel availability, process payments, or notify the business in the background. Form details are assembled in the browser and placed into a WhatsApp link; they are not posted to a DivyaPath server. WhatsApp is a third-party service with its own availability and privacy terms. To collect enquiries independently, add a trusted form service or a properly secured backend, and update the privacy notice and consent flow accordingly.

## Photos and image credits

All photos used by the website are stored locally in `assets/images/`; page, stylesheet and JavaScript image paths are relative so they also work from a GitHub Pages project URL. The original files under `images/vehicles/` have been retained unchanged as a safety copy; the website does not load images from that legacy folder.

Temple photographs are from Wikimedia Commons and are used under their stated terms:

- `assets/images/yamunotri-temple.jpg` — “Yamunotri Temple.jpg”, Mayank Choudha, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); [source file](https://commons.wikimedia.org/wiki/File:Yamunotri_Temple.jpg).
- `assets/images/gangotri-temple.jpg` — “Gangotri temple in Uttarakhand..jpg”, Arupamdas, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); [source file](https://commons.wikimedia.org/wiki/File:Gangotri_temple_in_Uttarakhand..jpg).
- `assets/images/kedarnath-temple.jpg` — “Kedarnath Temple.jpg”, Shaq774, public domain as identified on the [source file page](https://commons.wikimedia.org/wiki/File:Kedarnath_Temple.jpg).
- `assets/images/badrinath-temple.jpg` — “Devotees at the Badrinath Temple in Uttarakhand, India.jpg”, Billjones94, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); [source file](https://commons.wikimedia.org/wiki/File:Devotees_at_the_Badrinath_Temple_in_Uttarakhand,_India.jpg).

When redistributing the CC BY-SA photographs, retain attribution, link the license, indicate any modifications, and respect the license’s share-alike requirement. The files on this site are resized copies, not claims of ownership.

The vehicle cards use model-specific reference photos saved under `assets/images/`. The photos are illustrative and do not show vehicles owned or operated by DivyaPath Travels. Full photographer, source and license details are in [`assets/images/ATTRIBUTION.txt`](assets/images/ATTRIBUTION.txt); retain the required attribution and license information when redistributing them.

The Himalayan landscape and destination guide photos are from Unsplash and are used under the [Unsplash License](https://unsplash.com/license), which permits download and reuse. They are stored locally, rather than requested from Unsplash at runtime:

- `assets/images/himalaya-landscape.jpg` and `assets/images/destination-mountain.jpg` — photo `1464822759023-fed622ff2c3b`: [source](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b).
- `assets/images/destination-lake.jpg` — photo `1501785888041-af3ef285b470`: [source](https://images.unsplash.com/photo-1501785888041-af3ef285b470).
- `assets/images/destination-forest.jpg` — photo `1448375240586-882707db888b`: [source](https://images.unsplash.com/photo-1448375240586-882707db888b).
- `assets/images/destination-waterfall.jpg` — photo `1432405972618-c60b0225b8f9`: [source](https://images.unsplash.com/photo-1432405972618-c60b0225b8f9).
- `assets/images/destination-city.jpg` — photo `1519501025264-65ba15a82390`: [source](https://images.unsplash.com/photo-1519501025264-65ba15a82390).

`assets/images/illustrative-van.jpg` is retained but is not used by the current website.

## Publish with GitHub Pages

This project is a static site: it has no backend, build command or package installation requirement. Its form prepares an enquiry in the browser and opens WhatsApp; it does not store or send bookings to a DivyaPath server.

1. Before making the repository public, review the business contact details in `script.js` and remove or change any details that should not be published. Do not add `.env` files, passwords, API keys or tokens.
2. Create a public GitHub repository and upload the contents of this project folder (including `index.html`, `style.css`, `script.js`, `assets/`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `README.md` and `.gitignore`) to the repository root.
3. In GitHub, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and `/(root)`, then save.
4. Wait for the Pages deployment to finish. Open the URL shown in **Settings → Pages** and check the page on desktop and mobile, including images, navigation, filters and the enquiry-to-WhatsApp handoff.
5. Keep `CONFIG.domainUrl` blank if no final domain is configured. If setting it, use the complete deployed base URL; for a project site include the repository path (for example, `https://OWNER.github.io/REPOSITORY`). Replace the `YOUR-DOMAIN.com` placeholders in `robots.txt` and `sitemap.xml` only after selecting the final domain.

## Publish and connect a `.com` domain

1. Purchase an available domain from a registrar and select a static web host. Domain purchase, renewal and hosting terms vary by provider.
2. Upload the project files and the complete `assets/images` folder to the host’s public site directory, keeping the folder structure and file names unchanged. A static host such as GitHub Pages, Netlify or Cloudflare Pages can serve these files; no build command is needed.
3. In the host’s domain settings, add the custom `.com` domain. At the registrar, set the exact DNS records specified by the host (commonly A/AAAA records for the apex domain and a CNAME for `www`). DNS changes can take time to propagate. Do not copy example record values from an unrelated host.
4. Enable the host’s HTTPS/TLS certificate, wait until it is active, and choose the preferred canonical hostname (`www` or the apex domain). Redirect the other hostname to it if the host supports redirects.
5. Set `CONFIG.domainUrl` in `script.js` to the real HTTPS URL. Replace the `YOUR-DOMAIN.com` values in `robots.txt` and `sitemap.xml`; confirm canonical, Open Graph and sitemap links all match the chosen domain.
6. Test the HTTPS site, redirects, images, contact methods and form handoff on a phone and desktop browser. Submit the sitemap to Google Search Console after the public domain is live.

## Before-launch checklist

- [ ] Replace and verify the phone, WhatsApp, email, business address, hours and social URLs; test every configured link.
- [ ] Confirm the actual departure/pickup point before publishing it as an operating address.
- [ ] Have the owner approve price calculations, accommodation, meal plan, vehicle arrangements, inclusion/exclusion lists and booking terms.
- [ ] Confirm vehicle inventory and obtain permission for any business fleet photographs; the current model-specific reference photos do not represent actual business vehicles.
- [ ] Verify pilgrimage opening dates, road routes, distances, road status, temple timings and local access arrangements for the exact travel dates.
- [ ] Confirm the Kedarnath base point, trekking requirements and any permitted local transport independently for each trip.
- [ ] Replace all domain placeholders and confirm sitemap, robots, canonical and Open Graph metadata use the final HTTPS URL.
- [ ] Review privacy and booking terms. Add an approved backend or trusted form provider if direct submission/storage is required.

## Test in Chrome

1. Check desktop, tablet and mobile layouts with Chrome DevTools device emulation. Verify the mobile menu opens/closes, section links scroll correctly and focus remains visible.
2. Click each destination category, search for a destination and test each duration option. Confirm the result count and empty-search message update.
3. Check the four temple images, landscape and illustrative vehicle images load; intentionally test a missing image URL to confirm the fallback works.
4. Test each destination and package booking button. Verify it selects the right destination/package, and check all footer and in-page links.
5. Submit a test enquiry and review the prefilled WhatsApp message for every entered value, including pickup/drop-off. Do not press **Send** unless you intend to deliver the test message. Use a test number you control if necessary.
6. Try an invalid mobile number, a missing required field, an invalid email, a past departure date and a return date earlier than departure. Confirm the invalid field receives focus.
7. Confirm that a missing or malformed WhatsApp setting produces a clear setup message. Confirm unconfigured phone, email, address and social methods stay hidden.
8. Confirm the booking remains explicitly unconfirmed after WhatsApp opens and repeated submission is blocked until the enquiry is edited.
