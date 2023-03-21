import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async signinsecurely() {
        browser.pause(3000);
        await $('//*[@id="gw-sign-in-button"]/span/a').click();
    }

    async login(username, password) {
        browser.pause(3000);
        await $('//*[@id="ap_email"]').setValue(username)
        await $('//*[@id="continue"]').click()
        await $('//*[@id="ap_password"]').setValue(password)
        await $('//*[@id="signInSubmit"]').click();
    }

    open() {
        return super.open('/')
    }


}

export default new LoginPage()
