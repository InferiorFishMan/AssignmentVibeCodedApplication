const repairForm = document.getElementById("repairForm");
const diagnosisResult = document.getElementById("diagnosisResult");
const locationForm = document.getElementById("locationForm");
const issueType = document.getElementById("issueType");
const otherIssueField = document.getElementById("otherIssueField");
const otherIssue = document.getElementById("otherIssue");
const themeToggle = document.getElementById("themeToggle");
const chatPanel = document.getElementById("chatPanel");
const chatLauncher = document.getElementById("openChat");
const chatForm = document.getElementById("chatForm");
const chatMessages = document.getElementById("chatMessages");

const issueGuides = {
  "no-power": {
    title: "Check the power",
    checks: [
      "Check that the wall switch is on.",
      "Look at the plug and cable. Do not touch them if they look damaged.",
      "Check the manual for a simple reset you can do from the outside."
    ]
  },
  noise: {
    title: "Check for something stuck",
    checks: [
      "Turn it off and unplug it, if you can do so safely.",
      "Look for anything loose or stuck in places the manual says you can check.",
      "If the noise continues, or you notice heat or a burning smell, stop using it."
    ]
  },
  hot: {
    title: "Stop using it",
    checks: [
      "Turn it off only if you can do so without touching hot or damaged parts.",
      "Keep it away from anything that could catch fire and let it cool.",
      "Do not turn it back on. Ask a repair person to check it."
    ]
  },
  leak: {
    title: "Keep away from the water",
    checks: [
      "Do not touch the appliance, plug, or water.",
      "Keep people away from the wet area.",
      "Ask for help before using the appliance again."
    ]
  },
  weak: {
    title: "Check the simple things first",
    checks: [
      "Turn it off and unplug it before checking any removable filter or vent.",
      "Follow the cleaning or reset steps in the manual.",
      "If it still does not work well, do not open it. Ask a repair person."
    ]
  },
  unsure: {
    title: "Not sure? Take a look",
    checks: [
      "Notice what happens just before it stops or changes.",
      "Look for a warning light, unusual smell, heat, or visible damage from a safe distance.",
      "If anything looks unsafe, stop using it and ask a repair person."
    ]
  },
  other: {
    title: "Start with a safe check",
    checks: [
      "Turn it off and look for visible damage, heat, smoke, or a burning smell from a safe distance.",
      "Check the manual for a simple check you can do from the outside.",
      "Do not open it. If you are unsure, ask a repair person."
    ]
  }
};

function renderDiagnosis(appliance, issue, description) {
  const guide = issueGuides[issue] || issueGuides.unsure;
  const heading = document.createElement("h3");
  heading.id = "resultTitle";
  heading.className = "result-heading";
  heading.textContent = guide.title;

  const steps = document.createElement("ol");
  steps.className = "check-list";
  guide.checks.forEach((check) => {
    const item = document.createElement("li");
    item.textContent = check;
    steps.append(item);
  });

  diagnosisResult.replaceChildren(heading, steps);

  if (description) {
    const note = document.createElement("p");
    note.className = "issue-description";
    note.textContent = `You described: ${description}`;
    diagnosisResult.insertBefore(note, steps);
  }

  if (appliance === "microwave" || appliance === "fridge") {
    const caution = document.createElement("p");
    caution.className = "appliance-caution";
    caution.textContent = appliance === "microwave"
      ? "Microwave safety: never remove the outer case. Internal parts can hold a dangerous charge, even when unplugged."
      : "Fridge safety: do not touch wires or pipes inside the appliance. Ask a repair person.";
    diagnosisResult.append(caution);
  }
}

function updateOtherIssueField() {
  const isOther = issueType.value === "other";
  otherIssueField.hidden = !isOther;
  otherIssue.required = isOther;
  if (!isOther) otherIssue.value = "";
}

function setChatOpen(isOpen) {
  chatPanel.hidden = !isOpen;
  chatLauncher.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) document.getElementById("chatMessage").focus();
}

issueType.addEventListener("change", updateOtherIssueField);
updateOtherIssueField();

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#191e3b" : "#f5f5fb";
});

repairForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(repairForm);
  const issue = formData.get("issue");
  const description = issue === "other" ? otherIssue.value.trim() : "";
  renderDiagnosis(formData.get("appliance"), issue, description);
});

locationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.getElementById("location").value.trim();
  if (!location) return;

  document.querySelector('[data-support="technician"]').href =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`appliance repair technician near ${location}`)}`;
  document.querySelector('[data-support="cafe"]').href =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`repair cafe near ${location}`)}`;

  const message = document.getElementById("supportMessage");
  message.textContent = `Map searches are ready for ${location}. Choose either option above.`;
});

chatLauncher.addEventListener("click", () => {
  setChatOpen(chatPanel.hidden);
});
document.getElementById("closeChat").addEventListener("click", () => {
  setChatOpen(false);
  chatLauncher.focus();
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.getElementById("chatMessage");
  const userBubble = document.createElement("p");
  userBubble.className = "chat-bubble chat-bubble-user";
  userBubble.textContent = message.value.trim();
  chatMessages.append(userBubble);

  const demoReply = document.createElement("p");
  demoReply.className = "chat-bubble";
  demoReply.textContent = "Thanks for trying the chat demo. This inbox is not monitored yet.";
  chatMessages.append(demoReply);
  chatForm.reset();
  message.focus();
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reducedMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("has-scroll-effects");
  const artObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".scroll-art").forEach((art) => artObserver.observe(art));
}
