import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21wbZp6F0qIaDDQiVIyKDdH4Bo5GYJxTvK9Etm92S5p7CEJychCWbjA02-2Fx-2Fft8ZlAohAL01MUz3idGiRcSayRV-2BYhMNdnW8Tpxvsukdm02n1i6Ck9HaN1wqbVc7eu3s2oiovTl20U8vpw-2F-2FmlL8sz3CpXdMLEyhM4sBGkA8oqg-2FOAJgNL2ThYDWi9QjXa0ecpmCQxZIQbntr8AZ7WIu13F4TKt5ynBwMb4MnmW4I44-2B-2FSIpTIGkCfou-2Bj45Pl2NChc-3D4RPN_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSsCU5RXrRK8ZccUIcCZmJ4zPB5g92FK6tq7eCtM0ZkDsawL1A-2FLjcuSK-2Fdbx1V8OXfnu2PJqspvggBxtWQsQkV-2BFUVPVeCZvfQALhX-2FtS8WnK-2F0yLdnrdzJjtaSU-2B8lSuGuKKgDGiR60KYgrmXNS3UgbX5I-2FAsAg-2B-2FaOYbCvYSAo-3D');
  
  // All Forms create Forms
  await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  
  // // Questionaries Form Code
  await page.getByText('Questionnaire').click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Forms');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Gender?');
  await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Single choice', exact: true }).click();
  await page.getByRole('option', { name: 'Short answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Name of Client?');
  await page.getByLabel('Mandatory').check();
  await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Long answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('NAme of Client and Tell Your Health Conditions?');
  await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Date' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Client Date Of Birth?');
  await page.getByLabel('Mandatory').uncheck();
  await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'E-signature' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Please Sign Your Sing?');
  await page.getByLabel('Mandatory').check();
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  // // Consent Form
  await page.getByText('Consent form', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Consent Automation');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.locator('pre').getByRole('paragraph').click();
  await page.locator('pre div').first().fill('Here I am Writing Praragraph?');
  // Add Pdf code
  await page.locator('#root > div > div > div._formContainer_1srfm_1 > div > div._editor_1srfm_16 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/testpdf.pdf");
  await page.getByLabel('Add Provider signature').check();
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
  // // Progress Note
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  await page.getByText('Progress note', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Testing');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('what is Your Gender?');
  await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Single choice', exact: true }).click();
  await page.getByRole('option', { name: 'Short answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Name of Client?');
  await page.getByLabel('Mandatory').check();
  await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Long answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Name of Client and Tell your Self?');
  await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Date' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Client date of Brithday?');
  await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Multiple choice' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Client Symptoms?');
  await page.getByRole('button', { name: '5 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Multiple choice', exact: true }).click();
  await page.getByRole('option', { name: 'CPT code' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Client CPT code?');
  await page.getByRole('button', { name: '6 Please enter a question CPT' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Diagnosis code' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Client Diagnosis Code?');
  await page.getByRole('button', { name: '7 Please enter a question' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'E-signature' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Please Sign here?');
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page.waitForTimeout(1000);
  await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div._formsList_faptv_1 > div._header_faptv_4 > div > div > svg > path').click();
  // await page.getByTestId('ArrowBackRoundedIcon').click();
  // // Treatment plan
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  await page.getByText('Treatment plan', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Treatement Plan');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is your Gender?');
  await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Single choice', exact: true }).click();
  await page.getByRole('option', { name: 'Short answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is your name?');
  await page.getByLabel('Mandatory').check();
  await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Long answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is your Health Conditions?');
  await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Date' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is your Date of Birthday?');
  await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Multiple choice' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is your Health Conditions?');
  await page.getByLabel('Mandatory').uncheck();
  await page.getByRole('button', { name: '5 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Multiple choice', exact: true }).click();
  await page.getByRole('option', { name: 'CPT code' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is your CPT code?');
  await page.getByLabel('Mandatory').check();
  await page.getByRole('button', { name: '6 Please enter a question CPT' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Diagnosis code' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is your Diagnosis code?');
  await page.getByRole('button', { name: '7 Please enter a question' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'E-signature' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is your Sign?');
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
  // // Assessment form Code
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  await page.getByText('Assesment').click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Assesment Form');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is Your Gender?');
  await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Single choice', exact: true }).click();
  await page.getByRole('option', { name: 'Short answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is Your Name?');
  await page.getByLabel('Mandatory').check();
  await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Long answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is Your Health Conditions?');
  await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Multiple choice' }).click();
  await page.getByLabel('Mandatory').uncheck();
  await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Multiple choice', exact: true }).click();
  await page.getByRole('option', { name: 'Date' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is Your Health Cerificate Date?');
  await page.getByLabel('Mandatory').check();
  await page.getByRole('button', { name: '5 Please enter a question' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'CPT code' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is Your CPT code?');
  await page.getByRole('button', { name: '6 Please enter a question CPT' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Diagnosis code' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is Your Diagosis code?');
  await page.getByRole('button', { name: '7 Please enter a question' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'E-signature' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('What is Your Sign Here?');
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();

});