import Page from './page.js';

class AddressPage extends Page{
    async gotoyouraddreses(){
        await $('//*[@id="nav-link-accountList-nav-line-1"]').click();

    }
    async YourAddresses(){
        await $('//*[@id="a-page"]/div[2]/div/div[3]/div[1]/a/div/div/div/div[2]/h2').click();
        await $('//*[@id="ya-myab-address-add-link"]/div/div/h2').click();
    }

    async Addanewaddress(){

        await $('//*[@id="address-ui-widgets-enterAddressFullName"]').setValue("saloni pimpale");9
        await $('//*[@id="address-ui-widgets-enterAddressPhoneNumber"]').setValue("9359199292");
        await $('//*[@id="address-ui-widgets-enterAddressPostalCode"]').setValue("413512");
        await $('//*[@id="address-ui-widgets-enterAddressLine1"]').setValue("LaxmiNiwas");
        await $('//*[@id="address-ui-widgets-enterAddressLine2"]').setValue("Hattenagarroadno3");
        await $('//*[@id="address-ui-widgets-landmark"]').setValue("GaneshTemple");
        await $('//*[@id="address-ui-widgets-enterAddressCity"]').setValue("Latur");
        await $('//*[@id="address-ui-widgets-use-as-my-default"]').click();
        // await $('//*[@id="address-ui-widgets-enterAddressFormContainer"]/div[10]/a/span/span').click();

        // await $('//*[@id="address-ui-widgets-form-submit-button"]/span/input').scrollIntoView();

        // await $('//*[@id="address-ui-widgets-delivery-instructions-desktop-widget-html-container"]/div/div/div[1]/div[1]/span/div/span[1]').click();
        // await $('//*[@id="address-ui-widgets-delivery-instructions-desktop-widget-html-container"]/div/div/div[1]/div[2]/div[1]/div/div/div/span/div[1]/label/span').click();
        await $('//*[@id="address-ui-widgets-form-submit-button"]/span/input').click();

    }

    
}

export default new AddressPage();
