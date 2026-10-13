# CampusCompass

**Your Campus. Your Guide. Your Next Step.**

CampusCompass is a responsive, beginner-friendly campus information guide for St. Mary's University Hyderabad (SMRU), built with plain HTML, CSS, and JavaScript. It links to the official university website and the supplied 360° campus tour, and includes a campus directory, student guides, a prepared-answer chatbot, official source links, and a feedback form.

## Run the project

1. Download or copy this folder to your computer.
2. Open `index.html` in a modern web browser.
3. No package installation, account, server, or API key is needed.

The Google Fonts used for headings and body text load from an external service and need an internet connection. The rest of the app runs locally.

## Try the features

- Search the directory from the large search box and filter places by category.
- Open **Student guides** for example next steps and reminders to verify official requirements.
- Ask the demo assistant one of the suggested questions, or type your own.
- Submit feedback to save a test entry in this browser.

## University sources and information status

The student supplied these official sources:

- [SMRU official website](https://smru.edu.in/)
- [SMRU Campus 360° tour, Entry Gate view](https://smru.edu.in/campus-360/?location=entry-gate&lang=en)
- [SMRU Campus Location Hyderabad](https://smru.edu.in/campus-location-hyderabad/)

The campus-location page publishes the address as Near Ramoji Film City, Deshmukhi Village, Pochampally Mandal, Yadadri Bhuvanagiri District, Hyderabad, Telangana 508284, India, with visitor helpdesk details and a Google Maps reference. The same page states it was last reviewed on 11 June 2026 and next due for review on 30 June 2026; both dates have passed, so confirm the address and visit arrangements with SMRU before travelling. The app links to the page and map rather than treating this past-due listing as freshly verified. Campus-specific room locations, hours, accessibility information, policies, fees, deadlines, and document requirements remain marked as needing verification. The website and 360° tour may require browser verification to load.

The chatbot uses prepared JavaScript answers; it is not an AI service. Unknown questions receive a fallback that directs students to official sources. Do not put a private AI API key in browser JavaScript. A future AI integration should call a protected server-side endpoint.

Feedback is stored in `localStorage` on the current browser and device only. It is not submitted to a college, shared between users, or secure authentication. This is a demo storage approach, not a backend or administrator system.

## How the files fit together

- `index.html` contains the page sections, navigation, accessible labels, forms, and app entry point.
- `styles.css` contains the colors, responsive layout, and component styles. The media queries adapt the layout for smaller screens.
- `assets/smru-campus.jpg` is the campus photo cropped from the image you supplied and displayed in the homepage hero and campus location section.
- `app.js` contains the example data and the interactions: rendering cards, filtering, search, prepared chat answers, mobile navigation, and local feedback storage.

To customize example content, edit the data arrays near the top of `app.js`. Before changing an item to **Verified**, confirm its details against a reliable official source and record its source and last-verified date in the interface.
