const { remote } = require('webdriverio')

class cartItems {

    //initilization
    constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

    get cartBadges() {return this.driver.$('~cart badge')}
    get productLabel() {return this.driver.$('~product label')}
    get plusButton() {return this.driver.$('~counter plus button')}
    get counterAmount() {return this.driver
        .$('//android.view.ViewGroup[@content-desc="counter amount"]/android.widget.TextView')}
    get proceedToCheckout() {return this.driver.$('~Proceed To Checkout button')}
    get Username() {return this.driver
        .$('//android.view.ViewGroup[@content-desc="login screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[2]')}

    async cart(){
        await this.cartBadges.click()
    }
    async productlabel() {
        return await this.productLabel.getText()
    }
    async plusbutton() {
        await this.plusButton.click()
    }
    async counteramount() {
        return await this.counterAmount.getText()
    }
    async proceedtocheckout() {
        await this.proceedToCheckout.click()
    }
    async loginPage(){
        return await this.Username.getText()
    }
    
}
module.exports = cartItems