import { test } from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import Homepage from "../../pages/HomePage";
import CourseLeyoutPage from "../../pages/CourseLeyoutPage";
import CourseStructurePage from "../../pages/CourseStructurePage";
import RolePlayTemplateSelectionPage from "../../pages/RolePlayTemplateSelectionPage";


test.describe("Positive Creation of AI Course Scenarios", () => {
    
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

    test("create Course", async() => {
        await homePage.clickCreateNewCourse();
        await courseLeyoutPage.fillCourseTitleField('QA assignment Gilboa Sulam');
        await courseLeyoutPage.clickNextBtn();
        await courseStructurePage.clickTaskRolePlay();
        await rolePlayTemplateSelectionPage.clickCreateWithAi();
        await courseStructurePage.clickCoCreateBtn();
        await courseStructurePage.clickGenerateBtn();
        await courseStructurePage.fillAiChatField('sell candy');
        await courseStructurePage.clickChatInputSendBtn();
        await courseStructurePage.fillAiChatField('i trust you');
        await courseStructurePage.clickChatInputSendBtn();
        await courseStructurePage.fillAiChatField('i trust you');
        await courseStructurePage.clickChatInputSendBtn();
        await courseStructurePage.clickApproveAndContinueBtn();
        await courseStructurePage.clickCofirmApproveAndContinueBtn();
        await courseStructurePage.clicktestCourseBtn();
    })
})