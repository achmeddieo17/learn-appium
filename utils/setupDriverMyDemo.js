const { remote } = require("webdriverio")
const myDemoOptions = require('../config/myDemoOptions')

async function setupDriver () {
	const driver = await remote(myDemoOptions)
	return driver
}

module.exports = setupDriver