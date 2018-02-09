import { Selector, Role } from 'testcafe'

const file = `file:///home/jori/workspace/testcafe_tryout/src/index.html`

const user = Role(file, async page => {
  const input = Selector('input[name="name"]')
  const button = Selector('button')

  await page
    .expect(input.exists).ok()
    .typeText(input, 'Test')
    .click(button)
}, {preserveUrl: true})

fixture `Testing localStorage and Role`
  .page(file)
  .beforeEach(async page => page.useRole(user))

test('localStorage should have something', async page => {

  const name = Selector('#the-name')

  await page
    .expect(name.exists).ok()
})

test('localStorage should have something 2', async page => {

  const name = Selector('#the-name')

  await page
    .expect(name.exists).ok()
})

test('localStorage should have something 3', async page => {

  const name = Selector('#the-name')

  await page
    .expect(name.exists).ok()
})

test('localStorage should have something 4', async page => {

  const name = Selector('#the-name')

  await page
    .expect(name.exists).ok()
})

test('localStorage should have something 5', async page => {

  const name = Selector('#the-name')

  await page
    .expect(name.exists).ok()
})

test('localStorage should have something', async page => {

  const name = Selector('#the-name')

  await page
    .expect(name.exists).ok()
})

test('localStorage should have something 2', async page => {

  const name = Selector('#the-name')

  await page
    .expect(name.exists).ok()
})

test('localStorage should have something 3', async page => {

  const name = Selector('#the-name')

  await page
    .expect(name.exists).ok()
})

test('localStorage should have something 4', async page => {

  const name = Selector('#the-name')

  await page
    .expect(name.exists).ok()
})

test('localStorage should have something 5', async page => {

  const name = Selector('#the-name')

  await page
    .expect(name.exists).ok()
})
