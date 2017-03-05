import { VodPage } from './app.po';

describe('vod App', () => {
  let page: VodPage;

  beforeEach(() => {
    page = new VodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
