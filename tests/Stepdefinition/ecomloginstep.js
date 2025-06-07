import { createBdd } from 'playwright-bdd'; 

const { Given, When, Then } = createBdd();

Given('I navigate to {string}', async ({page}, url) => {
  // Step: Given I navigate to "https://ecommerce-playground.lambdatest.io/"
  await page.goto(url);
});

Given('I click on My account', async ({}) => {
  // Step: And I click on My account
  await page.click('text=My account');
});

Given('I enter E-Mail Address {string}', async ({}, arg) => {
  // Step: And I enter E-Mail Address "pranav@testroverautomation.com"
  
});

Given('I enter password {string}', async ({}, arg) => {
  // Step: And I enter password "Test1234"
  // From: tests\feature\ecomlogin.feature:10:5
});

When('I click on submit button', async ({}) => {
  // Step: When I click on submit button
  // From: tests\feature\ecomlogin.feature:11:5
});

Then('I should verify url contains {string}', async ({}, arg) => {
  // Step: Then I should verify url contains "route=account/account"
  // From: tests\feature\ecomlogin.feature:12:5
});