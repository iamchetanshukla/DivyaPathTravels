"use strict";

// Edit these values after the business details have been confirmed.
const CONFIG = {
  "businessName": "DivyaPath Travels",
  "phone": "9936337414",
  // Keep the country calling code. Use digits only, with no + sign or spaces.
  "whatsapp": "9936337414",
  "email": "paatee335@gmail.com",
  "address": "Near Bharatmata Mandir, Parmarth Ashram, Haridwar",
  "operatingHours": "",
  "instagramUrl": "",
  "facebookUrl": "",
  "domainUrl": "",
  "departureLocation": "Haridwar (proposed; confirm pickup point)",
  "pricesApproved": false,
  "draftPricesINR": {
    budgetGroup: 24999,
    standardFamily: 29999,
    deluxe: 39999
  }
};

const packages = [
  {
    id: "budget-group",
    name: "Budget Group Char Dham Yatra",
    type: "Shared group",
    duration: "10 days / 9 nights · proposed",
    overview: "A proposed shared-group circuit covering Yamunotri, Gangotri, Kedarnath and Badrinath.",
    accommodation: "Shared stay; property and category to be confirmed",
    meals: "Breakfast, lunch and dinner only if specified in the accepted plan",
    vehicle: "Shared road transport; group size and vehicle to be confirmed",
    inclusions: ["Road transport as listed in the written proposal", "Accommodation only as listed in the written proposal", "Meals only as listed in the written proposal"],
    exclusions: ["Kedarnath trek or authorised local transport unless explicitly listed", "Personal expenses, tips and unlisted meals", "Any service not itemised in the accepted proposal"],
    priceKey: "budgetGroup",
    priceBasis: "Per person; draft rate not approved"
  },
  {
    id: "standard-family",
    name: "Standard Family Char Dham Yatra",
    type: "Family journey",
    duration: "10 days / 9 nights · proposed",
    overview: "A proposed family circuit with the pace, room arrangement and road transport discussed for your group.",
    accommodation: "Room arrangement and property to be confirmed",
    meals: "Breakfast, lunch and dinner only if specified in the accepted plan",
    vehicle: "Vehicle category, seating and luggage capacity to be confirmed",
    inclusions: ["Road transport as listed in the written proposal", "Accommodation only as listed in the written proposal", "Meals only as listed in the written proposal"],
    exclusions: ["Kedarnath trek or authorised local transport unless explicitly listed", "Personal expenses and unlisted meals", "Any service not itemised in the accepted proposal"],
    priceKey: "standardFamily",
    priceBasis: "Per person; draft rate not approved",
    featured: true
  },
  {
    id: "deluxe",
    name: "Deluxe Char Dham Yatra",
    type: "Comfort-focused",
    duration: "10 days / 9 nights · proposed",
    overview: "A proposed circuit where the accommodation and vehicle arrangements are selected and confirmed with you.",
    accommodation: "Property and room details subject to confirmation",
    meals: "Breakfast, lunch and dinner only if specified in the accepted plan",
    vehicle: "Vehicle category, seating and luggage capacity to be confirmed",
    inclusions: ["Road transport as listed in the written proposal", "Accommodation only as listed in the written proposal", "Meals only as listed in the written proposal"],
    exclusions: ["Kedarnath trek or authorised local transport unless explicitly listed", "Personal expenses and unlisted meals", "Any service not itemised in the accepted proposal"],
    priceKey: "deluxe",
    priceBasis: "Per person; draft rate not approved"
  },
  
  {
    id: "do-dham",
    name: "Do Dham Yatra",
    type: "Two sacred shrines",
    duration: "Duration tailored to route and dates",
    overview: "A proposed visit to Kedarnath and Badrinath, planned around your dates and current access conditions.",
    accommodation: "Property and room details subject to confirmation",
    meals: "Breakfast, lunch and dinner only if specified in the accepted plan",
    vehicle: "Vehicle category and road transfers subject to confirmation",
    inclusions: ["Road transport, accommodation and meals only as listed in the proposal"],
    exclusions: ["Kedarnath trek or authorised local transport unless explicitly listed", "Personal expenses and unlisted services"],
    priceBasis: "Quote for your dates and party"
  },
  {
    id: "kedarnath-special",
    name: "Kedarnath Special Package",
    type: "Kedarnath pilgrimage",
    duration: "Duration tailored to route and access plan",
    overview: "A Kedarnath-focused proposal with the roadhead, trekking or authorised local access arrangement discussed upfront.",
    accommodation: "Property and room details subject to confirmation",
    meals: "Breakfast, lunch and dinner only if specified in the accepted plan",
    vehicle: "Road transfer to applicable base point only; details to be confirmed",
    inclusions: ["Road transport, accommodation and meals only as listed in the proposal"],
    exclusions: ["Trek, porter, pony, helicopter or other local access unless expressly confirmed", "Personal expenses and unlisted services"],
    priceBasis: "Quote for your dates and access requirements"
  },
  {
    id: "local-sightseeing",
    name: "One-Day Local Sightseeing",
    type: "Editable trip template",
    duration: "1 day · route tailored to your enquiry",
    overview: "A flexible local sightseeing day with pickup and stops agreed before booking.",
    accommodation: "Not included unless listed in the written proposal",
    meals: "Not included unless listed in the written proposal",
    vehicle: "Sedan, SUV or Tempo Traveller; confirm availability and capacity",
    inclusions: ["Only items listed in the accepted written proposal"],
    exclusions: ["Meals, entry fees and services not listed in the proposal"],
    priceBasis: "No price published; request a written quote"
  },
  {
    id: "weekend",
    name: "Two-Day Weekend Trip",
    type: "Editable trip template",
    duration: "2 days / 1 night · route and stay to be confirmed",
    overview: "A short Uttarakhand break planned around your pickup point, dates and preferred pace.",
    accommodation: "Property, category and room type to be confirmed",
    meals: "Only if itemised in the accepted written proposal",
    vehicle: "Sedan, SUV or Tempo Traveller; confirm availability and capacity",
    inclusions: ["Only items listed in the accepted written proposal"],
    exclusions: ["Meals, entry fees and services not listed in the proposal"],
    priceBasis: "No price published; request a written quote"
  },
  {
    id: "mountain-three-day",
    name: "Three-Day Mountain Tour",
    type: "Editable trip template",
    duration: "3 days / 2 nights · route and stay to be confirmed",
    overview: "A flexible mountain tour with driving time, overnight stops and sightseeing confirmed for your dates.",
    accommodation: "Property, category and room type to be confirmed",
    meals: "Only if itemised in the accepted written proposal",
    vehicle: "Sedan, SUV or Tempo Traveller; confirm availability and capacity",
    inclusions: ["Only items listed in the accepted written proposal"],
    exclusions: ["Meals, entry fees and services not listed in the proposal"],
    priceBasis: "No price published; request a written quote"
  },
  {
    id: "himalayan-holiday",
    name: "Four-to-Six-Day Himalayan Holiday",
    type: "Editable trip template",
    duration: "4–6 days · route and overnight stops to be confirmed",
    overview: "A custom-paced Himalayan holiday with stays and road transfers proposed for your group.",
    accommodation: "Property, category and room type to be confirmed",
    meals: "Only if itemised in the accepted written proposal",
    vehicle: "Sedan, SUV or Tempo Traveller; confirm availability and capacity",
    inclusions: ["Only items listed in the accepted written proposal"],
    exclusions: ["Meals, entry fees and services not listed in the proposal"],
    priceBasis: "No price published; request a written quote"
  },
  {
    id: "pilgrimage-seven-day",
    name: "Seven-to-Twelve-Day Pilgrimage Tour",
    type: "Editable trip template",
    duration: "7–12 days · temple access and dates to be confirmed",
    overview: "A pilgrimage itinerary planned around official opening dates, road conditions and current access rules.",
    accommodation: "Property, category and room type to be confirmed",
    meals: "Only if itemised in the accepted written proposal",
    vehicle: "Sedan, SUV or Tempo Traveller; confirm availability and capacity",
    inclusions: ["Only items listed in the accepted written proposal"],
    exclusions: ["Trek and local access costs unless confirmed in writing", "Services not listed in the proposal"],
    priceBasis: "No price published; request a written quote"
  },
  {
    id: "custom-private",
    name: "Custom Private Tour",
    type: "Editable trip template",
    duration: "Dates and duration chosen with you",
    overview: "Tell us where you want to go and we will discuss a possible route, practical travel time and arrangements.",
    accommodation: "Optional; property, category and room type to be confirmed",
    meals: "Only if itemised in the accepted written proposal",
    vehicle: "Sedan, SUV or Tempo Traveller; confirm availability and capacity",
    inclusions: ["Only items listed in the accepted written proposal"],
    exclusions: ["Meals, entry fees and services not listed in the proposal"],
    priceBasis: "No price published; request a written quote"
  }
];

