import { Page, Locator } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshotHelper';

export class SignUpPage {
  readonly page: Page;
  readonly enterAccountInformationHeader: Locator;
  readonly nameField: Locator;
  readonly passwordField: Locator;
  readonly dayDropdown: Locator;
  readonly monthDropdown: Locator;
  readonly yearDropdown: Locator;
  readonly signUpForNewsLetterCheckbox: Locator;
  readonly receiveOffersCheckbox: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly companyField: Locator;
  readonly addressField: Locator;
  readonly address2Field: Locator;
  readonly countryDropdown: Locator;
  readonly stateField: Locator;
  readonly cityfield: Locator;
  readonly zipcodeField: Locator;
  readonly mobileNumberField: Locator;
  readonly createAccountBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterAccountInformationHeader = page.getByText(
      'Enter Account Information'
    );
    this.nameField = page.locator('input[data-qa=name]');
    this.passwordField = page.locator('input[data-qa=password]');
    this.dayDropdown = page.locator('select[data-qa=days]');
    this.monthDropdown = page.locator('select[data-qa=months]');
    this.yearDropdown = page.locator('select[data-qa=years]');
    this.signUpForNewsLetterCheckbox = page.locator('input[id=newsletter]');
    this.receiveOffersCheckbox = page.locator('input[id=optin]');
    this.firstNameField = page.locator('input[data-qa=first_name]');
    this.lastNameField = page.locator('input[data-qa=last_name]');
    this.companyField = page.locator('input[data-qa=company]');
    this.addressField = page.locator('input[data-qa=address]');
    this.address2Field = page.locator('input[data-qa=address2]');
    this.countryDropdown = page.locator('select[data-qa=country]');
    this.stateField = page.locator('input[data-qa=state]');
    this.cityfield = page.locator('input[data-qa=city]');
    this.zipcodeField = page.locator('input[data-qa=zipcode]');
    this.mobileNumberField = page.locator('input[data-qa=mobile_number]');
    this.createAccountBtn = page.locator('button[data-qa=create-account]');
  }

  async selecTitle(title: string) {
    const titleIdMap: Record<string, number> = {
      Mr: 1,
      Mrs: 2,
    };

    const id = titleIdMap[title];
    if (!id) {
      throw new Error('Invalid title provided. Use "Mr" or "Mrs".');
    }

    const titleCheckBox = this.page.locator(`input[id=id_gender${id}]`);
    await titleCheckBox.check();
  }

  async verifyHeaderIsVisible() {
    await this.enterAccountInformationHeader.waitFor();
    await this.enterAccountInformationHeader.isVisible();
    await takeScreenshot(this.page, '04 - Account Info Page');
  }
  async fillAccountInformation(
    title: string,
    name: string,
    password: string,
    day: string,
    month: string,
    year: string
  ) {
    await this.selecTitle(title);
    await this.nameField.fill(name);
    await this.passwordField.fill(password);
    await this.dayDropdown.selectOption(day);
    await this.monthDropdown.selectOption(month);
    await this.yearDropdown.selectOption(year);
  }
  async checkSignUpForNewsLetter() {
    await this.signUpForNewsLetterCheckbox.check();
  }
  async checkReceiveOffers() {
    await this.receiveOffersCheckbox.check();
  }
  async fillAddressInformation(
    firstname: string,
    lastname: string,
    company: string,
    address: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    mobileNumber: string
  ) {
    await this.firstNameField.fill(firstname);
    await this.lastNameField.fill(lastname);
    await this.companyField.fill(company);
    await this.addressField.fill(address);
    await this.address2Field.fill(address2);
    await this.countryDropdown.selectOption(country);
    await this.stateField.fill(state);
    await this.cityfield.fill(city);
    await this.zipcodeField.fill(zipcode);
    await this.mobileNumberField.fill(mobileNumber);
    await takeScreenshot(this.page, '05 - Address Info Filled');
  }
  async clickOnCreateAccountBtn() {
    await this.createAccountBtn.click();
  }
}
