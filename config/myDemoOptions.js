const path = require("path");

const myDemoOptions = {
  hostname: "127.0.0.1",
  port: 4723,
  logLevel: "error",
  capabilities: {
    platformName: "Android",
    "appium:automationName": "UIAutomator2",
    "appium:deviceName": "emulator-5554",
    "appium:app": path.join(process.cwd(), "apk/myDemoApp.apk"),
    "appium:appActivity": ".MainActivity",
    
  },
};

module.exports = myDemoOptions;