const photoOptions = {
  mountain: "assets/images/destination-mountain.jpg",
  lake: "assets/images/destination-lake.jpg",
  forest: "assets/images/destination-forest.jpg",
  waterfall: "assets/images/destination-waterfall.jpg",
  city: "assets/images/destination-city.jpg"
};

const trekGuides = {
  "Tungnath Temple": {
    route: "Drive to Chopta, then follow the uphill foot trail to the temple. The road journey and trek are separate parts of the trip.",
    effort: "Moderate; uphill walking at high altitude. Take a gradual pace and assess fitness and weather.",
    stay: "Plan an overnight stay around Chopta or another confirmed nearby stop. Facilities and availability vary by season.",
    highlights: "A high-altitude Shiva temple and a mountain trail through the Chopta area."
  },
  "Rudranath": {
    route: "A remote Panch Kedar pilgrimage reached by a multi-day mountain trek. Sagar village is one commonly used approach; verify the current route and access locally.",
    effort: "Strenuous; long, high-altitude walking over multiple days. Prior trekking experience and preparation are advisable.",
    stay: "Basic seasonal stays or camping arrangements may be limited along the route; confirm permitted options and availability before travel.",
    highlights: "A remote Himalayan shrine, alpine meadows and a quieter high-mountain pilgrimage experience."
  },
  "Kartik Swami Temple": {
    route: "Drive toward Kanakchauri, then walk the final trail to the hilltop temple. Keep road distance separate from the walking approach.",
    effort: "Moderate; uphill walking on a mountain trail. Trail condition and effort can change with weather.",
    stay: "Consider an overnight stay in a confirmed nearby town or village; do not assume accommodation is available at the trailhead.",
    highlights: "A hilltop temple setting with wide Himalayan views when the weather is clear."
  },
  "Chandrashila Summit": {
    route: "Continue on foot beyond Tungnath from the Chopta trail. This is a separate, higher-altitude extension and not a vehicle route.",
    effort: "Strenuous in snow, wind or poor visibility; only continue when conditions are suitable and local guidance permits.",
    stay: "Use a confirmed base stay around Chopta or another practical stop; summit visits are generally planned as a day walk.",
    highlights: "A high summit viewpoint above the Tungnath trail, with visibility dependent on weather."
  }
};

