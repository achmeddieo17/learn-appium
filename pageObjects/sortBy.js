const { remote } = require('webdriverio')

class sortBy {

    //initilization
    constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

    //element locators
    get sortBy() { return this.driver.$('~sort button')}
    get sortPriceAsc() { return this.driver.$('~priceAsc')}
    get sortPriceDesc() { return this.driver.$('~priceDesc')}
    get sortNameAsc () { return this.driver.$('~nameAsc')}
    get sortNameDesc () { return this.driver.$('~nameDesc')}


    //page actions 
    async sortByPriceAsc() {
        await this.sortBy.click()
        await this.sortPriceAsc.click()
    }
    async sortByPriceDesc() {
        await this.sortBy.click()
        await this.sortPriceDesc.click()
    }
    async sortByNameAsc() {
        await this.sortBy.click()
        await this.sortNameAsc.click()
    }
    async sortByNameDesc() {
        await this.sortBy.click()
        await this.sortNameDesc.click()
    }
}

module.exports = sortBy