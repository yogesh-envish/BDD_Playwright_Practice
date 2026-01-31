import { createBdd } from 'playwright-bdd'; 
import { LoginPage } from '../Pages/Loginpage.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

let loginPage;

Given('I navigate to {string}', async ({page}, url) => {
  await page.goto(url);
  loginPage = new LoginPage(page);
});

Given('I click on Login option', async ({}) => {
  await loginPage.clickMyAccount();
  await loginPage.clickLogin();
});

Given('I enter E-Mail Address {string}', async ({}, email) => {
  await loginPage.enterEmail(email);
});

Given('I enter password {string}', async ({}, password) => {
  await loginPage.enterPassword(password);
});

When('I click on submit button', async ({}) => {
  await loginPage.clickSubmitButton();
});

Then('I should verify url contains {string}', async ({}, urlPart) => {
  await loginPage.verifyUrlContains(urlPart);
});