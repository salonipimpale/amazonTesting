import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class checkName extends Page {

    async verifyUserName (){
        
        await $('#nav-link-accountList').click();
        await $('//*[@id="a-page"]/div[2]/div/div[2]/div[2]/a/div/div/div/div[2]/h2').click();

        // await $('#ap_Login & security').waitForExist({ timeout: 5000 });
        // await $('#ap_Login & security').setValue(Login & security);
        await browser.pause(5000);

        await expect($('//*[@id="cnep_1a_name_form"]/div/div/div[1]/div[2]')).toHaveText('Saloni Pimple');
    }

    async updateUserName(){
        let name = 'pooja pimpale';

        await $('//*[@id="auth-cnep-edit-name-button"]').click();

        await $('//*[@id="ap_customer_name"]').setValue(name);

        await $('//*[@id="cnep_1C_submit_button"]').click();
        await browser.pause(3000);

        await expect($('//*[@id="cnep_1a_name_form"]/div/div/div[1]/div[2]')).toHaveText(name);
    
        await $('//*[@id="cvf-page-content"]/div/div/div/form/div[1]/div/div[2]/div/input').setValue(name);
    }

    
}

export default new checkName();