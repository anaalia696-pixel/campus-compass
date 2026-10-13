const university = {
  name: "St. Mary's University Hyderabad",
  shortName: "SMRU",
  website: "https://smru.edu.in/",
  campusTour: "https://smru.edu.in/campus-360/?location=entry-gate&lang=en",
};

const locations = [
  { name: "SMRU main campus", category: "Services", icon: "⌖", description: "University-published campus address near Ramoji Film City, Deshmukhi Village.", building: "Deshmukhi Village, Hyderabad 508284", hours: "Contact SMRU before visiting", access: "Accessibility: needs verification", status: "Needs verification", source: "https://smru.edu.in/campus-location-hyderabad/" },
  { name: "Library", category: "Study", icon: "▤", description: "SMRU library location, services, and study spaces need confirmation from the university.", building: "Building and floor: needs verification", hours: "Hours: needs verification", access: "Accessibility: needs verification", status: "Needs verification" },
  { name: "Computer laboratories", category: "Study", icon: "⌘", description: "SMRU computer lab locations and availability need confirmation from your school or department.", building: "Building and floor: needs verification", hours: "Hours: needs verification", access: "Accessibility: needs verification", status: "Needs verification" },
  { name: "Classrooms", category: "Study", icon: "▦", description: "Confirm SMRU room locations using your current timetable or department.", building: "Room locations: needs verification", hours: "Hours: follow your timetable", access: "Accessibility: needs verification", status: "Needs verification" },
  { name: "Examination office", category: "Services", icon: "▧", description: "Contact the relevant SMRU office for timetable and examination questions.", building: "Building and floor: needs verification", hours: "Hours: needs verification", access: "Accessibility: needs verification", status: "Needs verification" },
  { name: "Student services", category: "Services", icon: "♡", description: "Ask SMRU which student support service is right for your needs.", building: "Office location: needs verification", hours: "Hours: needs verification", access: "Accessibility: needs verification", status: "Needs verification" },
  { name: "Administrative office", category: "Services", icon: "▤", description: "Contact SMRU for administrative questions and directions to the relevant office.", building: "Building and floor: needs verification", hours: "Hours: needs verification", access: "Accessibility: needs verification", status: "Needs verification" },
  { name: "Canteen", category: "Food & wellbeing", icon: "♨", description: "SMRU can confirm the current canteen location, opening hours, and services.", building: "Building and floor: needs verification", hours: "Hours: needs verification", access: "Accessibility: needs verification", status: "Needs verification" },
  { name: "Medical / first-aid room", category: "Food & wellbeing", icon: "✚", description: "Contact SMRU directly to confirm where to find first-aid or medical support.", building: "Location: needs verification", hours: "Availability: needs verification", access: "Accessibility: needs verification", status: "Needs verification" },
];

const guides = [
  {
    title: "Getting a student ID card", icon: "▣",
    purpose: "A starting point for asking SMRU about a new or replacement ID card.",
    steps: ["Check the official SMRU website or student portal for ID-card information.", "Contact the relevant student or administrative office to confirm the next step.", "Ask the office which documents, if any, are required before you visit."],
    office: "Student or administrative office (confirm with SMRU)",
  },
  {
    title: "Finding your exam timetable", icon: "▦",
    purpose: "Know where to look for the latest official examination schedule.",
    steps: ["Open the official SMRU student portal or examination webpage.", "If you cannot find a timetable, contact the examination office.", "Confirm dates and room details with the official source."],
    office: "Examination office (confirm with SMRU)",
  },
  {
    title: "Requesting a university certificate", icon: "▤",
    purpose: "Find out how to ask SMRU about a university certificate request.",
    steps: ["Contact SMRU’s administrative office to ask about the right process.", "Ask the office to confirm any forms or documents before applying.", "Follow the instructions provided by the official university source."],
    office: "Administrative office (confirm with SMRU)",
  },
  {
    title: "Finding student support", icon: "♡",
    purpose: "Get a starting point for finding the right kind of support on campus.",
    steps: ["Check the SMRU website or student portal for support services.", "Contact the relevant office to ask what help is available.", "For urgent needs, contact SMRU directly or local emergency services."],
    office: "Student services (confirm with SMRU)",
  },
  {
    title: "Finding official notices", icon: "▧",
    purpose: "Find SMRU updates and check the original source.",
    steps: ["Check SMRU’s official website or student portal for notices.", "Look for the notice date and issuing university office.", "Contact the issuing office if anything is unclear or looks outdated."],
    office: "The office named on the official notice",
  },
];

