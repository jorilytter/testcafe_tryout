import { Selector } from 'testcafe'
import { ClientFunction } from 'testcafe';

const getWindowLocation = ClientFunction(() => document.location.href);

const url = `https://robertnyman.com/html5/forms/input-types.html?color=%23000000&date=&datetime=&datetime-local=&email=&month=&number=&range=50&search=&tel=&time=&url=&week=`
// URL param number changes from empty -> 2
const expectedUrl = 'https://robertnyman.com/html5/forms/input-types.html?color=%23000000&date=&datetime=&datetime-local=&email=&month=&number=2&range=50&search=&tel=&time=&url=&week='
// URL param number changes to 3
const otherExpectedUrl = 'https://robertnyman.com/html5/forms/input-types.html?color=%23000000&date=&datetime=&datetime-local=&email=&month=&number=3&range=50&search=&tel=&time=&url=&week='

fixture `html5 - input type number`
    .page(url)

test('Search input for number type', async page => {

  const identifier = 'input[name=number]'
  const numberInputExists = Selector(identifier).exists

  await page
    .resizeWindow(1280,800)
    .expect(numberInputExists).ok()
    .typeText(identifier, '2')
    .pressKey('enter')
    .expect(getWindowLocation()).eql(expectedUrl)
})

test('Search input for number type with click', async page => {

  const identifier = 'input[name=number]'
  const numberInputExists = Selector(identifier).exists

  await page
    .resizeWindow(1280,800)
    .expect(numberInputExists).ok()
    .typeText(identifier, '3')
    .click('input[value=Send]')
    .expect(getWindowLocation()).eql(otherExpectedUrl)
})
