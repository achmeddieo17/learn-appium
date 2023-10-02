const { remote } = require('webdriverio')

class loginCheckout {

    //initilization
    constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

    get usernameInput() {return this.driver.$('~Username input field')}
    get passwordInput() {return this.driver.$('~Password input field')}
    get loginButton() { return this.driver.$('~Login button')}
    get enterText() {return this.driver
        .$('//android.widget.ScrollView[@content-desc="checkout address screen"]/android.view.ViewGroup/android.widget.TextView[1]')}

    get fullName() {return this.driver.$('~Full Name* input field')}
    get addressLine1() {return this.driver.$('~Address Line 1* input field')}
    get city() {return this.driver.$('~City* input field')}
    get region() {return this.driver.$('~State/Region input field')}
    get zipCode() {return this.driver.$('~Zip Code* input field')}
    get country() {return this.driver.$('~Country* input field')}
    get toPayment() {return this.driver.$('~To Payment button')}
   

    async loginPage(username, password) {
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }
    async entertext() {
        return await this.enterText.getText()
    }
    async addDataCheckout(fullName,addressLine1,city,region,zipCode,country) {
        await this.fullName.setValue(fullName)
        await this.addressLine1.setValue(addressLine1)
        await this.driver.touchPerform([
            { action: 'press', options: { x: 317, y: 643 } },
            { action: 'wait', options: { ms: 300 } },
            { action: 'moveTo', options: { x: 317, y: 127 } },
            { action: 'release' },
        ])
        await this.city.setValue(city)
        await this.region.setValue(region)
        await this.zipCode.setValue(zipCode)
        await this.country.setValue(country)
        await this.toPayment.click()

    }

}

module.exports = loginCheckout