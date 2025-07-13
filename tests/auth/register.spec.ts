import { test } from '@playwright/test';
import { goToUrl } from './../../utils/helpers';
import { TopNavigationBar } from './../../pom/topNavBar';
import { LoginPage } from '../../pom/loginPage';
import { generateUserData, generalFixedData } from '../../utils/dataGenerator';
import { SignUpPage } from '../../pom/signUpPage';
import { AccountCreatedPage } from '../../pom/accountCreatedPage';
import { AccountDeletedPage } from '../../pom/accountDeletedPage';

const userData = generateUserData();
const fixedData = generalFixedData();

test.describe('Register User Flow', () => {
  test('Register user', async ({ page }) => {
    const topNavBar = new TopNavigationBar(page);
    const signUpPage = new SignUpPage(page);
    const loginPage = new LoginPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);
    const accountDeletedPage = new AccountDeletedPage(page);

    await goToUrl(page);
    await topNavBar.clickOnSignupLoginBtn();
    await loginPage.verifySignUpHeaderIsVisible();
    await loginPage.enterName(userData.name);
    await loginPage.enterSignUpEmail(userData.email);
    await loginPage.clickOnSignUpBtn();
    await signUpPage.verifyHeaderIsVisible();
    await signUpPage.fillAccountInformation(
      fixedData.title,
      userData.name,
      userData.password,
      fixedData.day,
      fixedData.month,
      fixedData.year
    );
    await signUpPage.checkSignUpForNewsLetter();
    await signUpPage.checkReceiveOffers();
    await signUpPage.fillAddressInformation(
      userData.firstName,
      userData.lastName,
      userData.company,
      userData.address,
      userData.address2,
      fixedData.country,
      userData.state,
      userData.city,
      userData.zipcode,
      userData.mobileNumber
    );
    await signUpPage.clickOnCreateAccountBtn();
    await accountCreatedPage.verifyAccountCreatedTxtIsVisible();
    await accountCreatedPage.clickOnContinueBtn();
    await topNavBar.verifyLoggedInAsUserTxtIsVisible(userData.name);
    await topNavBar.clickOnDeleteAccountBtn();
    await accountDeletedPage.verifyAccountDeletedTxtIsVisible();
    await accountDeletedPage.clickOnContinueBtn();
  });
});
