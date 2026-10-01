const applianceMap = {
  "washing-machine": {
    "no-power": "Check that the appliance is plugged in, the socket works, and the door is fully closed. If it still does nothing, look for a tripped fuse or a damaged lead before replacing parts.",
    "makes-noise": "Listen for a grinding or rattling sound. Many washers have a blocked pump or loose drum support. Start with a visible clean-out and a firm check for loose screws.",
    "leaks": "Inspect hoses, drain filters, and the door seal. Small leaks are often caused by a blocked filter or a worn seal, not a major motor fault.",
    "not-working": "Before buying parts, review the control panel and filter, then check if the machine responds at all. A reset and cleaning often helps with minor electronics issues.",
    "slow": "Slow operation is often caused by a clogged filter, blocked drain, or overloaded drum. Reduce the load and check the drain route first."
  },
  fan: {
    "no-power": "Inspect the plug, switch, and cord for damage. If the fan hums but does not spin, the motor bearings or blade may be obstructed.",
    "makes-noise": "Noise usually means a loose blade, worn bearing, or collected dust. Clean the blades and housing before deeper repair work.",
    "overheats": "Fans often overheat when dust blocks the vents or the motor is struggling. Clean the air path and stop using it if it smells burny.",
    "not-working": "Test the outlet and look for a stuck switch. If it only works intermittently, the connectors or speed control may need attention."
  },
  kettle: {
    "no-power": "Check the plug, socket, and visible element area. Kettles often fail due to a damaged power cord or dried mineral buildup on the base.",
    "overheats": "A kettle that gets dangerously hot can indicate a failing thermocouple or a blocked vent. Stop using it and replace or repair the safety component.",
    "not-working": "If it doesn’t boil, inspect the switch and element contacts. A simple reseating of the base can resolve a poor connection."
  },
  vacuum: {
    "no-power": "Verify the cord, plug, and bag or dust bin. A blocked hose or clogged filter is a common reason for a sudden loss of suction.",
    "makes-noise": "A noisy vacuum often needs a brush roll clean or a foreign object removed from the head. Inspect the nozzle and brush before replacing parts.",
    "slow": "Loss of suction usually means the filter, hose, or intake is clogged. Clean or replace the filter and inspect for blockages."
  },
  microwave: {
    "no-power": "Microwaves are hazardous: only check the plug, socket, and visible bezel. If the door or safety interlock is faulty, stop and seek a qualified repair professional.",
    "overheats": "Overheating is a warning sign. A microwave should be inspected by a qualified technician if it gets hot in unusual places or smells burnt.",
    "not-working": "Microwaves often require trained diagnosis. If it fails to power on or the display is dead, verify the door latch and then seek professional service."
  },
  toaster: {
    "no-power": "Check the power plug, socket, and if the slot has crumbs or debris. A poor contact often makes a toaster appear dead.",
    "overheats": "If it gets very hot or smells burnt, unplug it immediately. Replace the element or seek a safe repair if the housing is compromised.",
    "not-working": "Visible crumbs and worn heating elements are common causes. Clean thoroughly and inspect the thermal cut-out before replacing parts."
  },
  fridge: {
    "no-power": "Confirm power, cooling fan, and outlet. If the appliance hums but doesn’t cool, the compressor start relay or condenser may need attention.",
    "makes-noise": "Rattling can come from the condenser or fan. Check for a blocked vent and unstable leveling before a deeper repair.",
    "leaks": "Leaking often comes from a blocked drain or damaged door seal. Clear the condensation line and inspect the gasket for wear."
  }
};

function updateDiagnosis() {
  const applianceType = document.getElementById("applianceType").value;
  const issueType = document.getElementById("issueType").value;
  const skillLevel = document.getElementById("skillLevel").value;

  const advice = applianceMap[applianceType]?.[issueType] || "Start with the simplest checks: power, visible damage, and obvious blockages before replacing parts.";

  const skillNote = {
    beginner: "This is a beginner-safe first pass. Avoid opening mains-powered or refrigerant systems without training.",
    confident: "You can try a careful cleaning and visual inspection, but stop if the issue involves heating elements, gas, or sealed systems.",
    intermediate: "This is a good step for testing, cleaning, and replacing simple consumer parts. Keep safety checks strict."
  };

  const resultBox = document.getElementById("diagnosisResult");
  resultBox.innerHTML = `${advice}<br><br><strong>Safety note:</strong> ${skillNote[skillLevel]}`;
}

const deviceSelect = document.getElementById("applianceType");
const issueSelect = document.getElementById("issueType");
const skillSelect = document.getElementById("skillLevel");

[deviceSelect, issueSelect, skillSelect].forEach((element) => {
  element.addEventListener("change", updateDiagnosis);
});

const form = document.getElementById("repairForm");
const output = document.getElementById("formOutput");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value || "Friend";
  const email = document.getElementById("email").value || "your email address";
  const symptoms = document.getElementById("symptoms").value || "There are visible signs of wear or blocked airflow.";

  output.innerHTML = `Thanks, ${name}. We will have a look into your written description and send the best fix-up advice we can offer to ${email}. For the time being, the first safe step is to unplug the appliance and check for visible damage, dust buildup, or a loose cord. We will let you know when it's time to bring it to a local repair clinic or repair cafe for guided support.`;
});

updateDiagnosis();