// Each row: name, region, description, duration, trip type, photo key, season note, trek note.
const destinationGroups = [
  {
    id: "char-dham",
    name: "Char Dham Yatra",
    items: [
      ["Yamunotri Dham", "Uttarkashi district", "A sacred Himalayan shrine reached from the Yamunotri trailhead.", "2–3 days", "Pilgrimage", "temple", "Temple access is seasonal; verify official opening dates.", "Trek distance varies by route and local conditions; confirm before travel."],
      ["Gangotri Dham", "Uttarkashi district", "Visit the revered temple in the upper Bhagirathi valley.", "2–3 days", "Pilgrimage", "temple", "Temple access is seasonal; verify official opening dates.", ""],
      ["Kedarnath Dham", "Rudraprayag district", "A high-altitude pilgrimage requiring a separate onward journey from the roadhead.", "4–6 days", "Pilgrimage", "temple", "Seasonal access; check registration, weather, road and official temple advisories.", "Trek/local transport is separate from road distance; current route length and options must be verified."],
      ["Badrinath Dham", "Chamoli district", "A Himalayan pilgrimage destination on the Alaknanda valley route.", "2–3 days", "Pilgrimage", "temple", "Temple access and mountain roads are seasonal; check official updates.", ""],
      ["Complete Char Dham Yatra", "Uttarakhand", "A proposed circuit covering Yamunotri, Gangotri, Kedarnath and Badrinath.", "7+ days", "Pilgrimage", "mountain", "Seasonal route; dates, permits, road access and temple operations need confirmation.", "The Kedarnath trek/local access is separate from driving distance."]
    ]
  },
  {
    id: "haridwar-rishikesh",
    name: "Haridwar & Rishikesh",
    items: [
      ["Har Ki Pauri Ganga Aarti", "Haridwar", "Experience the riverfront and evening aarti; access and timings can change.", "1 day", "Pilgrimage", "lake", "Confirm current aarti time, crowd and local access guidance.", ""],
      ["Mansa Devi Temple", "Haridwar", "Visit the hilltop temple; choose a route subject to current operations.", "1 day", "Pilgrimage", "mountain", "Check ropeway or walking access and operating status.", ""],
      ["Chandi Devi Temple", "Haridwar", "A temple visit planned around the route, weather and operating arrangements.", "1 day", "Pilgrimage", "mountain", "Check ropeway or walking access and operating status.", ""],
      ["Bharat Mata Mandir", "Haridwar", "Explore the multi-storey temple dedicated to the spirit of India.", "1 day", "Pilgrimage", "mountain", "Confirm local opening hours before departure.", ""],
      ["Ram Jhula", "Rishikesh", "Explore the river crossing area, nearby ashrams and riverside sights.", "1 day", "Sightseeing", "lake", "Bridge access and pedestrian restrictions may change; check locally.", ""],
      ["Lakshman Jhula area", "Rishikesh", "Discover the riverfront and surrounding attractions in the Tapovan area.", "1 day", "Sightseeing", "lake", "Check current bridge access and local safety guidance.", ""],
      ["Triveni Ghat Ganga Aarti", "Rishikesh", "Plan a riverside visit and evening aarti subject to current timings.", "1 day", "Pilgrimage", "lake", "Confirm current aarti time and crowd arrangements.", ""],
      ["Parmarth Niketan", "Rishikesh", "Visit the riverside ashram area and enquire about public programme timings.", "1 day", "Pilgrimage", "lake", "Programme schedules and visitor access can change; verify in advance.", ""],
      ["Neer Garh Waterfall", "Rishikesh", "A nature stop reached by road and a local walk on the approach trail.", "1 day", "Nature", "waterfall", "Trail conditions, entry rules and water levels vary by season.", "Road distance and walking distance are different; confirm the trail locally."],
      ["Beatles Ashram", "Rishikesh", "Explore the former ashram site in Rajaji Tiger Reserve surroundings.", "1 day", "Sightseeing", "forest", "Entry arrangements and opening hours should be checked.", ""],
      ["Shivpuri rafting area", "Pauri Garhwal", "A river-adventure area; choose an operator and section only after safety checks.", "1 day", "Adventure", "lake", "Rafting depends on seasonal availability, river conditions, authorised operators and local safety rules.", ""],
      ["Neelkanth Mahadev Temple", "Pauri Garhwal", "A temple excursion through forested mountain roads from the Rishikesh area.", "1 day", "Pilgrimage", "forest", "Road access and temple timings should be checked for your date.", ""],
      ["Vashistha Cave", "Tehri Garhwal", "Visit a riverside meditation cave and nearby Ganga-side landscape.", "1 day", "Nature", "forest", "Check local access, opening arrangements and road conditions.", ""],
      ["Haridwar & Rishikesh weekend", "Haridwar and Rishikesh", "Combine riverfronts, temples and selected sightseeing stops at a comfortable pace.", "2–3 days", "Family", "lake", "Aarti times, temple access and activity availability need confirmation.", ""]
    ]
  },
  {
    id: "dehradun",
    name: "Dehradun & Nearby",
    items: [
      ["Robber's Cave (Guchhupani)", "Dehradun", "Walk through the stream-cut cave, subject to water levels and local access.", "1 day", "Sightseeing", "waterfall", "Check seasonal water level, local conditions and opening hours.", "Walking route; water and footing conditions can change."],
      ["Sahastradhara", "Dehradun", "Visit the spring and valley area; facilities and water conditions vary.", "1 day", "Nature", "waterfall", "Check current facilities, water levels and local access.", ""],
      ["Forest Research Institute", "Dehradun", "See the historic campus and museum subject to visitor entry arrangements.", "1 day", "Sightseeing", "forest", "Museum and campus visitor timings must be verified.", ""],
      ["Tapkeshwar Mahadev Temple", "Dehradun", "Visit the cave temple beside the seasonal stream.", "1 day", "Pilgrimage", "mountain", "Check temple access and water conditions.", ""],
      ["Mindrolling Monastery", "Dehradun", "Explore the monastery grounds and nearby Buddhist cultural sites.", "1 day", "Pilgrimage", "mountain", "Visitor access and prayer schedules may vary.", ""],
      ["Malsi Deer Park", "Dehradun", "Visit the city nature park subject to its current operating rules.", "1 day", "Family", "forest", "Check current entry, opening hours and animal-viewing expectations.", ""],
      ["Lachhiwala Nature Park", "Dehradun", "Plan a forest-side outing; facilities and water access are seasonal.", "1 day", "Nature", "forest", "Check current park access, water levels and safety rules.", ""],
      ["Dehradun city sightseeing", "Dehradun", "Create a half-day or full-day route around selected city attractions.", "1 day", "Sightseeing", "city", "Stops, opening hours and traffic determine the practical route.", ""]
    ]
  },
  {
    id: "mussoorie",
    name: "Mussoorie & Hill Stations",
    items: [
      ["Mussoorie Mall Road", "Dehradun district", "Stroll the town's central promenade and choose nearby stops.", "2–3 days", "Family", "mountain", "Crowds, weather and vehicle restrictions vary by season.", ""],
      ["Gun Hill", "Mussoorie", "Enjoy hill and valley views, subject to weather and access.", "2–3 days", "Sightseeing", "mountain", "Visibility and ropeway operations, if used, depend on conditions.", ""],
      ["Kempty Falls", "Mussoorie", "Visit the waterfall area; water flow, crowds and access change seasonally.", "2–3 days", "Family", "waterfall", "Check local access, water conditions and safety guidance.", ""],
      ["Company Garden", "Mussoorie", "A garden visit suited to a relaxed family sightseeing itinerary.", "2–3 days", "Family", "forest", "Check opening hours and seasonal facilities.", ""],
      ["Lal Tibba", "Landour", "Plan a viewpoint visit around weather, visibility and local road rules.", "2–3 days", "Sightseeing", "mountain", "Visibility varies; local traffic restrictions may apply.", ""],
      ["Landour", "Mussoorie", "Explore the quiet hill neighbourhood and walking routes at a gentle pace.", "2–3 days", "Family", "mountain", "Check local vehicle restrictions and walking conditions.", ""],
      ["Camel's Back Road", "Mussoorie", "Take a town walk with Himalayan viewpoints when weather allows.", "2–3 days", "Nature", "mountain", "Walking conditions and visibility vary with weather.", "Walking route; not a driving distance."],
      ["George Everest Peak area", "Mussoorie", "Visit the historic viewpoint area; approach routes and trail conditions vary.", "2–3 days", "Trekking", "mountain", "Check road access, weather and local trail safety.", "Road approach and final walking distance are separate; verify on the day."],
      ["Dhanaulti", "Tehri Garhwal", "Enjoy a forested hill-station break with locally confirmed activities.", "2–3 days", "Family", "forest", "Road conditions and activities vary by season.", ""],
      ["Kanatal", "Tehri Garhwal", "Plan a quiet mountain stay with travel time and property confirmed in advance.", "2–3 days", "Family", "mountain", "Mountain weather and road conditions can change quickly.", ""],
      ["Tehri Lake", "Tehri Garhwal", "Explore the reservoir area; water activities require separate safety checks.", "2–3 days", "Adventure", "lake", "Water activities depend on operators, season, weather and local safety rules.", ""]
    ]
  },
  {
    id: "chopta-treks",
    name: "Chopta, Tungnath & Treks",
    items: [
      ["Chopta", "Rudraprayag district", "A mountain base for forest walks and high-altitude routes.", "2–3 days", "Trekking", "mountain", "Snow, weather, road access and accommodation vary by season.", "Driving distance to Chopta is separate from walking or trekking routes."],
      ["Tungnath Temple", "Rudraprayag district", "Visit a high-altitude Shiva temple on the uphill Chopta trail; allow time for the walk and changing mountain conditions.", "2–3 days", "Pilgrimage", "mountain", "Temple access is seasonal. Confirm opening dates, trail status, weather and local advisories before departure.", "Drive to Chopta and the uphill trek to Tungnath are separate journey sections; confirm the current trail distance locally."],
      ["Rudranath", "Chamoli district", "Plan a remote Panch Kedar pilgrimage reached by a demanding, multi-day high-altitude trek.", "4–6 days", "Pilgrimage", "mountain", "Seasonal access, weather, trail condition and limited facilities require advance local confirmation.", "This is a multi-day trek, not a road-access temple visit. Confirm the chosen route, stages and current distances with local authorities or experienced local guides."],
      ["Chandrashila Summit", "Rudraprayag district", "Continue above Tungnath to a high Himalayan viewpoint when weather, visibility and trail conditions allow.", "2–3 days", "Trekking", "mountain", "Snow, wind, visibility and trail status may restrict access; turn back when conditions are unsafe.", "The summit is reached on foot beyond Tungnath; trekking distance and ascent are separate from driving distance."],
      ["Deoria Tal", "Rudraprayag district", "Reach a forest lake by road to Sari village and a marked uphill walk.", "2–3 days", "Trekking", "lake", "Check weather, trail condition, permits and local access.", "Trek starts at Sari; driving and walking distances are separate."],
      ["Kartik Swami Temple", "Rudraprayag district", "A hilltop temple visit with a final walking route from the road end.", "2–3 days", "Pilgrimage", "mountain", "Check road status, weather and temple access.", "Road approach and final trek distance are separate; confirm locally."],
      ["Ukhimath", "Rudraprayag district", "Explore a Himalayan town and pilgrimage stop; routes vary by season.", "2–3 days", "Pilgrimage", "mountain", "Check winter access and current road conditions.", ""],
      ["Sari Village", "Rudraprayag district", "A village stop and common starting point for the Deoria Tal walk.", "2–3 days", "Trekking", "mountain", "Check road and trail conditions before departure.", "Village is reached by road; Deoria Tal requires a separate trek."],
      ["Rohini Bugyal", "Rudraprayag district", "A high meadow route for fit hikers, planned only after local trail advice.", "4–6 days", "Trekking", "mountain", "High-altitude access is seasonal and weather dependent; confirm permits and local guidance.", "Trek distance is separate from driving distance; confirm route and camping rules."]
    ]
  },
  {
    id: "other-uttarakhand",
    name: "Other Uttarakhand Destinations",
    items: [
      ["Auli", "Chamoli district", "A mountain resort area with seasonal snow and Himalayan views.", "2–3 days", "Adventure", "mountain", "Snow, ropeway operations and road access are seasonal and condition dependent.", ""],
      ["Joshimath", "Chamoli district", "A Himalayan town and route hub for nearby pilgrimage and mountain journeys.", "2–3 days", "Pilgrimage", "mountain", "Road access and advisories can change; check official updates.", ""],
      ["Valley of Flowers", "Chamoli district", "A protected alpine valley reached by a trek from the Ghangaria route.", "4–6 days", "Trekking", "mountain", "Open only during the notified trekking season; permits, weather and park rules apply.", "Driving ends at the roadhead; trekking distance and stages must be verified with park authorities."],
      ["Hemkund Sahib", "Chamoli district", "A high-altitude Sikh pilgrimage reached by a demanding mountain trek.", "4–6 days", "Pilgrimage", "mountain", "Seasonal access; opening dates, weather and health advisories must be checked.", "Road distance ends at the trek start; verify current trail distance and access conditions."],
      ["Ghangaria", "Chamoli district", "A seasonal mountain base for Valley of Flowers and Hemkund Sahib routes.", "4–6 days", "Trekking", "mountain", "Seasonal access and accommodation availability require confirmation.", "Roadhead-to-village travel involves a trek; confirm current route distance and services."],
      ["Mana Village", "Chamoli district", "Visit a high-altitude border village near Badrinath when local access permits.", "2–3 days", "Sightseeing", "mountain", "Border-area access, road conditions and local restrictions must be checked.", ""],
      ["Vasudhara Falls", "Chamoli district", "A mountain waterfall reached by a long walk from the Mana area.", "2–3 days", "Trekking", "waterfall", "Weather, trail conditions and local access can limit visits.", "Driving to Mana and the onward walking route are separate; verify route conditions."],
      ["Binsar", "Almora district", "A forest and Himalayan-view destination with protected-area visitor rules.", "2–3 days", "Nature", "forest", "Check sanctuary entry, road conditions and visibility.", ""],
      ["Jageshwar Dham", "Almora district", "Explore the historic temple complex in a quiet Himalayan setting.", "2–3 days", "Pilgrimage", "mountain", "Check temple timings and road access for your dates.", ""],
      ["Almora", "Almora district", "Discover hill-town markets, local heritage and nearby viewpoints.", "2–3 days", "Family", "mountain", "Road and weather conditions vary by season.", ""],
      ["Ranikhet", "Almora district", "Enjoy a relaxed hill-station itinerary among pine forests and viewpoints.", "2–3 days", "Family", "forest", "Visibility and mountain roads are weather dependent.", ""],
      ["Kausani", "Bageshwar district", "A hill destination known for broad Himalayan views on clear days.", "2–3 days", "Family", "mountain", "Mountain visibility is weather dependent.", ""],
      ["Nainital", "Nainital district", "Plan lakeside sightseeing and town visits around traffic and local access.", "2–3 days", "Family", "lake", "Boating availability and traffic restrictions vary by season.", ""],
      ["Bhimtal", "Nainital district", "A quieter lakeside stop with local activities to confirm on arrival.", "2–3 days", "Family", "lake", "Water activities depend on local operators and current conditions.", ""],
      ["Sattal", "Nainital district", "Explore a cluster of forest-framed lakes and nearby nature trails.", "2–3 days", "Nature", "lake", "Trail and water access vary with weather and local conditions.", ""],
      ["Naukuchiatal", "Nainital district", "A lake visit with optional activities subject to local operator checks.", "2–3 days", "Adventure", "lake", "Activities depend on season, operator availability and safety rules.", ""],
      ["Mukteshwar", "Nainital district", "Enjoy a Himalayan hill stay with orchard country and local walks.", "2–3 days", "Family", "mountain", "Road conditions and visibility vary with weather.", ""],
      ["Jim Corbett National Park", "Nainital and Pauri Garhwal districts", "Plan a wildlife visit only through official park zones and authorised bookings.", "2–3 days", "Wildlife", "forest", "Safari zones, entry permits, seasons and vehicle rules are controlled by park authorities.", ""],
      ["Lansdowne", "Pauri Garhwal district", "A quiet cantonment hill station for a short forest-side break.", "2–3 days", "Family", "forest", "Check local access rules, weather and road conditions.", ""],
      ["Khirsu", "Pauri Garhwal district", "A peaceful hill village with mountain views on clear days.", "2–3 days", "Nature", "mountain", "Visibility and mountain-road conditions vary.", ""],
      ["Pauri Garhwal", "Pauri Garhwal district", "Plan a hill-town visit and nearby viewpoints around road travel times.", "2–3 days", "Sightseeing", "mountain", "Check road conditions and visibility.", ""]
    ]
  }
];

