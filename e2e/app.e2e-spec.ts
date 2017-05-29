import { TwitchSearchPage } from './app.po';

describe('twitch-search App', function() {
  let page: TwitchSearchPage;

  beforeEach(() => {
    page = new TwitchSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
