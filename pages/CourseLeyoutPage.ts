import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class CourseLeyoutPage extends BasePage {

    private courseTitleField : Locator;
    private nextBtn: Locator;

    constructor(protected page: Page) {
        super(page);
        this.courseTitleField = this.page.locator('#title');
        this.nextBtn = this.page.getByTestId('next-step-button');
    }

        public async fillCourseTitleField(name: string) {
        await this.fillText(this. courseTitleField, name);
    }

        public async clickNextBtn() {
        await this.clickElement(this.nextBtn);
    }
}