const destinations = destinationGroups.flatMap((group) => group.items.map((item) => ({
  id: `${group.id}-${item[0].toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  category: group.id,
  categoryName: group.name,
  name: item[0],
  region: item[1],
  description: item[2],
  duration: item[3],
  type: item[4],
  photo: item[5] === "temple" ? "" : photoOptions[item[5]],
  photoKind: item[5],
  season: item[6],
  trekNote: item[7] || "",
  trekGuide: trekGuides[item[0]] || null
})));

// These categories are enquiry options, not a statement of current inventory.
const fleet = [
  {
    name: "Swift Dzire",
    photo: "assets/images/dzire.jpg",
    alt: "Maruti Suzuki Dzire VXi VVT photographed in Kolkata",
    capacity: "To be confirmed",
    luggage: "To be confirmed",
    ac: "To be confirmed"
  },
  {
    name: "Ertiga",
    photo: "assets/images/ertiga.jpg",
    alt: "2013 Suzuki Ertiga 1.4 GX photographed in South Tangerang",
    capacity: "To be confirmed",
    luggage: "To be confirmed",
    ac: "To be confirmed"
  },
  {
    name: "Innova",
    photo: "assets/images/innova.jpg",
    alt: "First-generation Toyota Innova photographed in Kajang",
    capacity: "To be confirmed",
    luggage: "To be confirmed",
    ac: "To be confirmed"
  },
  {
    name: "Innova Crysta",
    photo: "assets/images/innova-crysta.jpg",
    alt: "Toyota Innova Crysta 2.4 Z photographed from the front right",
    capacity: "To be confirmed",
    luggage: "To be confirmed",
    ac: "To be confirmed"
  },
  {
    name: "Tempo Traveller",
    photo: "assets/images/tempo-traveller.jpg",
    alt: "Force Traveller Luxury passenger van",
    capacity: "To be confirmed",
    luggage: "To be confirmed",
    ac: "To be confirmed"
  }
];

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
let enquiryWasPrepared = false;

function normalisePhone(value) {
  return value.replace(/[^\d+]/g, "");
}

function setContactLinks() {
  const phone = normalisePhone(CONFIG.phone);
  const whatsapp = CONFIG.whatsapp.replace(/\D/g, "");
  const email = CONFIG.email.trim();
  const hasAddress = CONFIG.address.trim().length > 0;
  const hasDomain = CONFIG.domainUrl.trim().length > 0;
  const mapUrl = hasAddress ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.address)}` : "";
  const contacts = {
    phone: phone ? { href: `tel:${phone}`, text: CONFIG.phone, label: `Call ${CONFIG.businessName}` } : null,
    whatsapp: whatsapp ? { href: `https://wa.me/${whatsapp}`, text: "WhatsApp us", label: `Chat with ${CONFIG.businessName} on WhatsApp` } : null,
    email: email ? { href: `mailto:${email}`, text: email, label: `Email ${CONFIG.businessName}` } : null,
    hours: CONFIG.operatingHours.trim() ? { text: CONFIG.operatingHours.trim() } : null,
    address: hasAddress ? { href: mapUrl, text: CONFIG.address.trim(), label: "View business address on Google Maps" } : null,
    domain: hasDomain ? { href: CONFIG.domainUrl.trim(), text: CONFIG.domainUrl.trim(), label: "Visit DivyaPath Travels website" } : null,
    instagram: CONFIG.instagramUrl.trim() ? { href: CONFIG.instagramUrl.trim(), text: "Instagram ↗", label: "Visit DivyaPath Travels on Instagram" } : null,
    facebook: CONFIG.facebookUrl.trim() ? { href: CONFIG.facebookUrl.trim(), text: "Facebook ↗", label: "Visit DivyaPath Travels on Facebook" } : null
  };

  Object.entries(contacts).forEach(([key, value]) => {
    $$(`[data-contact="${key}"]`).forEach((element) => {
      if (!value) {
        element.hidden = true;
        return;
      }
      element.hidden = false;
      let contactHref = value.href;
      if (key === "whatsapp" && element.dataset.whatsappMessage) {
        contactHref += `?text=${encodeURIComponent(element.dataset.whatsappMessage)}`;
      }
      if (key === "whatsapp" && element.classList.contains("whatsapp-float")) {
        const label = element.querySelector(".whatsapp-float__label");
        if (label) label.textContent = value.text;
      } else if (key === "whatsapp" && element.dataset.contactText) {
        const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = element.dataset.contactText;
        } else {
          element.prepend(document.createTextNode(element.dataset.contactText));
        }
      } else {
        element.textContent = key === "whatsapp" && element.dataset.contactDisplay === "number"
          ? CONFIG.whatsapp
          : value.text;
      }
      element.setAttribute("aria-label", value.label || value.text);
      if (value.href) {
        element.setAttribute("href", contactHref);
        if (key === "instagram" || key === "facebook" || key === "domain" || key === "address") {
          element.setAttribute("target", "_blank");
          element.setAttribute("rel", "noopener noreferrer");
        }
      }
    });
  });

  $$("[data-contact-empty]").forEach((element) => {
    const hasAnyContact = Boolean(phone || whatsapp || email);
    element.hidden = hasAnyContact;
  });

  const schema = $("#business-schema");
  const schemaData = JSON.parse(schema.textContent);
  if (phone) schemaData.telephone = CONFIG.phone;
  if (email) schemaData.email = email;
  if (hasAddress) {
    schemaData.address = {
      "@type": "PostalAddress",
      "streetAddress": CONFIG.address.trim()
    };
  }
  if (hasDomain) schemaData.url = CONFIG.domainUrl.trim();
  schema.textContent = JSON.stringify(schemaData);
}

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function suggestedPackage(destination) {
  if (destination.name === "Kedarnath Dham") return "Kedarnath Special Package";
  if (destination.type === "Pilgrimage" && destination.duration === "7+ days") {
    return "Seven-to-Twelve-Day Pilgrimage Tour";
  }
  if (destination.duration === "1 day") return "One-Day Local Sightseeing";
  if (destination.type === "Pilgrimage") return "Custom Private Tour";
  if (destination.duration === "2–3 days") return "Two-Day Weekend Trip";
  if (destination.duration === "4–6 days") return "Four-to-Six-Day Himalayan Holiday";
  return "Custom Private Tour";
}

function renderDestinationCard(destination) {
  const image = destination.name === "Yamunotri Dham"
    ? "assets/images/yamunotri-temple.jpg"
    : destination.name === "Gangotri Dham"
      ? "assets/images/gangotri-temple.jpg"
      : destination.name === "Kedarnath Dham"
        ? "assets/images/kedarnath-temple.jpg"
        : destination.name === "Badrinath Dham"
          ? "assets/images/badrinath-temple.jpg"
          : destination.photo;
  const alt = destination.photoKind === "temple"
    ? `${destination.name} temple`
    : `Illustrative ${destination.photoKind} landscape for ${destination.name}`;
  const trekDetails = destination.trekNote ? `<p><strong>Walking and driving:</strong> ${escapeHTML(destination.trekNote)}</p>` : "";
  const trekGuide = destination.trekGuide
    ? `<p><strong>Route overview:</strong> ${escapeHTML(destination.trekGuide.route)}</p>
       <p><strong>Trek effort:</strong> ${escapeHTML(destination.trekGuide.effort)}</p>
       <p><strong>Overnight planning:</strong> ${escapeHTML(destination.trekGuide.stay)}</p>
       <p><strong>What to expect:</strong> ${escapeHTML(destination.trekGuide.highlights)}</p>`
    : "";
  return `
    <article class="destination-card">
      <div class="destination-card__image">
        <img src="${escapeHTML(image)}" alt="${escapeHTML(alt)}" loading="lazy" data-fallback="${destination.photoKind === "temple" ? "temple" : "mountain"}">
        <span>${escapeHTML(destination.categoryName)}</span>
      </div>
      <div class="destination-card__body">
        <p class="destination-card__region">${escapeHTML(destination.region)}</p>
        <h3>${escapeHTML(destination.name)}</h3>
        <p class="destination-card__description">${escapeHTML(destination.description)}</p>
        <div class="destination-card__meta"><span>${escapeHTML(destination.duration)}</span><span>${escapeHTML(destination.type)}</span></div>
        <details class="destination-card__details">
          <summary>View Details</summary>
          <div>
            <p><strong>Seasonal information:</strong> ${escapeHTML(destination.season)}</p>
            ${trekDetails}
            ${trekGuide}
            <p><strong>Trip planning:</strong> Pickup, route, accommodation, meals, transport, inclusions and exclusions are confirmed in a written itinerary for your dates. Price is quoted on request.</p>
          </div>
        </details>
        <a class="button button--saffron destination-card__book" href="#enquiry" data-destination="${escapeHTML(destination.name)}" data-package="${escapeHTML(suggestedPackage(destination))}">Book This Trip</a>
      </div>
    </article>`;
}

function durationMatches(destination, filter) {
  if (filter === "all") return true;
  if (filter === "1") return destination.duration === "1 day";
  if (filter === "2-3") return destination.duration === "2–3 days";
  if (filter === "4-6") return destination.duration === "4–6 days";
  return destination.duration === "7+ days";
}

function renderDestinationFilters() {
  const filterContainer = $("#destination-filters");
  const buttons = [
    '<button class="destination-filter is-active" type="button" data-category="all" aria-pressed="true">All destinations</button>',
    ...destinationGroups.map((group) => `<button class="destination-filter" type="button" data-category="${escapeHTML(group.id)}" aria-pressed="false">${escapeHTML(group.name)}</button>`)
  ];
  filterContainer.innerHTML = buttons.join("");
}

function matchingDestinations() {
  const activeFilter = $(".destination-filter.is-active");
  const category = activeFilter ? activeFilter.dataset.category : "all";
  const search = $("#destination-search").value.trim().toLocaleLowerCase();
  const duration = $("#duration-filter").value;
  const matches = destinations.filter((destination) => {
    const guideText = destination.trekGuide
      ? Object.values(destination.trekGuide).join(" ")
      : "";
    const searchableText = `${destination.name} ${destination.region} ${destination.description} ${destination.type} ${destination.categoryName} ${guideText}`.toLocaleLowerCase();
    return (category === "all" || destination.category === category)
      && searchableText.includes(search)
      && durationMatches(destination, duration);
  });
  return matches;
}

function renderDestinationTourResult(destination) {
  const packageName = suggestedPackage(destination);
  return `
    <article class="tour-results-card">
      <div>
        <p class="tour-results-card__category">${escapeHTML(destination.categoryName)}</p>
        <h3>${escapeHTML(destination.name)}</h3>
        <p class="tour-results-card__meta">${escapeHTML(destination.region)} · ${escapeHTML(destination.duration)}</p>
        <p class="tour-results-card__package"><strong>Suggested tour:</strong> ${escapeHTML(packageName)}</p>
      </div>
      <a class="button button--saffron" href="#enquiry" data-destination="${escapeHTML(destination.name)}" data-package="${escapeHTML(packageName)}">Ask about this tour</a>
    </article>`;
}

function showDestinationTours() {
  const searchTerm = $("#destination-search").value.trim();
  if (!searchTerm) return;

  const matches = matchingDestinations();
  const dialog = $("#tour-results-dialog");
  $("#tour-results-title").textContent = matches.length === 1
    ? `Tours for ${matches[0].name}`
    : `Tours matching “${searchTerm}”`;
  $("#tour-results-description").textContent = matches.length
    ? `${matches.length} matching ${matches.length === 1 ? "destination" : "destinations"} with a suggested tour option.`
    : "No destinations match that search. Try another destination name or search term.";
  $("#tour-results-list").innerHTML = matches.length
    ? matches.map(renderDestinationTourResult).join("")
    : '<p class="tour-results-empty">Try a broader search, such as a town, temple, or activity name.</p>';

  if (!dialog.open) dialog.showModal();
}

function updateDestinations() {
  const matches = matchingDestinations();
  $("#destination-tour-search").disabled = !$("#destination-search").value.trim();
  $("#destination-grid").innerHTML = matches.length
    ? matches.map(renderDestinationCard).join("")
    : '<p class="destination-empty">No destinations match those filters. Try another search or duration.</p>';
  $("#destination-count").textContent = `${matches.length} destination${matches.length === 1 ? "" : "s"} found`;
  setupImageFallbacks($("#destination-grid"));
}

function renderPackageCard(item) {
  const price = CONFIG.pricesApproved && item.priceKey && Number.isFinite(CONFIG.draftPricesINR[item.priceKey])
    ? `${formatINR(CONFIG.draftPricesINR[item.priceKey])} per person`
    : "No price published; request a written quote";
  const inclusions = item.inclusions.map((entry) => `<li>${entry}</li>`).join("");
  const exclusions = item.exclusions.map((entry) => `<li>${entry}</li>`).join("");
  return `
    <article class="package-card${item.featured ? " package-card--featured" : ""}">
      ${item.featured ? '<span class="package-card__tag">A thoughtful choice</span>' : ""}
      <p class="package-card__type">${item.type}</p>
      <h3>${item.name}</h3>
      <p class="package-card__duration">${item.duration}</p>
      <p class="package-card__description">${item.overview}</p>
      <dl class="package-card__meta">
        <div><dt>Pickup &amp; drop-off</dt><dd>Haridwar, Rishikesh or Dehradun where practical; confirm exact points</dd></div>
        <div><dt>Stay</dt><dd>${item.accommodation}</dd></div>
        <div><dt>Meals</dt><dd>${item.meals}</dd></div>
        <div><dt>Transport</dt><dd>${item.vehicle}</dd></div>
      </dl>
      <details class="package-card__details">
        <summary>Inclusions, exclusions &amp; price basis</summary>
        <div class="package-card__details-content">
          <p><strong>Overview:</strong> ${item.overview}</p>
          <p><strong>Accommodation:</strong> ${item.accommodation}</p>
          <p><strong>Meal plan:</strong> ${item.meals}</p>
          <p><strong>Vehicle:</strong> ${item.vehicle}</p>
          <p><strong>Inclusions (only if listed in the accepted proposal):</strong></p><ul>${inclusions}</ul>
          <p><strong>Exclusions / not assumed included:</strong></p><ul>${exclusions}</ul>
          <p><strong>Itinerary:</strong> Pickup point, sightseeing sequence, dates and travel time are agreed in writing for your trip before confirmation.</p>
          <p><strong>Trek or adventure difficulty:</strong> Confirm the route, walking distance, difficulty, access rules and seasonal conditions for any selected activity before travel.</p>
          <p><strong>Booking and cancellation:</strong> Applicable advance, payment schedule and cancellation terms must be provided in the written proposal and accepted before booking.</p>
          <p><strong>Price basis:</strong> ${price}. ${item.priceBasis}. Final written quotation required.</p>
        </div>
      </details>
      <div class="package-card__booking">
        <span class="package-card__basis">${item.priceBasis}</span>
        <a class="button button--saffron package-card__book" href="#enquiry" data-package="${escapeHTML(item.name)}" data-destination="${item.id === "budget-group" || item.id === "standard-family" || item.id === "deluxe" || item.id === "do-dham" || item.id === "kedarnath-special" || item.id === "pilgrimage-seven-day" ? "Complete Char Dham Yatra" : "Custom tour"}">Book This Trip</a>
      </div>
    </article>`;
}

function renderFleetCard(vehicle) {
  const message = `Hello ${CONFIG.businessName}, I would like to enquire about the ${vehicle.name} vehicle category for a yatra. Please confirm the actual vehicle, capacity, luggage space, AC, availability and fare.`;
  const whatsappUrl = CONFIG.whatsapp.replace(/\D/g, "")
    ? `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`
    : "";
  return `
    <article class="fleet-card">
      <div class="fleet-card__image"><img src="${escapeHTML(vehicle.photo)}" alt="${escapeHTML(vehicle.alt)}" loading="lazy" data-fallback="vehicle"></div>
      <div class="fleet-card__body">
        <h3>${vehicle.name}</h3>
        <p class="fleet-card__status">Enquiry category · verify availability</p>
        <dl class="fleet-card__facts">
          <div><dt>Passengers</dt><dd>${vehicle.capacity}</dd></div>
          <div><dt>Luggage</dt><dd>${vehicle.luggage}</dd></div>
          <div><dt>AC</dt><dd>${vehicle.ac}</dd></div>
          <div><dt>Starting price</dt><dd>On enquiry</dd></div>
        </dl>
        <div class="fleet-card__actions">
          <a class="text-link" href="#enquiry" data-vehicle="${vehicle.name}">Enquire now <span aria-hidden="true">→</span></a>
          ${whatsappUrl ? `<a class="text-link" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">WhatsApp enquiry <span aria-hidden="true">↗</span></a>` : ""}
        </div>
      </div>
    </article>`;
}

function populateSelectors() {
  const packageSelect = $('select[name="package"]');
  packages.forEach((item) => packageSelect.add(new Option(item.name, item.name)));
  const vehicleSelect = $('select[name="vehicle"]');
  fleet.forEach((item) => {
    if (![...vehicleSelect.options].some((option) => option.value === item.name)) {
      vehicleSelect.add(new Option(item.name, item.name));
    }
  });
  const destinationSelect = $('select[name="destination"]');
  const destinationOptions = [...new Set([
    ...destinations.map((item) => item.name),
    ...destinationGroups.map((item) => item.name),
    "Custom tour"
  ])];
  destinationOptions.forEach((name) => destinationSelect.add(new Option(name, name)));
}

function bindEnquiryShortcuts() {
  document.addEventListener("click", (event) => {
    const categoryLink = event.target.closest("[data-category-link]");
    if (categoryLink) {
      const categoryFilter = $(`.destination-filter[data-category="${categoryLink.dataset.categoryLink}"]`);
      if (categoryFilter) {
        const activeFilter = $(".destination-filter.is-active");
        activeFilter?.classList.remove("is-active");
        activeFilter?.setAttribute("aria-pressed", "false");
        categoryFilter.classList.add("is-active");
        categoryFilter.setAttribute("aria-pressed", "true");
        $("#destination-search").value = "";
        $("#duration-filter").value = "all";
        updateDestinations();
      }
      return;
    }
    const link = event.target.closest("[data-package], [data-vehicle], [data-destination]");
    if (!link) return;
    link.closest("#tour-results-dialog")?.close();
    const form = $("#enquiry-form");
    if (link.dataset.package) $('select[name="package"]', form).value = link.dataset.package;
    if (link.dataset.vehicle) {
      const vehicleSelect = $('select[name="vehicle"]', form);
      if ([...vehicleSelect.options].some((option) => option.value === link.dataset.vehicle)) {
        vehicleSelect.value = link.dataset.vehicle;
      }
    }
    if (link.dataset.destination) $('select[name="destination"]', form).value = link.dataset.destination;
  });
}

function validateForm(form) {
  let firstInvalid = null;
  $$(".field input, .field select, .field textarea", form).forEach((field) => {
    field.removeAttribute("aria-invalid");
    if (field.name === "name" && !field.value.trim()) {
      field.setAttribute("aria-invalid", "true");
      firstInvalid ||= field;
    }
    if (field.name === "mobile" && field.value.trim()) {
      const mobile = field.value.trim();
      const digits = mobile.replace(/\D/g, "");
      const allowedFormat = /^\+?[0-9\s().-]+$/.test(mobile);
      if (!allowedFormat || digits.length < 10 || digits.length > 15) {
        field.setAttribute("aria-invalid", "true");
        firstInvalid ||= field;
      }
    }
    if (!field.checkValidity()) {
      field.setAttribute("aria-invalid", "true");
      firstInvalid ||= field;
    }
  });
  if (firstInvalid) {
    firstInvalid.focus();
    if (firstInvalid.name === "mobile" && firstInvalid.value.trim()) {
      return "Enter a valid mobile number with 10–15 digits, including country code if needed.";
    }
    if (firstInvalid.name === "name") return "Enter your full name.";
    if (firstInvalid.name === "returnDate") return "Choose a return date that is on or after your departure date.";
    return "Please complete the required fields and check the email address.";
  }
  return "";
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const status = $("#form-status");
  const submitButton = $('button[type="submit"]', form);
  if (enquiryWasPrepared) return;
  status.textContent = "";
  status.classList.remove("is-success");

  const validationMessage = validateForm(form);
  if (validationMessage) {
    status.textContent = validationMessage;
    return;
  }

  const whatsapp = CONFIG.whatsapp.replace(/\D/g, "");
  if (!/^[1-9]\d{7,14}$/.test(whatsapp)) {
    status.textContent = "WhatsApp is not configured correctly. In script.js, add a valid international number using digits only, including the country code.";
    return;
  }

  const values = new FormData(form);
  const fields = [
    ["Customer name", values.get("name")],
    ["Customer mobile", values.get("mobile")],
    ["Email", values.get("email") || "Not provided"],
    ["Destination", values.get("destination")],
    ["Pickup location", values.get("pickup")],
    ["Drop-off location", values.get("dropoff")],
    ["Departure date", values.get("date")],
    ["Return date", values.get("returnDate") || "Not specified"],
    ["Number of travellers", values.get("travellers")],
    ["Package type", values.get("package") || "To discuss"],
    ["Preferred vehicle", values.get("vehicle") || "Please advise"],
    ["Hotel category", values.get("accommodation") || "Please advise"],
    ["Room-sharing preference", values.get("room") || "Please advise"],
    ["Meal requirements", values.get("meals") || "Not specified"],
    ["Special requests", values.get("message") || "None"],
    ["Booking and cancellation terms", "Please include the applicable written terms in the final proposal."]
  ];
  const message = `Namaste ${CONFIG.businessName},\nI would like to request a trip booking proposal. This is an enquiry only, not a confirmed booking.\n\n${fields.map(([label, value]) => `${label}: ${String(value).trim()}`).join("\n")}`;
  const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

  submitButton.disabled = true;
  status.textContent = "Your booking request is ready. Send the WhatsApp message to contact our team.";
  status.classList.add("is-success");
  const opened = window.open(url, "_blank");
  if (!opened) {
    submitButton.disabled = false;
    status.classList.remove("is-success");
    status.textContent = "Your browser blocked the WhatsApp window. Allow pop-ups for this page and submit again, or use the WhatsApp contact link.";
    return;
  }
  opened.opener = null;
  enquiryWasPrepared = true;
  submitButton.disabled = true;
  submitButton.textContent = "Enquiry opened — edit details to start another";
}

function allowAnotherEnquiry(event) {
  if (!enquiryWasPrepared || !event.target.matches("input, select, textarea")) return;
  enquiryWasPrepared = false;
  const form = $("#enquiry-form");
  const submitButton = $('button[type="submit"]', form);
  const status = $("#form-status");
  submitButton.disabled = false;
  submitButton.textContent = "Prepare WhatsApp enquiry ↗";
  status.textContent = "";
  status.classList.remove("is-success");
}

function fallbackIllustration(kind) {
  const scene = {
    temple: '<path d="M135 235h330v155H135z" fill="#c77d46"/><path d="M105 235 300 105l195 130z" fill="#9f5935"/><path d="M270 105V70h60v35" fill="#d69b5c"/><path d="M275 390V285h50v105" fill="#7a4937"/><path d="M180 275h40v52h-40zm200 0h40v52h-40z" fill="#f4d8a0"/>',
    vehicle: '<path d="M115 300h335l-30-94q-8-25-37-25H214q-28 0-43 27z" fill="#e8e5dc"/><path d="M204 205h73v77H168zM292 205h85q18 0 25 21l18 56H292z" fill="#b4c8bb"/><path d="M105 292h365v71H105z" rx="15" fill="#28634f"/><circle cx="190" cy="366" r="38" fill="#102f28"/><circle cx="190" cy="366" r="16" fill="#d5c4a0"/><circle cx="395" cy="366" r="38" fill="#102f28"/><circle cx="395" cy="366" r="16" fill="#d5c4a0"/>',
    mountain: '<path d="m0 340 155-175 87 97 112-151 196 229v150H0z" fill="#6d897a"/><path d="m155 165 43 49-29-7-20 18-18-9zm199-54 58 79-38-14-20 11-20-15-17 9z" fill="#f5f2e9"/><path d="m0 341 130-80 104 80 112-127 204 140v115H0z" fill="#28634f"/>'
  }[kind] || '<path d="m0 340 155-175 87 97 112-151 196 229v150H0z" fill="#6d897a"/>';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#dce5dc"/><stop offset="1" stop-color="#f4eee2"/></linearGradient></defs><rect width="600" height="500" fill="url(#sky)"/><circle cx="475" cy="92" r="37" fill="#c6a66c" opacity=".8"/>${scene}<rect y="390" width="600" height="110" fill="#174638"/><path d="M0 407q150-38 300 0t300 0v93H0z" fill="#28634f"/></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function setupImageFallbacks(parent = document) {
  $$("img[data-fallback]", parent).forEach((image) => {
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied) return;
      image.dataset.fallbackApplied = "true";
      image.src = fallbackIllustration(image.dataset.fallback);
      image.alt = `${image.alt} (decorative fallback illustration; photograph unavailable)`;
    });
  });
}

function setupNavigation() {
  const toggle = $(".nav-toggle");
  const nav = $("#site-navigation");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !expanded);
  });
  $$("#site-navigation a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
    });
  });
}

function allowAnotherEnquiryOnEdit(form) {
  form.addEventListener("input", allowAnotherEnquiry);
  form.addEventListener("change", allowAnotherEnquiry);
}

function init() {
  setContactLinks();
  $("#fleet-grid").innerHTML = fleet.map(renderFleetCard).join("");
  populateSelectors();
  renderDestinationFilters();
  updateDestinations();
  $("#destination-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    $$(".destination-filter").forEach((filter) => {
      const isActive = filter === button;
      filter.classList.toggle("is-active", isActive);
      filter.setAttribute("aria-pressed", String(isActive));
    });
    updateDestinations();
  });
  const destinationSearch = $("#destination-search");
  destinationSearch.addEventListener("input", updateDestinations);
  destinationSearch.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    showDestinationTours();
  });
  $("#destination-tour-search").addEventListener("click", showDestinationTours);
  const tourResultsDialog = $("#tour-results-dialog");
  $(".tour-results-dialog__close", tourResultsDialog).addEventListener("click", () => tourResultsDialog.close());
  tourResultsDialog.addEventListener("click", (event) => {
    if (event.target === tourResultsDialog) tourResultsDialog.close();
  });
  $("#duration-filter").addEventListener("change", updateDestinations);
  bindEnquiryShortcuts();
  setupNavigation();
  setupImageFallbacks();
  const enquiryForm = $("#enquiry-form");
  enquiryForm.addEventListener("submit", handleFormSubmit);
  allowAnotherEnquiryOnEdit(enquiryForm);
  const departureDate = $('input[name="date"]', enquiryForm);
  const returnDate = $('input[name="returnDate"]', enquiryForm);
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  departureDate.min = localToday;
  returnDate.min = localToday;
  departureDate.addEventListener("change", () => {
    returnDate.min = departureDate.value || departureDate.min;
  });
  $("#current-year").textContent = new Date().getFullYear();

  const domain = CONFIG.domainUrl.trim().replace(/\/+$/, "");
  const pageUrl = domain ? `${domain}/` : window.location.href.split("#")[0];
  document.querySelector('link[rel="canonical"]').href = pageUrl;
  $('meta[property="og:url"]').content = pageUrl;
  $('meta[property="og:image"]').content = new URL("assets/images/kedarnath-temple.jpg", pageUrl).href;

}

document.addEventListener("DOMContentLoaded", init);
