// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzLRheMXX-2Bch1vIzGFWTjxQV-2BhV-2BgkpJr7yDBVhF3gzaTOhlL56Y6yIuNEleYYJBkOayxGyy-2FQ8U3NVyUi16pWLBGehTbVllhGz9G6LbYl1XWXK0xwjf2JAM1TPFLLnvnNShL0sEIn098-2BenAEZ1fkcE-2FK1N7ZdrNM3-2B0lo-2F1LyPDIdaSHh8SlBv9e-2FhiIDljt9xx62rI-2Fo1QWnz-2BunBvsAaM3qpurosH787Qg-2BqemGgpYi49Re0Vp1UbS75RuXZolo-3DqE2O_Gar1XziZ-2FC-2BZCWonDWJYk-2BSsWiCx-2FrMYpNPHDopm-2Ft86XWlhd51n0iFAHcrvCkeIrp96NfwB75rMM8ZJ0Czpdjzj62t0oFb9Wjx2Ljf57QUd33uioGdIOTt66b59OfQZNiI5VUNqVC5LkUNObSrivQomEHXLMUwzczEZXqZoKSGAgpTZ6muOJQH5eYg2vUryz6-2BmswNYfZTdW3BYj2XvfgSqXBzK9FpWkB6EVuxIvJcWdNU9CVqqfeB3z3xpgwJzFkWyC6bl80TPhIRmfXYiQbNMt-2BE-2F9DNfPdX7S0HlK5JnYgG6pk5mElYL-2BYFQc65hpcKkbK7DhCSuUVsnn32dcYzBFEJv96aMK5PaeNoCo6i6rbGWVQsgm7NTvRO906RO');
//   await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
//   await page.getByText('Automation Test').click();
//   await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
//   await page.getByRole('tab', { name: 'Insurance Eligibility' }).click();
//   await page.waitForTimeout(6000);
//   await page.getByRole('button', { name: 'Verify Benefits' }).nth(1).click();
//   await page.getByRole('button', { name: 'View Log' }).nth(1).click();
//   await page.locator('._header_q5khp_1 > .MuiButtonBase-root').click();
//   await page.getByRole('button', { name: 'Share' }).nth(1).click();
//   await page.getByLabel('Select Team Member').click();
//   await page.getByRole('combobox', { name: 'Select Team Member' }).fill('Ther');
//   await page.getByRole('option', { name: 'icon Therapist 1' }).click();
//   await page.getByPlaceholder('Type message here').click();
//   await page.getByPlaceholder('Type message here').fill('Hey Testing name');
//   await page.getByRole('button', { name: 'Share' }).nth(1).click();
//   await page.waitForTimeout(2000);
//   await page.getByRole('button', { name: 'Share' }).nth(1).click();
//   await page.getByLabel('Client').check();
//   await page.getByPlaceholder('Type message here').click();
//   await page.getByPlaceholder('Type message here').fill('Hey Name Send it ');
//   await page.getByRole('button', { name: 'Share' }).nth(1).click();


//   // Task Board Features
  
// });
// import { test, expect } from '@playwright/test';

