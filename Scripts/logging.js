function updateData() {
  updateUptime();
  updateCPUTemp();
  updateCPULoad();
  updateDiskLoad();
  updateWattage();
  updateRestart();
  updateLastChecked();
  setTimeout(updateData, 61000);
}

let path = "~/SensorData/Data";

function updateValues() {
  try {
    const execSync = require("child_process").execSync;
    // import { execSync } from 'child_process';  // replace ^ if using ES modules

    const output = execSync("ls", { encoding: "utf-8" });
  } catch {}
}

function updateUptime() {
  try {
    fetch(path + "/system/uptime.txt")
      .then((res) => res.text())
      .then((text) => {
        document.getElementById("uptime").innerHTML = text;
      });
  } catch {}
}

function updateCPUTemp() {
  try {
    fetch(path + "/cpu/cputemp.txt")
      .then((res) => res.text())
      .then((text) => {
        document.getElementById("cpu-temp").innerHTML = text;
      });
  } catch {}
}

function updateCPULoad() {
  try {
    fetch(path + "/cpu/cpuload.txt")
      .then((res) => res.text())
      .then((text) => {
        document.getElementById("cpu-load").innerHTML = text;
      });
  } catch {}
}

function updateDiskLoad() {
  try {
    fetch(path + "/disk/diskload.txt")
      .then((res) => res.text())
      .then((text) => {
        document.getElementById("disk-load").innerHTML = text;
      });
  } catch {}
}

function updateWattage() {
  try {
    fetch(path + "/system/wattage.txt")
      .then((res) => res.text())
      .then((text) => {
        document.getElementById("wattage").innerHTML = text;
      });
  } catch {}
}

function updateRestart() {
  try {
    fetch(path + "/system/restart.txt")
      .then((res) => res.text())
      .then((text) => {
        document.getElementById("restart").innerHTML = text;
      });
  } catch {}
}

function updateLastChecked() {
  document.getElementById("refresh").innerHTML = `${Date()
    .toString()
    .substring(15, 24)}`;
}

function forceLoadButton() {
  readDataFromFile();
}
