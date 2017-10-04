import { Selector } from 'testcafe'

const url = process.env.URL || `https://github.com/`

fixture `Github landing page`
    .page(url)

test('Correct URL path', async page => {
  const location = await page.eval(() => window.location)
  await page.expect(location.pathname).eql('/')
})

test('Search "play" projects', async page => {

  const searchExists = Selector('input[name=q]').exists
  const repoListExists = Selector('.repo-list').exists
  const playRepoExists = Selector('a[href="/play/play"]').exists

  await page
    .resizeWindow(1280,800)
    .expect(searchExists).ok()
    .typeText('input[name=q]', 'play')
    .pressKey('enter')
    .expect(repoListExists).ok()
    .expect(playRepoExists).ok()
})

test('Search "playz" projects', async page => {

  const searchExists = Selector('input[name=q]').exists
  const repoListExists = Selector('.repo-list').exists
  const playRepoExists = Selector('a[href="/play/play"]').exists

  await page
    .resizeWindow(1280,800)
    .expect(searchExists).ok()
    .typeText('input[name=q]', 'play')
    .pressKey('enter')
    .expect(repoListExists).ok()
    .expect(playRepoExists).ok()
})
