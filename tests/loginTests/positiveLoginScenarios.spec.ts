import { test } from "@playwright/test";
import LoginPage from "../../pages/LoginPage";


test.describe("Positive Login Scenarios", () => {
    
    let loginPage: LoginPage;

    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page);
        
    })

    test("Login with standard_user", async() => {
        await loginPage.loginToApplication();
    })
})