import { Locator, Page } from "@playwright/test";
import { ErrorMessages } from "../helpers/ErrorMessages";
import { BasePage } from "./BasePage";


export default class LoginPage extends BasePage {

    private usernameField: Locator;
    private passwordField: Locator;
    private continueButton: Locator;
    private invalidEmailError: Locator;
    private noEmailError: Locator;
    private noPasswordError: Locator;
    private invalidPasswordError: Locator;
    private default_username = process.env.USER_EMAIL as string;
    private default_password = process.env.PASSWORD as string;

    
    constructor(protected page: Page) {
        super(page);
        this.usernameField = this.page.locator('[name=username]');
        this.passwordField = this.page.locator('[name=password]');
        this.continueButton = this.page.locator('[type="submit"]');
        this.invalidEmailError = this.page.locator('#error-cs-email-invalid');
        this.noEmailError = this.page.locator('#error-cs-username-required');
        this.noPasswordError = this.page.locator('#error-cs-password-required');
        this.invalidPasswordError = this.page.locator('#error-element-password');
    }


    public async loginToApplication(username = this.default_username, 
        password = this.default_password) {
        await this.page.goto('/');
        await this.fillUserName(username);
        await this.clickContinue();
        await this.fillPassword(password);
        await this.clickContinue();
    }

        public async fillUserName(username : string) {
        await this.fillText(this.usernameField, username);
    }

           public async fillPassword(password : string) {
        await this.fillText(this.passwordField, password)
    }

             public async clickContinue() {
        await this.clickElement(this.continueButton)
    }

        public async validateErrorInvalidEmail() {
        await this.validateElementText(this.invalidEmailError, ErrorMessages.LOGIN_WITH_INVALID_EMAIL);
    }

        public async validateErrorNoEmail() {
        await this.validateElementText(this.noEmailError, ErrorMessages.LOGIN_WITH_NO_EMAIL);
    }

        public async validateErrorNoPassword() {
        await this.validateElementText(this.noPasswordError, ErrorMessages.LOGINWITH_NO_PASSWORD);
    }

        public async validateErrorInvalidPassword() {
        await this.validateElementText(this.invalidPasswordError, ErrorMessages.LOGIN_WITH_INVALID_PASSWORD_OR_EMAIL);
    }

   
}