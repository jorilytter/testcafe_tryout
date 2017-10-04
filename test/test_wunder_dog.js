import { Selector } from 'testcafe'

fixture `wunder.dog landing page`
    .page `http://wunder.dog`

test('Correct URL', async page => {
  const location = await page.eval(() => window.location)
  await page.expect(location.pathname).eql('/')
})

test('Title is correct', async page => {
  const title = await Selector('head > title')
  await page.expect(title.innerText).eql('Wunderdog | We Do Wunders')
})

test('Contains link to page What we do', async page => {
  const linkExists = await Selector('a').withText('What we do').exists
  await page.expect(linkExists).ok()
})