import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import {
  BASE_FRONTEND_URL,
  isRunningOnLocal,
  localBaseUrl,
} from '../localemails.js/const';
import { readEmails, setEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Owner login and  onboarding ', async ({ request }) => {
  const inbox = await createNewEmail();

  const data = await generatePasswordlessLoginLink({
    email: inbox!,
    request: request,
  });
  await page.goto(data!);

  // Onboarding Flows for Owner

  // DP
  await page
    .locator(
      '#root > div._layout_cqogi_1 > div > div._onboardProfile_pki44_1 > div > div._leftSection_pki44_71 > div > div._cardContent_pki44_98 > div._profileContainer_pki44_116 > div._imagePicker_pki44_35 > input[type=file]'
    )
    .setInputFiles(path.join(__dirname + '../files/ther_img.jpg'));
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  // Onboarding Flows
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Owner ');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('Team');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByPlaceholder('Enter your practice name').click();
  await page.getByPlaceholder('Enter your practice name').fill('KanTime Healthcare System ');
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New York City');
  await page.getByPlaceholder('Street address').click();
  await page.getByPlaceholder('Street address').fill('New Area City ');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('cali');
  await page.getByText('California').click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Azu');
  await page.getByText('Azusa').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('561202');
  await page.getByPlaceholder('Enter your practice name').click();
  await page.getByPlaceholder('Enter your practice name').fill('KanTime Healthcare System ');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  
  
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('KanTime Healthcare System ');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New area City');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('New york');
  await page.getByText('New York').click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Fre');
  await page.getByText('Freeport').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('56192');
  await page.getByLabel('Make default location').check();
  await page.getByRole('button', { name: 'Add location' }).nth(1).click();

  await page.getByRole('button', { name: 'Next' }).nth(1).click();

  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('CPT Code').click();
  await page.getByRole('combobox', { name: 'CPT Code' }).fill('90832');
  await page.getByRole('option', { name: '90832, Psychotherapy, 30' }).click();
  await page.getByLabel('Fee *').click();
  await page.getByLabel('Fee *').fill('100');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('10');
  await page.getByLabel('Make default service').check();
  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
 
  await page.getByLabel('').check();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('').check();
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();

// // Add Task 
// await page.locator('div').filter({ hasText: /^Tasks$/ }).getByRole('img').click();
// await page.getByRole('heading', { name: 'List View' }).click();
// await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
// await page.getByPlaceholder('Task Name').click();
// await page.getByPlaceholder('Task Name').fill('Automation  Task Owner');
// await page.locator('div').filter({ hasText: /^Task Description$/ }).click();
// await page.getByPlaceholder('Add Description').fill('Testing Taskboard with Owner role');
// await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
// await page.getByPlaceholder('Add subtask').click();
// await page.getByPlaceholder('Add subtask').fill('Owner Subtask 1');
// await page.getByRole('button', { name: 'user icon Assign to' }).click();
// await page.locator('span').filter({ hasText: 'Owner Team' }).getByRole('paragraph').click();
// await page.getByRole('banner').getByTestId('priority_flag_image').click();
// await page.getByRole('menuitem', { name: 'Urgent' }).click();
// await page.getByRole('button', { name: 'Task priority flag' }).click();
// await page.getByRole('menuitem', { name: 'Urgent' }).click();
// await page.getByRole('button', { name: 'Open' }).click();
// await page.getByText('InProgress').click();
// try {
//   await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
// } catch (error) {
//   console.log('Failed to find first locator, trying second locator');
//   await page.locator('body > div.MuiDialog-root.MuiModal-root.css-19er4w > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div > div > footer > button:nth-child(2) > button > span > span._label_ns5gx_15').click();
// }
// await page.waitForTimeout(5000);

  
//   await page.getByText('Automation Task Owner').click();
//   // await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
//   await page.getByPlaceholder('Add comment').click();
//   await page.getByPlaceholder('Add comment').fill('Hi Man How are U');
//   await page.getByRole('button', { name: 'Send' }).nth(1).click();
//   await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
//   await page.waitForTimeout(2000);
  
//   await page.getByRole('button', { name: 'My Task' }).nth(1).click();
//   await page.getByRole('button', { name: 'All Tasks' }).nth(1).click();
//   await page.getByRole('button', { name: 'Group by' }).nth(1).click();
//   await page.getByText('Status').click();
//   await page.getByRole('button', { name: 'Group by: status' }).nth(1).click();
//   await page.locator('p').filter({ hasText: 'Assigned To' }).click();
//   await page.getByRole('button', { name: 'Group by: Assigned to' }).nth(1).click();
//   await page.locator('p').filter({ hasText: 'Due Date' }).click();
//   await page.getByRole('button', { name: 'Group by: Due Date' }).nth(1).click();
//   await page.locator('p').filter({ hasText: 'Priority' }).click();
//   await page.getByRole('heading', { name: 'Calendar View' }).click();
//   await page.getByRole('button', { name: 'Month' }).nth(1).click();
//   await page.getByText('Automation Task Owner').click();
//   await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();

//   await page.getByRole('heading', { name: 'Board View' }).click();
//   await page.getByText('Automation Task Owner').click();
//   await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();

//   await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
//   await page.getByPlaceholder('Task Name').click();
//   await page.getByPlaceholder('Task Name').fill('Board View Task');
//   await page.getByPlaceholder('Add Description').click();
//   await page.getByPlaceholder('Add Description').fill('Testing Board view task');
//   await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
 
//   await page.locator('._header_1k7mt_11 > button').first().click();
//   await page.getByRole('menuitem', { name: 'Set Priority' }).getByRole('img').click();
//   await page.getByRole('menuitem', { name: 'Urgent' }).getByRole('img').click();
//   await page.locator('._header_1k7mt_11 > button').first().click();
//   await page.getByRole('menuitem', { name: 'Add subtask' }).click();
//   await page.getByPlaceholder('Add subtask').clear();
//   await page.getByPlaceholder('Add subtask').fill('New Subtask');
//   await page.getByPlaceholder('Add subtask').press('Enter');
  
// await page.locator('div').filter({ hasText: /^Messages$/ }).getByRole('img').click();
//   await page.getByTestId('KeyboardArrowDownIcon').click();
//   await page.getByRole('menuitem', { name: 'Lead' }).click();
//   await page.getByText('James Lead').click();
//   await page.getByTestId('message-input').click();
//   await page.getByTestId('message-input').fill('Hi man');
//   await page.getByTestId('SendOutlinedIcon').click();

//   await page.getByTestId('message-input').click();
//   await page.getByLabel('Send Inquiry Form').click();
//   await page.waitForTimeout(2000);
//   await page.getByRole('button', { name: 'Send' }).nth(1).click();
//   await page.waitForTimeout(2000);
//   await page.getByLabel('Send Inquiry Form').click();
//   await page.getByLabel('SMS').check();
//   await page.waitForTimeout(2000);
//   await page.getByRole('button', { name: 'Send' }).nth(1).click();

//   await page.getByLabel('Send therapist scheduling link').click();
//   await page.getByLabel('Select Therapist').click();
//   try {
//     await page.getByText('Owner Team, ALC').click();
//   } catch (error) {
//     console.log('Failed to find first locator, trying second locator');
//     await page.getByRole('option', { name: 'Owner Team, ALC' }).click();
//   }
//   await page.getByRole('button', { name: 'Send' }).nth(1).click();
// // Ram Lead
//   await page.getByText('Ram Lead').click();
//   await page.getByTestId('message-input').click();
//   await page.getByTestId('message-input').fill('Hi man');
//   await page.getByTestId('SendOutlinedIcon').click();

//   await page.getByTestId('message-input').click();
//   await page.getByLabel('Send Inquiry Form').click();
//   await page.waitForTimeout(2000);
//   await page.getByRole('button', { name: 'Send' }).nth(1).click();
//   await page.waitForTimeout(2000);

//   await page.getByLabel('Send Inquiry Form').click();
//   await page.getByLabel('SMS').check();
//   await page.getByRole('button', { name: 'Send' }).nth(1).click();
//   await page.waitForTimeout(2000);

//   await page.getByLabel('Send therapist scheduling link').click();
//   await page.getByLabel('Select Therapist').click();
//   await page.waitForTimeout(2000);
//   try {
//     await page.getByText('Owner Team, ALC').click();
//   } catch (error) {
//     console.log('Failed to find first locator, trying second locator');
//     await page.getByRole('option', { name: 'Owner Team, ALC' }).click();
//   }
 
//   await page.getByRole('button', { name: 'Send' }).nth(1).click();
//   await page.getByRole('img', { name: 'logo' }).click();
//   await page.waitForTimeout(2000);

await page
    .locator('div')
    .filter({ hasText: /^Settings$/ })
    .getByRole('img')
    .click();
  //Clinican Settings Flows
  await page.getByText('Clinician settings').click();
  //   Scheduler Calender 
  await page.getByText('Calendar').click();
  try {
    await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();

  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383 > span.MuiSwitch-thumb.css-19gndve').click();
  }
  
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.getByLabel('Monday').check();
  await page.getByLabel('Tuesday').check();
  await page.getByLabel('Wednesday').check();
  await page.getByLabel('Thursday').check();
  await page.getByLabel('Friday').check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
  await page.getByLabel('Monday').check();
  await page
    .locator(
      '#root > div._layout_cqogi_1 > div._sideBar_14sej_1._tabSpecificSidebar_14sej_2 > div._scrollableWrapper_14sej_13 > div > div._sidebarHeader_14sej_135 > svg > path')
    .click();
await page
.locator(
  '#root > div._layout_cqogi_1 > div._sideBar_14sej_1 > div._createBtnContainer_14sej_75 > div > div > button > button > span > span._label_ns5gx_15 > span'
)
.click();
await page.getByRole('menuitem', { name: 'Create client' }).click();
await page.getByLabel('First Name*').click();
await page.getByLabel('First Name*').fill('Automation');
await page.getByLabel('Last Name*').click();
await page.getByLabel('Last Name*').fill('Test');
await page.getByLabel('Email*').click();
//
const invitesinbox2 = await createNewEmail();
await page.getByLabel('Email*').fill(invitesinbox2!);

await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.getByRole('button', { name: 'Create Client' }).nth(1).click();


// Dashboard Features for Owner roles
  await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'addIcon Create Appointment' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Automation (OT)').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByText('Owner Team').first().click();
  await page.locator('button').filter({ hasText: 'Add note' }).nth(1).click();
  await page.getByRole('button', { name: 'Add psychotherapy note' }).nth(1).click();
  await page.getByPlaceholder('Enter your response here').click();
  await page.getByPlaceholder('Enter your response here').fill('Test Data');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  await page.waitForTimeout(2000);
  await page.getByText('Owner Team').first().click();
  await page.locator('button').filter({ hasText: 'Edit' }).nth(1).click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New Date Updated');
  await page.getByRole('button', { name: 'Update Appointment' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByText('Owner Team').first().click();
  await page.locator('button').filter({ hasText: 'Cancel appointment' }).nth(1).click();
  await page.getByRole('button', { name: 'Yes' }).nth(1).click();
  await page.getByLabel('Clinician').click();
  await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('tab', { name: 'Clinician' }).click();
  await page.getByRole('tab', { name: 'Practice' }).click();
  
  
  // Therapist
  // await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  // await page.waitForTimeout(4000);
  // // await page.getByRole('button', { name: 'addIcon Create Appointment' }).nth(1).click();
  // // await page.getByLabel('Select client profile*').click();
  // // await page.getByText('Automation (OT)').click();
  // // await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  // await page.getByText('Therapist').click();
  // await page.locator('button').filter({ hasText: 'Cancel appointment' }).nth(1).click();
  // await page.getByRole('button', { name: 'Yes' }).nth(1).click();
  


  // // await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  // // await page.getByText('Therapist').click();
  // // await page.locator('._appointmentHeader_15uwk_6 > .MuiButtonBase-root').click();
  // // await page.getByText('09', { exact: true }).click();
  // // await page.getByRole('button', { name: 'addIcon Create Appointment' }).nth(1).click();
  // // await page.locator('div').filter({ hasText: /^Select client profile\*$/ }).click();
  // // await page.getByText('Rajesh (OT)').click();
  // // await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  // // await page.getByText('W', { exact: true }).click();
  // await page.getByText('Owner Team').click();
  // await page.locator('button').filter({ hasText: 'Add note' }).nth(1).click();
  // await page.getByRole('button', { name: 'Add psychotherapy note' }).nth(1).click();
  // await page.getByPlaceholder('Enter your response here').click();
  // await page.getByPlaceholder('Enter your response here').fill('Test Data');
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  // await page.getByText('Owner Team').click();
  // await page.locator('button').filter({ hasText: 'Edit' }).nth(1).click();
  // await page.getByRole('button', { name: 'Update Appointment' }).nth(1).click();
  // await page.getByText('Owner Team').click();
  // await page.locator('button').filter({ hasText: 'Edit' }).nth(1).click();
  // await page.getByPlaceholder('MM/DD/YYYY').click();
  // await page.getByPlaceholder('Enter text here').click();
  // await page.getByPlaceholder('Enter text here').fill('New Date Updated');
  // await page.getByRole('button', { name: 'Update Appointment' }).nth(1).click();
  // await page.getByText('Owner Team').click();
  // await page.locator('div').filter({ hasText: /^BILLINGPendinginvoice$/ }).locator('img').click();
  // await page.getByTestId('CancelIcon').click();
  // await page.getByText('invoice').click();
  // await page.locator('._appointmentHeader_15uwk_6 > .MuiButtonBase-root').click();



await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
await page.waitForTimeout(3000);
// await page.getByRole('button', { name: 'addIcon Create Appointment' }).nth(1).click();
// await page.getByLabel('Select client profile*').click();
// await page.getByText('Automation (OT)').click();
// await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
// await page.waitForTimeout(2000);
await page.getByText('Therapist').first().click();
await page.locator('button').filter({ hasText: 'Add note' }).nth(1).click();
await page.getByRole('button', { name: 'Add psychotherapy note' }).nth(1).click();
await page.getByPlaceholder('Enter your response here').click();
await page.getByPlaceholder('Enter your response here').fill('Test Data');
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
await page.waitForTimeout(2000);
await page.getByText('Therapist').first().click();
await page.locator('button').filter({ hasText: 'Edit' }).nth(1).click();
await page.getByPlaceholder('Enter text here').click();
await page.getByPlaceholder('Enter text here').fill('New Date Updated');
await page.getByRole('button', { name: 'Update Appointment' }).nth(1).click();
await page.waitForTimeout(2000);
await page.getByText('Therapist').first().click();
await page.locator('button').filter({ hasText: 'Cancel appointment' }).nth(1).click();
await page.getByRole('button', { name: 'Yes' }).nth(1).click();
// await page.getByLabel('Clinician').click();
// await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
// await page.locator('.MuiBackdrop-root').click();
// await page.getByRole('tab', { name: 'Clinician' }).click();
// await page.getByRole('tab', { name: 'Practice' }).click();

  await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  await page.getByLabel('Clinician').nth(1).click();
  await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Therapist' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Supervisor' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
   await page.reload();
  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'Created' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Submitted' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Sent' }).getByRole('checkbox').check();
  await page.reload();
  await page.getByLabel('Clinician').first().click();
  await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Owner Team' }).uncheck();
  await page.getByRole('option', { name: 'Therapist' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Therapist' }).uncheck();
  await page.getByRole('option', { name: 'Supervisor' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Supervisor' }).uncheck();
  await page.reload();
});