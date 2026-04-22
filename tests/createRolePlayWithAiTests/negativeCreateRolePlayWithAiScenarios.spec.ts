import { expect, test } from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import Homepage from "../../pages/HomePage";
import CourseLeyoutPage from "../../pages/CourseLeyoutPage";
import CourseStructurePage from "../../pages/CourseStructurePage";
import RolePlayTemplateSelectionPage from "../../pages/RolePlayTemplateSelectionPage";


test.describe("Negative Scenarios of massege to the AI", () => {
    
    let loginPage: LoginPage;
    let homePage: Homepage;
    let courseLeyoutPage: CourseLeyoutPage;
    let courseStructurePage: CourseStructurePage;
    let rolePlayTemplateSelectionPage: RolePlayTemplateSelectionPage;

    test.beforeEach(async({page}) => {
        homePage = new Homepage(page);
        loginPage = new LoginPage(page);
        courseLeyoutPage = new CourseLeyoutPage(page);
        courseStructurePage = new CourseStructurePage(page);
        rolePlayTemplateSelectionPage = new RolePlayTemplateSelectionPage(page);
        
        await loginPage.loginToApplication();
    })

    test("try to send empty massege to the AI", async() => {
        await homePage.clickCreateNewCourse();
        await courseLeyoutPage.fillCourseTitleField('QA assignment Gilboa Sulam');
        await courseLeyoutPage.clickNextBtn();
        await courseStructurePage.clickTaskRolePlay();
        await rolePlayTemplateSelectionPage.clickCreateWithAi();
        await courseStructurePage.clickCoCreateBtn();
        await courseStructurePage.clickGenerateBtn();
        await courseStructurePage.fillAiChatField(' ');
        await courseStructurePage.checkChatInputSendBtnDisabled();
    })
})