const announcements = [
  { title: "St. Mary's University Hyderabad", category: "Official university website", date: "Official source", summary: "Open SMRU's website for university information and current official updates. Page contents could not be independently checked in this demo.", href: university.website, source: "Open smru.edu.in" },
  { title: "Explore the virtual campus", category: "Official campus 360° tour", date: "Entry Gate view", summary: "Launch the university's interactive 360° tour at the Entry Gate view. Tour locations and accessibility details have not been verified here.", href: university.campusTour, source: "Open SMRU Campus 360" },
  { title: "Current notices and announcements", category: "Check the official source", date: "Live website", summary: "Use the university website to check the latest notices. This demo does not copy notices or dates that it cannot verify.", href: university.website, source: "Check official updates" },
];

const statusLabel = (status) => status === "Verified" ? "Verified" : status === "Sample information" ? "Sample information" : "Needs verification";

function renderLocations(items) {
  const list = document.querySelector("#location-list");
  const count = document.querySelector("#location-count");
  count.textContent = `${items.length} ${items.length === 1 ? "place" : "places"}`;

  if (items.length === 0) {
    list.innerHTML = '<p class="no-results">No places match that search. Try another word or choose “All places.”</p>';
    return;
  }

  list.innerHTML = items.map((place) => `
    <article class="location-card">
      <div class="location-card-top">
        <span class="location-icon" aria-hidden="true">${place.icon}</span>
        <span class="status-badge ${place.status === "Verified" ? "verified" : place.status === "Sample information" ? "sample" : ""}">${statusLabel(place.status)}</span>
      </div>
      <h3>${place.name}</h3>
      <span class="location-category">${place.category}</span>
      <p>${place.description}</p>
      <div class="location-meta">
        <span><b>Where</b> ${place.building}</span>
        <span><b>When</b> ${place.hours}</span>
        <span><b>Access</b> ${place.access}</span>
      </div>
      <a class="location-source-link" href="${place.source || university.website}" target="_blank" rel="noopener noreferrer">${place.source ? "View official location source ↗" : "Ask SMRU to verify this place ↗"}</a>
    </article>
  `).join("");
}

function renderGuides(term = "") {
  const normalizedTerm = term.trim().toLocaleLowerCase();
  const matchingGuides = guides.filter((guide) => !normalizedTerm || [
    guide.title, guide.purpose, ...guide.steps, guide.office,
  ].join(" ").toLocaleLowerCase().includes(normalizedTerm));
  const guideList = document.querySelector("#guide-list");
  if (matchingGuides.length === 0) {
    guideList.innerHTML = '<p class="no-results">No guides match that search. Try another word or clear the search.</p>';
    return;
  }
  guideList.innerHTML = matchingGuides.map((guide) => `
    <article class="guide-card">
      <div class="guide-top">
        <span class="guide-icon" aria-hidden="true">${guide.icon}</span>
        <span class="status-badge">Needs verification</span>
      </div>
      <h3>${guide.title}</h3>
      <p class="guide-purpose">${guide.purpose}</p>
      <ol class="guide-steps">${guide.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      <div class="guide-meta">
        <div><b>Relevant office:</b> ${guide.office}</div>
        <div><b>Required documents:</b> Confirm with the official office; none are verified here.</div>
        <div><b>Official source:</b> <a href="${university.website}" target="_blank" rel="noopener noreferrer">${university.shortName} website ↗</a> or relevant office</div>
        <div><b>Last verified:</b> Not yet verified</div>
      </div>
    </article>
  `).join("");
}

function renderAnnouncements() {
  document.querySelector("#announcement-list").innerHTML = announcements.map((notice) => `
    <article class="announcement-card">
      <div class="announcement-top"><span class="announcement-category">${notice.category}</span><span class="announcement-date">${notice.date}</span></div>
      <h3>${notice.title}</h3>
      <p>${notice.summary}</p>
      <a class="announcement-source" href="${notice.href}" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">↗</span> ${notice.source}</a>
    </article>
  `).join("");
}

let activeCategory = "All";
let searchTerm = "";

function updateLocations() {
  const normalizedTerm = searchTerm.trim().toLocaleLowerCase();
  const filtered = locations.filter((place) => {
    const matchesCategory = activeCategory === "All" || place.category === activeCategory;
    const matchesSearch = !normalizedTerm || [
      place.name, place.category, place.description, place.building, place.hours, place.access,
    ].join(" ").toLocaleLowerCase().includes(normalizedTerm);
    return matchesCategory && matchesSearch;
  });
  renderLocations(filtered);
  renderGuides(searchTerm);
  const guideCount = guides.filter((guide) => !normalizedTerm || [
    guide.title, guide.purpose, ...guide.steps, guide.office,
  ].join(" ").toLocaleLowerCase().includes(normalizedTerm)).length;
  document.querySelector("#location-count").textContent =
    `${filtered.length} ${filtered.length === 1 ? "place" : "places"} · ${guideCount} ${guideCount === 1 ? "guide" : "guides"}`;
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      const selected = chip === button;
      chip.classList.toggle("active", selected);
      chip.setAttribute("aria-pressed", String(selected));
    });
    updateLocations();
  });
});

