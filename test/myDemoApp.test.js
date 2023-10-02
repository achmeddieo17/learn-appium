const { expect } = require('chai')
const setupDriver = require('../utils/setupDriverMyDemo')
const options = require('../config/myDemoOptions')
const sort_By = require('../pageObjects/sortBy')
const detail = require('../pageObjects/detail')
const cart_items = require('../pageObjects/cartItem')
const login_checkout = require('../pageObjects/LoginAndCheckout')

describe.only('Test MyDemoApp', function () {
	/** @type {WebdriverIO.Browser} */ let driver
    /** @type {sort_By} */ let sortBy
    /** @type {detail} */ let detailCatalog
    /** @type {cart_items} */ let cartItems
    /** @type {login_checkout} */ let logincheckout


	before(async function () {
		driver = await setupDriver(options)
        sortBy = new sort_By(driver)
        detailCatalog = new detail(driver)
        cartItems = new cart_items(driver)
        logincheckout = new login_checkout(driver)
	})
    describe('Melakukan Sort By', function() {

        it('sort by price descending', async function () {
            
            await sortBy.sortByPriceDesc()
    
            const price1 = await driver.$('(//android.widget.TextView[@content-desc="store item price"])[1]').getText()
            const price2 = await driver.$('(//android.widget.TextView[@content-desc="store item price"])[2]').getText()
            
            expect(price1).to.satisfy(x => x > price2)
        })

        it('sort by price ascending', async function () {
		
            await sortBy.sortByPriceAsc()
    
            const price1 = await driver.$('(//android.widget.TextView[@content-desc="store item price"])[1]').getText()
            const price2 = await driver.$('(//android.widget.TextView[@content-desc="store item price"])[2]').getText()

            expect(price1).to.satisfy(x => x < price2)
        })

        it('sort by name descending', async function() {
            
            await sortBy.sortByNameDesc()

            const name1 = await driver.$('(//android.widget.TextView[@content-desc="store item text"])[1]').getText()
		    const name2 = await driver.$('(//android.widget.TextView[@content-desc="store item text"])[2]').getText()

            expect(name1).to.satisfy(x => x > name2)

        })

        it('sort by name ascending', async function() {
            
            await sortBy.sortByNameAsc()

            const name1 = await driver.$('(//android.widget.TextView[@content-desc="store item text"])[1]').getText()
		    const name2 = await driver.$('(//android.widget.TextView[@content-desc="store item text"])[2]').getText()

            expect(name1).to.satisfy(x => x < name2)

        })    
    })
    describe('Test Detail Product', function() {
        it('Melakukan Klik Product', async function() {
            
            await detailCatalog.clickCatalog()
            const text = await detailCatalog.pageProduct()

            expect(text).to.include('29.99')

        })
        
        it('Select Color', async function() {

            await detailCatalog.colorblue()
            await driver.pause(1000)
            await detailCatalog.colorgrey()
            await driver.pause(1000)
            await detailCatalog.colorred()
        })

        it('Review Product', async function() {
            
            await detailCatalog.reviewstar()
            
            const response = await detailCatalog.responsereview()

            expect(response).to.equal('Thank you for submitting your review!')
        })

        it('check cart button 0 cant add to cart Items', async function() {
            await detailCatalog.closereview()
            await detailCatalog.dragScreen()
            await detailCatalog.minusbutton()

            const badgesNull = await detailCatalog.cartbadgesNull()

            expect(badgesNull).to.include('')
        })

        it('check cart button 2 can add to cart Items', async function() {
            
            await detailCatalog.plusbutton()
            await detailCatalog.addCart()
            const getCartBadges = await detailCatalog.cartbadges()

            expect(getCartBadges).to.include('2')

        })
    })
    describe('Test Add Cart Items', function() {
        it('My Cart', async function() {

            await cartItems.cart()
            const test = await cartItems.productlabel()
            // console.log('test',test)
            expect(test).to.equal('Sauce Labs Backpack')
        })

        it('add items', async function() {
            
            await cartItems.plusbutton()
            const test = await cartItems.counteramount()

            expect(test).to.equal('2')
        })

        it('Proceed To Checkout', async function() {
            
            await cartItems.proceedtocheckout()
            const test = await cartItems.loginPage()

            expect(test).to.equal('Username')
        })
    })

    describe('Login', function() {
        it('login correct', async function() {

            await logincheckout.loginPage('bob@example.com', '10203040')
            const test = await logincheckout.entertext()

            expect(test).to.equal('Enter a shipping address')
        })
    })

    describe('Checkout', function() { 
        it('Enter a shipping address', async function() {

            await logincheckout
            .addDataCheckout('asep','jl.batungbatulis','banjarbaru','banjarbaru','707070','kalsel')
            
        })
    })
	
	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})
})