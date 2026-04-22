import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class RolePlayTemplateSelectionPage extends BasePage {

    private createWithAiBtn: Locator;

    constructor(protected page: Page) {
        super(page);
        this.createWithAiBtn =  page.getByRole('button', { name: 'Create with AI' });
    }

        public async clickCreateWithAi() {
        await this.clickElement(this.createWithAiBtn);
    }
    
}