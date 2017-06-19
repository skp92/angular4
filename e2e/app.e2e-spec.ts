import { DateSelectorPage } from './app.po';

describe('date-selector App', () => {
  let page: DateSelectorPage;

  beforeEach(() => {
    page = new DateSelectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
