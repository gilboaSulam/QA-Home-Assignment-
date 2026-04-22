import { test } from "@playwright/test";
import LoginPage from "../../pages/LoginPage";



test.describe("Negative Login Scenarios", () => {
    
    let loginPage: LoginPage;

    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page)
    })



    test("Login with not using a email", async() => {
        await loginPage.goto();
        await loginPage.fillUserName("useruser");
        await loginPage.clickContinue();
        await loginPage.validateErrorInvalidEmail();
    })

    test("Login with no email", async() => {
        await loginPage.goto();
        await loginPage.fillUserName(" ");
        await loginPage.clickContinue();
        await loginPage.validateErrorNoEmail();
    })

    test("Login with incorrect password", async() => {
        await loginPage.loginToApplication(process.env.STANDARD_USER, "blablabla");
        await loginPage.validateErrorInvalidPassword();
    })

        test("Login with no password", async() => {
        await loginPage.loginToApplication(process.env.STANDARD_USER, " ");
        await loginPage.validateErrorNoPassword();
    })
})