import test, { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class CourseStructurePage extends BasePage {

    private addTaskBtn: Locator;
    private rolePlayBtn: Locator;
    private coCreateBtn: Locator;
    private generateBtn: Locator;
    private aiChatField: Locator;
    private chatInputSendBtn: Locator;
    private bouncingDots : Locator;
    private approveAndContinueBtn: Locator;
    private confirmApproveAndContinueBtn: Locator;
    private testCourseBtn: Locator;

    constructor(protected page: Page) {
        super(page);
        this.addTaskBtn = this.page.getByTestId('task-selector-button');
        this.rolePlayBtn = this.page.getByTestId('add-roleplay-template-button');
        this.coCreateBtn = this.page.getByTestId('co-create-with-ai-button');
        this.generateBtn = this.page.getByTestId('confirm-generate-roleplay-button');
        this.aiChatField = this.page.getByTestId('co-create-chat-input');
        this.chatInputSendBtn = this.page.getByTestId('co-create-chat-send');
        this.bouncingDots = this.page.locator('#bouncing-dots');
        this.approveAndContinueBtn = this.page.getByTestId('approve-and-continue-button');
        this.testCourseBtn = this.page.getByTestId('test-course-button');
        this.confirmApproveAndContinueBtn = this.page.getByTestId('confirm-approve-and-continue-button');
    }

        public async clickAddTask() {
        await this.clickElement(this.addTaskBtn);
    }

        public async clickTaskRolePlay() {
        await this.clickElement(this.rolePlayBtn);    
    }
    
        public async clickCoCreateBtn() {
        await this.clickElement(this.coCreateBtn);    
    }

        public async clickGenerateBtn() {
        await this.clickElement(this.generateBtn);    
    }

        public async fillAiChatField(input: string) {
        await this.fillText(this.aiChatField, input);  
    }

        public async clickChatInputSendBtn() {
        await expect(this.bouncingDots).toBeHidden({timeout: 300000})
        await this.clickElement(this.chatInputSendBtn);    
    }

        public async clickApproveAndContinueBtn() {
        await this.clickElement(this.approveAndContinueBtn);    
    }

        public async clickCofirmApproveAndContinueBtn() {
        await this.clickElement(this.confirmApproveAndContinueBtn);    
    }

        public async clicktestCourseBtn() {
        await this.clickElement(this.testCourseBtn);    
    }

        public async checkChatInputSendBtnDisabled() {
         await test.step(`Validating that The Send Chat input is Enable`, async () => {
         await expect(this.chatInputSendBtn).toBeDisabled();
        });    
    }

}