const { remote } = require('webdriverio')

class detail {

    //initilization
    constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

    get catalog() {return this.driver.$('(//android.widget.TextView[@content-desc="store item text"])[1]')}
    get textProduct() {return this.driver.$('~product price')}
    get colorBlue() {return this.driver.$('//android.view.ViewGroup[@content-desc="blue circle"]/android.view.ViewGroup')}
    get colorGrey() {return this.driver.$('//android.view.ViewGroup[@content-desc="gray circle"]/android.view.ViewGroup')}
    get colorRed() {return this.driver.$('//android.view.ViewGroup[@content-desc="red circle"]/android.view.ViewGroup')}
    get plusButton() {return this.driver.$('~counter plus button')}
    get minusButton() {return this.driver.$('~counter minus button')}
    get addCartButton() {return this.driver.$('~Add To Cart button')}
    get cartBadges(){ return this.driver.$('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView')}
    get cartBadgesNull() {return this.driver.$('~cart badge')}
    get reviewStar() {return this.driver.$('~review star 5')}
    get responseReview(){ return this.driver
        .$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView')}
    get closeReview() {return this.driver.$('~Close Modal button')}
    

    async clickCatalog() {
        await this.catalog.click()
    }
    async pageProduct() {
       return await this.textProduct.getText()
    }
    async colorblue() {
        (await this.colorBlue).click()
    }
    async colorgrey() {
        (await this.colorGrey).click()
    }
    async colorred() {
        (await this.colorRed).click()
    }
    async plusbutton() {
        (await this.plusButton).doubleClick()
    }
    async minusbutton() {
        (await this.minusButton).click()
    }
    async dragScreen() {
        await this.driver.touchPerform([
            { action: 'press', options: { x: 317, y: 643 } },
            { action: 'wait', options: { ms: 300 } },
            { action: 'moveTo', options: { x: 317, y: 127 } },
            { action: 'release' },
        ])
    }
    async addCart() {
        await this.addCartButton.click()
    }
    async cartbadges() {
        return await this.cartBadges.getText()
    }
    async cartbadgesNull() {
        return await this.cartBadgesNull.getText()
    }
    async reviewstar() {
        await this.reviewStar.click()
        
    }
    async closereview(){
        await this.closeReview.click()
    }
    async responsereview() {
        return await this.responseReview.getText()
    }
    
}

module.exports = detail