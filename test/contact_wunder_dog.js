import { Selector } from 'testcafe'

fixture `wunder.dog contact page`
  .page `http://wunder.dog/contact-us/`

test('Contains email input', async page => {
  const emailInputExists = await Selector('input[name=email]').exists
  await page.expect(emailInputExists).ok()
})
