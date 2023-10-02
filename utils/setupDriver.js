const { remote } = require("webdriverio")
const options = require('../config/options')

async function setupDriver () {
	const driver = await remote(options)
	return driver
}

module.exports = setupDriver