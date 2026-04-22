import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class Homepage extends BasePage {

    private createNewCourseBtn : Locator;

    constructor(protected page: Page) {
        super(page);
        this.createNewCourseBtn = this.page.getByTestId('createCourseButton');
    }

        public async clickCreateNewCourse() {
        await this.clickElement(this.createNewCourseBtn);
    }
}