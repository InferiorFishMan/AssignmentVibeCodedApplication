const repairForm = document.getElementById("repairForm");
const diagnosisResult = document.getElementById("diagnosisResult");
const locationForm = document.getElementById("locationForm");

const issueGuides = {
  "no-power": {
    title: "Start with the power path",
    checks: [
      "Check whether the outlet or wall switch is on. If safe, test the outlet with another small device.",
      "Look at the plug and visible cable without touching damaged areas.",
      "Check the appliance manual for a reset or user-accessible fuse."
    ]
  },
  noise: {
    title: "Check for an obvious obstruction",
    checks: [
      "Switch the appliance off and unplug it if you can do so safely.",
      "Look for loose items or visible debris in areas the manual says are user-accessible.",
      "If the noise continues, changes suddenly, or comes with heat or a burning smell, stop using it."
    ]
  },
  hot: {
    title: "Stop using it for now",
    checks: [
      "If it is safe, switch it off and unplug it without touching hot or damaged parts.",
      "Keep it clear of anything that could catch fire and let it cool.",
      "Do not turn it back on to test it. Arrange a qualified repair check."
    ]
  },
  leak: {
    title: "Keep water away from electricity",
    checks: [
      "Do not touch the appliance, plug, or water if any of them may be live.",
      "Keep people away from the wet area. Only isolate power from a dry, safe location.",
      "Once the area is safe, arrange a repair check before using the appliance again."
    ]
  },
  weak: {
    title: "Check the simple, accessible things",
    checks: [
      "Switch it off and unplug it before checking any user-accessible filter or vent.",
      "Use only the cleaning or reset steps in the appliance manual.",
      "If performance does not improve, avoid opening the casing and ask a repairer."
    ]
  },
  unsure: {
    title: "Take a moment to observe",
    checks: [
      "Note what happens just before the appliance stops or changes.",
      "Check for a display message, an unusual smell, heat, or visible damage from a safe distance.",
      "If anything looks unsafe, stop using it and contact a qualified repairer."
    ]
  }
};

const applianceNames = {
  "washing-machine": "washing machine",
  fan: "fan",
  kettle: "kettle",
  vacuum: "vacuum",
  microwave: "microwave",
  toaster: "toaster",
  fridge: "fridge",
  other: "appliance"
};

function renderDiagnosis(appliance, issue) {
  const guide = issueGuides[issue] || issueGuides.unsure;
  const heading = document.createElement("h3");
  heading.className = "result-heading";
  heading.textContent = `${guide.title} — ${applianceNames[appliance] || "appliance"}`;

  const steps = document.createElement("ol");
  steps.className = "check-list";
  guide.checks.forEach((check) => {
    const item = document.createElement("li");
    item.textContent = check;
    steps.append(item);
  });

  diagnosisResult.replaceChildren(heading, steps);

  if (appliance === "microwave" || appliance === "fridge") {
    const caution = document.createElement("p");
    caution.className = "appliance-caution";
    caution.textContent = appliance === "microwave"
      ? "Microwave safety: never remove the outer case. Internal parts can hold a dangerous charge, even when unplugged."
      : "Refrigerator safety: leave internal electrics and refrigerant lines to a qualified appliance technician.";
    diagnosisResult.append(caution);
  }
}

repairForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(repairForm);
  renderDiagnosis(formData.get("appliance"), formData.get("issue"));
});

locationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.getElementById("location").value.trim();
  if (!location) return;

  document.querySelector('[data-support="technician"]').href =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`appliance repair technician home visit near ${location}`)}`;
  document.querySelector('[data-support="cafe"]').href =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`repair cafe near ${location}`)}`;

  const message = document.getElementById("supportMessage");
  message.textContent = `Searches are ready for ${location}. Choose an option to open Google Maps.`;
});
