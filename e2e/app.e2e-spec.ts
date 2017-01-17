import { WhereToNomPage } from './app.po';

describe('where-to-nom App', function() {
  let page: WhereToNomPage;

  beforeEach(() => {
    page = new WhereToNomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nom works!');
  });
});
