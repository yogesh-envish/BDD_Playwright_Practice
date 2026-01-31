import CommonAction from '../Utilities/commonAction.js';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.actions = new CommonAction(page);
        this.myaccountlink = page.getByRole('button', { name: 'My account' });
        this.logonlink= page.getByRole('link', { name: 'Login' });
        this.emailSelector = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passwordSelector = page.getByRole('textbox', { name: 'Password' });
        this.submitSelector = page.getByRole('button', { name: 'Login' });
    }

    async clickMyAccount() {
        await this.actions.click(this.myaccountlink);
    } 
    
    async clickLogin() {
        await this.actions.click(this.logonlink);
    }

    async enterEmail(email) {
        await this.actions.clearandfill(this.emailSelector, email);
    }

    async enterPassword(password) {
        await this.actions.clearandfill(this.passwordSelector, password);
    }

    async clickSubmitButton(urlPart) {
        await this.actions.click(this.submitSelector);
    }

    async verifyUrlContains(urlPart) {
        await this.actions.expectUrlContains(urlPart);
    }
}