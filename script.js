/* ------------------------------
   Jumpscare + Single Audio System
------------------------------ */

const introVideo = document.getElementById("introVideo");
const introOverlay = document.getElementById("introVideoOverlay");
const mainAudio = document.getElementById("mainAudio");

// CHANGE THIS → delay before audio starts (milliseconds)
const audioDelay = 100; // 1.2 seconds after video begins

// Start audio after delay
setTimeout(() => {
  mainAudio.volume = 1.0;
  mainAudio.play().catch(() => {});
}, audioDelay);

// When jumpscare video ends → fade overlay + continue audio as music
introVideo.addEventListener("ended", () => {
  introOverlay.style.opacity = "0";

  setTimeout(() => {
    introOverlay.remove();
    mainAudio.volume = 0.4;
  }, 800);
});

/* ------------------------------
   Original Diagnosis System
------------------------------ */

const applianceMap = {
  "washing-machine": {
    "no-power": "Check that the appliance is plugged in...",
    "makes-noise": "Listen for a grinding or rattling sound...",
    "leaks": "Inspect hoses, drain filters, and the door seal...",
    "not-working": "Before buying parts, review the control panel...",
    "slow": "Slow operation is often caused by a clogged filter..."
  },
  fan: {
    "no-power": "Inspect the plug, switch, and cord...",
    "makes-noise": "Noise usually means a loose blade...",
    "overheats": "Fans often overheat when dust blocks vents...",
    "not-working": "Test the outlet and look for a stuck switch..."
  },
  kettle: {
    "no-power": "Check the plug, socket, and visible element...",
    "overheats": "A kettle that gets dangerously hot...",
    "not-working": "If it doesn’t boil, inspect the switch..."
  },
  vacuum: {
    "no-power": "Verify the cord, plug, and bag...",
    "makes-noise": "A noisy vacuum often needs a brush roll clean...",
    "slow": "Loss of suction usually means the filter is clogged..."
  },
  microwave: {
    "no-power": "Microwaves are hazardous...",
    "overheats": "Overheating is a warning sign...",
    "not-working": "Microwaves often require trained diagnosis..."
  },
  toaster: {
    "no-power": "Check the power plug and crumbs...",
    "overheats": "If it gets very hot, unplug immediately...",
    "not-working": "Crumbs and worn heating elements..."
  },
  fridge: {
    "no-power": "Confirm power, cooling fan, and outlet...",
    "makes-noise": "Rattling can come from the condenser...",
    "leaks": "Leaking often comes from a blocked drain..."
  }
};

function updateDiagnosis() {
  const applianceType = document.getElementById("applianceType").value;
  const issueType = document.getElementById("issueType").value;
  const skillLevel = document.getElementById("skillLevel").value;

  const advice =
    applianceMap[applianceType]?.[issueType] ||
    "Start with the simplest checks: power, visible damage, and obvious blockages.";

  const skillNote = {
    beginner: "This is a beginner-safe first pass...",
    confident: "You can try a careful cleaning...",
    intermediate: "This is a good step for testing and cleaning..."
  };

  const resultBox = document.getElementById("diagnosisResult");
  resultBox.innerHTML = `${advice}<br><br><strong>Safety note:</strong> ${skillNote[skillLevel]}`;
}

["applianceType", "issueType", "skillLevel"].forEach(id => {
  document.getElementById(id).addEventListener("change", updateDiagnosis);
});

document.getElementById("repairForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value || "Friend";
  const email = document.getElementById("email").value || "your email address";

  document.getElementById("formOutput").innerHTML =
    `Thanks, ${name}. We will send advice to ${email}.`;
});

updateDiagnosis();
