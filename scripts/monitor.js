/**
 * System Monitoring Script
 * Supports both production and development modes
 */

const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: {
    interval: 60000, // every 60s
    alertThreshold: 80,
    debugMode: false
  },
  development: {
    interval: 5000, // every 5s
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true
  }
};

const config = monitorConfig[ENV];

console.log(`Starting ${ENV} monitor...`);

setInterval(checkSystemHealth, config.interval);

function checkSystemHealth() {
  const cpu = getCPU();
  const mem = getMemory();

  if (config.debugMode) {
    console.log(`[DEBUG] CPU: ${cpu.toFixed(2)}%, Memory: ${mem.toFixed(2)}%`);
  }

  if (cpu > config.alertThreshold || mem > config.alertThreshold) {
    console.warn("⚠️  System usage exceeds threshold!");
  } else {
    console.log("✅ System running normally.");
  }
}

function getCPU() {
  return Math.random() * 100;
}

function getMemory() {
  return Math.random() * 100;
}
