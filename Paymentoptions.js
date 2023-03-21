import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Paymentoptions extends Page {
    async gotopaymentoptions(){
        await $('//*[@id="nav-link-accountList"]/span').click();
        browser.pause(3000);
    }
    async Paymentoptions(){
        await $('//*[@id="a-page"]/div[2]/div/div[3]/div[2]/a/div/div/div/div[2]/h2').click();

    }
        async ManageBankAccount(){
        await $('//*[@id="walletWebsiteContainer"]/div[5]/div[3]/div/a/div').click();

        }
        async AddaNewBankAccount(){
        await $('//*[@id="transfer_confirmation-container"]/div/div/ol/a/span').click();
        browser.pause(3000);
        await $('//*[@id="newAccountDetailsForm"]/div[1]/div[2]/div[1]/label/i').click();
        browser.pause(3000);
        await $('//*[@id="enterIFSCInput"]').setValue("CNRB0008662");
        await $('//*[@id="confirmIFSCButton"]/span').click();
        browser.pause(2000);
        await $('//*[@id="addBankAccountHolderName"]').setValue("poojapimpale");
        await $('//*[@id="addBankAccountNumber"]').setValue("866210255895462");
        await $('//*[@id="confirmAddBankAccountNumber"]').setValue("866210225895462");
        browser.pause(2000);
        await $('//*[@id="a-autoid-2-announce"]/span').click();
        await $('//*[@id="addBankAccountType_2"]').click();
        await $('//*[@id="saveWithoutValidationButton"]').click();


        }


}

export default new Paymentoptions()