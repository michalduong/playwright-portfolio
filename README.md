# Playwright Portfolio

End-to-end tests written with Playwright and TypeScript against the public website of [Booksy](https://booksy.com/en-pl/), a booking marketplace. I built this repo to practice a deliberate locator strategy and to show how I approach test design.

> Independent practice project, not affiliated with Booksy. Tests only use public pages, with no login and no personal data.

## What's tested

| # | Behavior | What the test checks | Status |
|---|----------|----------------------|--------|
| 1 | Search for a specific barbershop by name | Typing the venue name in the search bar returns a matching result, and opening it shows the venue's page | ⬜ |
| 2 | Start a booking (stops before confirmation) | A service and a time slot can be selected, and the flow reaches the confirm or login step. Nothing is submitted | ⬜ |
| 3 | Browse the Massage category | Opening the Massage tab shows a list of massage venues | ⬜ |
| 4 | Filter massage results by Promotions | Applying the Promotions filter changes the list and shows the filter as active | ⬜ |
| 5 | Change the site language | Switching language updates the page text and the URL locale | ⬜ |
| 6 | Search with no matches (error state) | Searching for nonsense text (e.g. `ahduahf`) shows a "no results" message and no result cards | ⬜ |


## Approach

- **Locators:** I prefer `getByRole`, then `getByLabel`, and use `getByTestId` or CSS only when nothing better exists. Each test has a comment explaining why I chose that locator.
- **Assertions:** web-first `expect()` assertions that retry automatically, with no fixed waits.
- **Stack:** Playwright Test, TypeScript, Chromium.

## Running the tests

```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Roadmap

- [ ] Page Object Model and a custom fixture
- [ ] Trace Viewer screenshot and cross-browser config
- [ ] Network mocking example with `route()`
- [ ] GitHub Actions CI