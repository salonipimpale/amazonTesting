import LoginPage from '../pageobjects/login.page.js'
import checkNamePage from "../pageobjects/checkName.page.js";
import addressPage from "../pageobjects/address.page.js";
import paymentoptions from '../pageobjects/Paymentoptions.js';




describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.signinsecurely()

        await LoginPage.login('salonipimpale0@gmail.com', 'Saloni@123')

    })

    /*it('should add new address', async () =>{
        await addressPage.gotoyouraddreses()
        await addressPage.YourAddresses()
        await addressPage.Addanewaddress()
    })*/

    /*it('should update users name', async ()=>{
        await checkNamePage.verifyUserName ()
        await CheckNamePage.updateUserName()
    })*/

    it('should add new bank account',async ()=>{
        await paymentoptions.gotopaymentoptions()
        await paymentoptions.Paymentoptions()
        await paymentoptions.ManageBankAccount()
        await paymentoptions.AddaNewBankAccount()
    })


})