document.querySelector("#campus-search").addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = document.querySelector("#search-input").value;
  activeCategory = "All";
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    const selected = chip.dataset.category === "All";
    chip.classList.toggle("active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  updateLocations();
  document.querySelector("#locations").scrollIntoView({ behavior: "smooth" });
});

const answers = [
  {
    match: /\b(address|where is smru|where is the campus|campus location|directions|how to get to)\b/i,
    text: "SMRU’s campus location page lists the address as Near Ramoji Film City, Deshmukhi Village, Pochampally Mandal, Yadadri Bhuvanagiri District, Hyderabad, Telangana 508284, India. It lists the visitor helpdesk as +91 73311 19432 and Reach@smru.edu.in. The page’s stated review date was 11 June 2026, with the next review due 30 June 2026, so please confirm the address and visit arrangements with SMRU before travelling.",
  },
  {
    match: /\blibrary\b/i,
    text: "The directory has a library listing, but its building, hours, and accessibility details still need verification. Please confirm the location with SMRU or its official website.",
  },
  {
    match: /\b(exam|examination|timetable|schedule)\b/i,
    text: "Check the official SMRU student portal or examination webpage for the timetable. If you cannot find it, contact the examination office. Please confirm dates with the official source.",
  },
  {
    match: /\b(id|identity|card)\b/i,
    text: "The student ID guide suggests checking your official student portal or asking your student or administrative office. Confirm the current process and any required documents directly with that office.",
  },
  {
    match: /\b(support|counsel|help|wellbeing|well-being)\b/i,
    text: "SMRU’s student services office can point you to the right support. Check the official website or contact the office directly. For urgent needs, contact SMRU or local emergency services.",
  },
  {
    match: /\b(notice|announcement|update)\b/i,
    text: "Check SMRU’s official website, student portal, or campus notice board. This page links to the official website but does not reproduce or verify current notices.",
  },
  {
    match: /\b(certificate|document)\b/i,
    text: "For a certificate request, ask SMRU’s administrative office about its current process. This demo cannot verify required forms, documents, fees, or timelines.",
  },
  {
    match: /\b(computer|lab|laborator|classroom|class|canteen|medical|first.?aid)\b/i,
    text: "The campus directory includes unverified listings. Please ask SMRU or check its official campus information for locations and opening details.",
  },
];

function addMessage(text, sender) {
  const messages = document.querySelector("#chat-messages");
  const item = document.createElement("div");
  item.className = `chat-message ${sender === "user" ? "user-message" : "bot-message"}`;
  const avatar = document.createElement("span");
  avatar.className = "message-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = sender === "user" ? "You" : "✦";
  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  const content = document.createElement("span");
  content.textContent = text;
  bubble.append(content);
  if (sender !== "user") {
    const source = document.createElement("small");
    source.textContent = "CampusCompass demo";
    bubble.append(source);
  }
  item.append(avatar, bubble);
  messages.append(item);
  messages.scrollTop = messages.scrollHeight;
}

function askCompass(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  addMessage(cleanQuestion, "user");
  const answer = answers.find((item) => item.match.test(cleanQuestion));
  addMessage(
    answer?.text ?? "I don’t have a reliable answer for that yet. Please check SMRU’s official website or contact the relevant office rather than relying on a guess.",
    "bot",
  );
}

document.querySelector("#chat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#chat-input");
  askCompass(input.value);
  input.value = "";
  input.focus();
});

document.querySelectorAll(".suggestion-chip").forEach((button) => {
  button.addEventListener("click", () => askCompass(button.dataset.question));
});

document.querySelector("#feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector("#feedback-status");
  const entry = {
    message: form.elements.message.value.trim(),
    email: form.elements.email.value.trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    const savedFeedback = JSON.parse(localStorage.getItem("campusCompassFeedback") || "[]");
    if (!Array.isArray(savedFeedback)) {
      throw new Error("Saved feedback has an unexpected format.");
    }
    savedFeedback.push(entry);
    localStorage.setItem("campusCompassFeedback", JSON.stringify(savedFeedback));
  } catch (error) {
    console.error("Could not save CampusCompass feedback in this browser.", error);
    status.textContent = "We couldn’t save your feedback in this browser. Please try again or contact SMRU directly.";
    status.setAttribute("role", "alert");
    return;
  }

  form.reset();
  status.removeAttribute("role");
  status.textContent = "Thanks—your feedback was saved in this browser on this device. It has not been sent to SMRU.";
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !isOpen);
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
  });
});

renderLocations(locations);
renderGuides();
renderAnnouncements();
document.querySelectorAll(".filter-chip").forEach((chip) => chip.setAttribute("aria-pressed", String(chip.dataset.category === "All")));
