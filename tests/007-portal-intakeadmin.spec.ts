import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import {
  BASE_FRONTEND_URL,
  isRunningOnLocal,
  localBaseUrl,
} from '../localemails.js/const';
import { IEmail, readEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();
  console.log(myEmails);
  if (!myEmails?.billerEmail?.length) {
    throw new Error(`billerEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Intake admin login and  onboarding ', async ({ request }) => {
  let myEmails: IEmail = await readEmails();
  const data = await generatePasswordlessLoginLink({
    email: myEmails.intakeadminroleEmail!,
    // email:"z7knk.yJM2b@inbox.testmail.app",
    
    request: request,
  });
  await page.goto(data!);

// Onbaording flows for Practice Manager
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('IntakeAdmin');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('1');
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
await page.waitForTimeout(1000);
await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
await page.waitForTimeout(4000);
   });
   test('Settings Tab', async () => {
    await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
    // Invite Team Member (Therapist 1)
    await page.getByText('Team members').first().click();
//     // Billing Tab
// await page.locator('p').filter({ hasText: 'Billing' }).click();
// await page.getByRole('tab', { name: 'Insurance' }).click();
//   await page.getByText('Payers').click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByRole('combobox', { name: 'Search for insurance payers' }).fill('caremore');
//   await page.getByText('Caremore- CRMRE1').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
  //   Add practice Emails Imports
await page.getByText('Practice Email Imports').click();
await page.getByRole('button', { name: 'Add New' }).nth(1).click();
await page.getByLabel('Email Address').click();
//   
const Bookinginbox2 = await createNewEmail();
await page.getByLabel('Email Address').fill(Bookinginbox2!);
await page.getByLabel('Choose account type').click();
await page.getByRole('option', { name: 'Google' }).click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();

await page.getByRole('button', { name: 'Add New' }).nth(1).click();
await page.getByLabel('Email Address').click();
//   
const Bookinginbox3 = await createNewEmail();
await page.getByLabel('Email Address').fill(Bookinginbox3!);
await page.getByLabel('Choose account type').click();
await page.getByRole('option', { name: 'Outlook' }).click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();

//   Privacy Policy
await page.getByText('Website Privacy Policy').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
  await page.getByText('Terms & Conditions').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();

});
test('Forms Tab', async () => {
    await page
      .locator('div')
      .filter({ hasText: /^Documents$/ })
      .getByRole('img')
      .click();
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  
    // // Questionaries Form Code
    await page.getByText('Questionnaire').click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Intake Automation Forms');
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page.getByPlaceholder('Please enter a question').fill('Gender?');
    await page
      .getByRole('button', { name: '1 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Single choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'Short answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Name of Client?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '2 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Long answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Name of Client and Tell Your Health Conditions?');
    await page
      .getByRole('button', { name: '3 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Date' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client Date Of Birth?');
    await page.getByLabel('Mandatory').uncheck();
    await page
      .getByRole('button', { name: '4 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'E-signature' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Please Sign Your Sing?');
    await page.getByLabel('Mandatory').check();
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').first().click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
  
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path'
      )
      .click();
    await page.getByRole('menuitem', { name: 'Preview' }).click();
    await page.locator('.MuiButtonBase-root').first().click();
  
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path'
      )
      .click();
    await page.getByRole('menuitem', { name: 'Rename' }).click();
    await page.getByPlaceholder('type here').clear();
    await page.getByPlaceholder('type here').fill('Intake Automation Forms');
    await page.reload();
    await page.waitForTimeout(1000);
    // await page.getByRole('button', { name: 'Rename' }).nth(1).click();
  
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path'
      )
      .click();
    await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    // // Consent Form
    await page.getByText('Consent form', { exact: true }).click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Intake Consent Automation');
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.locator('pre').getByRole('paragraph').click();
    await page.locator('pre div').first().fill('Here I am Writing Praragraph?');
    // Add Pdf code
    await page
      .locator(
        '#root > div > div > div._formContainer_1srfm_1 > div > div._editor_1srfm_16 > input[type=file]'
      )
      .setInputFiles(path.join(__dirname + '../files/dummy.pdf'));
    await page.getByLabel('Add Provider signature').check();
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    // // Progress Note
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    await page.getByText('Progress note', { exact: true }).click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Intake Automation Testing');
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('what is Your Gender?');
    await page
      .getByRole('button', { name: '1 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Single choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'Short answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Name of Client?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '2 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Long answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Name of Client and Tell your Self?');
    await page
      .getByRole('button', { name: '3 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Date' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client date of Brithday?');
    await page
      .getByRole('button', { name: '4 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Multiple choice' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client Symptoms?');
    await page
      .getByRole('button', { name: '5 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Multiple choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'CPT code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client CPT code?');
    await page
      .getByRole('button', { name: '6 Please enter a question CPT' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Diagnosis code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client Diagnosis Code?');
    await page
      .getByRole('button', { name: '7 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'E-signature' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Please Sign here?');
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').first().click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    // await page.waitForTimeout(1000);
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._header_faptv_4 > div > div > svg > path'
      )
      .click();
    // await page.getByTestId('ArrowBackRoundedIcon').click();
    // // Treatment plan
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    await page.getByText('Treatment plan', { exact: true }).click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Intake Automation Treatement Plan');
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Gender?');
    await page
      .getByRole('button', { name: '1 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Single choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'Short answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your name?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '2 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Long answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Health Conditions?');
    await page
      .getByRole('button', { name: '3 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Date' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Date of Birthday?');
    await page
      .getByRole('button', { name: '4 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Multiple choice' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Health Conditions?');
    await page.getByLabel('Mandatory').uncheck();
    await page
      .getByRole('button', { name: '5 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Multiple choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'CPT code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your CPT code?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '6 Please enter a question CPT' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Diagnosis code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Diagnosis code?');
    await page
      .getByRole('button', { name: '7 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'E-signature' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Sign?');
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').first().click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    // // Assessment form Code
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    await page.getByText('Assesment').click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Intake Automation Assesment Form');
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Gender?');
    await page
      .getByRole('button', { name: '1 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Single choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'Short answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Name?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '2 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Long answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Health Conditions?');
    await page
      .getByRole('button', { name: '3 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Multiple choice' }).click();
    await page.getByLabel('Mandatory').uncheck();
    await page
      .getByRole('button', { name: '4 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Multiple choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'Date' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Health Cerificate Date?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '5 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'CPT code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your CPT code?');
    await page
      .getByRole('button', { name: '6 Please enter a question CPT' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Diagnosis code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Diagosis code?');
    await page
      .getByRole('button', { name: '7 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'E-signature' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Sign Here?');
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').first().click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    //  Intake Pacakges
    await page.getByRole('button', { name: 'My intake packet' }).nth(1).click();
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('Intake Automation Forms');
    await page.getByRole('option', { name: 'Intake Automation Forms' }).click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(2000);
  
    await page.getByRole('tab', { name: 'Minor' }).click();
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('Intake Automation Forms');
    await page.getByRole('option', { name: 'Intake Automation Forms' }).click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(2000);
  
    await page.getByRole('tab', { name: 'Couple' }).click();
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('Intake Automation Forms');
    await page.getByRole('option', { name: 'Intake Automation Forms' }).click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(2000);
    // await page.getByTestId('ArrowBackRoundedIcon').click();
    await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
    await page
      .locator('div')
      .filter({ hasText: /^Settings$/ })
      .getByRole('img')
      .click();
    });
    test('Create Appoinment', async () => {
        // Create Appoinments
        await page
          .locator('div')
          .filter({ hasText: /^Calendar$/ })
          .getByRole('img')
          .click();
          await page.getByRole('button', { name: 'Availability' }).nth(1).click();
          await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._calendarSettings_1fo8k_1 > div > div.primary-b1-bold._subTitle_1fo8k_28 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383 > input').click();
          await page.waitForTimeout(2000);
          await page.getByLabel('Monday').check();
  await page.getByLabel('Tuesday').check();
  await page.getByLabel('Wednesday').check();
  await page.getByLabel('Thursday').check();
  await page.getByLabel('Friday').check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByText('Terms & Conditions').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
  await page.locator('div').filter({ hasText: /^Calendar$/ }).getByRole('img').click();
        await page.getByRole('button', { name: 'Month' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.locator('div').filter({ hasText: /^20$/ }).click();
        await page.getByLabel('Select client profile*').click();
        await page.getByRole('combobox', { name: 'Select client profile*' }).fill('poor');
        await page.getByText('Poornima (T1)', { exact: true }).click();
        await page.getByLabel('Select service *').click();
        await page.getByText('Developmental Testing, ...').click();
        await page.getByPlaceholder('Enter text here').click();
        await page.getByPlaceholder('Enter text here').fill('New every day testing');
        await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
        await page.waitForTimeout(1000);
        // Past Date Appoinments
        await page.getByRole('button', { name: 'Back' }).click();
        await page.getByRole('button', { name: 'Back' }).click();
        await page.getByRole('button', { name: 'Back' }).click();
        await page.locator('div').filter({ hasText: /^17$/ }).click();
        await page.getByLabel('Select client profile*').click();
        await page.getByRole('combobox', { name: 'Select client profile*' }).fill('poor');
        await page.getByText('Poornima (T1)', { exact: true }).click();
        await page.getByLabel('Select service *').click();
        await page.getByText('Developmental Testing, ...').click();
        await page.getByPlaceholder('Enter text here').click();
        await page.getByPlaceholder('Enter text here').fill('New every day testing');
        await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
        // Create Appoinment Button( top Bar)
        // await page.getByRole('button', { name: 'Create' }).nth(1).click();
        await page
          .locator(
            '#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div._createBtnContainer_148j7_97 > button > button'
          )
          .click();
        await page.getByRole('menuitem', { name: 'Create appointment' }).click();
        await page.getByLabel('Select client profile*').click();
        await page.getByRole('combobox', { name: 'Select client profile*' }).fill('poor');
        await page.getByText('Poornima (T1)', { exact: true }).click();
        await page.getByLabel('Select service *').click();
        await page.getByText('Family psychotherapy...').click();
        await page.getByPlaceholder('Enter text here').click();
        await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
        await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
        await page.waitForTimeout(3000);
      });
      test('Create Clients', async () => {
        await page
          .locator(
            '#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div._createBtnContainer_148j7_97 > button > button'
          )
          .click();
        // await page.getByRole('button', { name: 'Create' }).nth(1).click();
        await page.getByRole('menuitem', { name: 'Create client' }).click();
        await page.getByLabel('First Name*').click();
        await page.getByLabel('First Name*').fill('Practice');
        await page.getByLabel('Last Name*').click();
        await page.getByLabel('Last Name*').fill('Test');
        await page.getByLabel('Email*').click();
        //
        const invitesinbox2 = await createNewEmail();
        await page.getByLabel('Email*').fill(invitesinbox2!);
    
        await page.getByRole('combobox', { name: 'Clinician' }).click();
        await page.getByRole('combobox', { name: 'Clinician' }).fill('Therapist 1');
        await page.getByRole('option', { name: 'icon Therapist' }).getByRole('paragraph').click();
        // await page.getByRole('combobox', { name: 'Clinician' }).click();
        // await page.getByLabel('Clear').click();
        // await page.getByRole('combobox', { name: 'Clinician' }).click();
        // await page.getByRole('combobox', { name: 'Clinician' }).fill('Therapist 1');
        // await page.getByRole('option', { name: 'icon Therapist' }).click();
        await page.getByRole('button', { name: 'Continue' }).nth(1).click();
        await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
      });
      test('Intake tab', async () => {
        await page.locator('._sideBarItem_148j7_34 > img').first().click();
        // await page.locator('div').filter({ hasText: /^Referrals$/ }).getByRole('img').click();
        await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
        await page.getByLabel('First Name*').click();
        await page.getByLabel('First Name*').fill('New');
        await page.getByLabel('Last Name').click();
        await page.getByLabel('Last Name').fill('Lead');
        await page.getByLabel('Email').click();
        //
        const invitesinbox3 = await createNewEmail();
        await page.getByLabel('Email').fill(invitesinbox3!);
      
        await page.getByLabel('Seeking treatment for').click();
        await page.getByRole('option', { name: 'Cancer' }).click();
        await page.getByLabel('Note').click();
        await page.getByLabel('Note').fill('I am Very sick');
        await page.getByRole('button', { name: 'Create' }).nth(1).click();
        await page.waitForTimeout(2000);
        // Filter add
        await page.getByRole('button', { name: 'Today' }).click();
        await page.waitForTimeout(2000);
        await page.getByRole('button', { name: 'All Time' }).click();
        await page.waitForTimeout(2000);
        // Serach Lead
        await page.getByPlaceholder('Search by name').click();
        await page.getByPlaceholder('Search by name').fill('New Lead');
        await page.getByPlaceholder('Search by name').press('Enter');
        await page.waitForTimeout(2000);
        await page.locator('.MuiInputAdornment-root > .MuiButtonBase-root').click();
        await page.getByPlaceholder('Search by name').click();
        await page.getByPlaceholder('Search by name').press('Enter');
        await page.waitForTimeout(2000);
        // Lead File
        await page.getByRole('cell', { name: 'New Lead' }).click();
        await page.getByRole('tab', { name: 'Basic Information' }).click();
        await page.getByLabel('Sex').click();
        await page.getByRole('option', { name: 'Male', exact: true }).click();
        await page.getByLabel('Member ID').click();
        await page.getByLabel('Member ID').fill('GAH23');
        await page.getByLabel('Name on Card').click();
        await page.getByLabel('Name on Card').fill('Rajesh');
        await page.getByLabel('Payer ID').click();
        await page.getByLabel('Payer ID').fill('BDJSB546');
        await page.getByLabel('Insurance Company').click();
        await page.getByRole('combobox', { name: 'Insurance Company' }).fill('abso');
        await page.getByText('ABSOLUTE TOTAL CARE-').click();
        await page.getByRole('button', { name: 'Save' }).nth(1).click();
        await page.locator('span').filter({ hasText: 'Current Status :Inquiry' }).locator('div').nth(2).click();
        await page.getByRole('option', { name: 'Initial consultation call' }).click();
        await page.waitForTimeout(1000);
        await page.locator('div').filter({ hasText: /^Assign to$/ }).nth(1).click();
        await page.getByLabel('Choose team member').click();
        await page.getByRole('option', { name: 'Owner Team' }).click();
        await page.getByPlaceholder('Optional note for team member').click();
        await page.getByPlaceholder('Optional note for team member').fill('Owner Assigned to u check this');
        await page.getByRole('button', { name: 'Assign' }).nth(1).click();
        await page.waitForTimeout(1000);
        await page.getByLabel('Send inquiry form').click();
        await page.getByRole('button', { name: 'Send' }).nth(1).click();
        await page.waitForTimeout(1000);
        await page.getByLabel('Send therapist scheduling link').click();
        await page.getByLabel('Select Therapist').click();
        await page.getByRole('option', { name: 'Owner Team' }).click();
        await page.getByRole('button', { name: 'Send' }).nth(1).click();
        await page.locator('div').filter({ hasText: /^Filters \(01\)$/ }).getByRole('button').nth(2).click();
        await page.waitForTimeout(1000);
      });
      test('DP Update and Logout', async () => {
        // await page.locator('#root > div._header_1uy0f_1 > div > div > p').click();
        await page.locator('div').filter({ hasText: 'IntakeAdmin' }).nth(3).click();
        await page.getByRole('menuitem', { name: 'Profile' }).click();
        await page
          .locator(
            '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]'
          )
          .setInputFiles(path.join(__dirname + '../files/ther_img.jpg'));
        await page.getByRole('button', { name: 'Done' }).nth(1).click();
        await page.getByRole('button', { name: 'Save' }).nth(1).click();
        // await page
        //   .locator('#root > div._header_1uy0f_1 > div > div > p')
        //   .click();
        await page.locator('div').filter({ hasText: 'IntakeAdmin' }).nth(3).click();
        await page.getByRole('menuitem', { name: 'Logout' }).click();
      });