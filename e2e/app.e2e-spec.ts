import { AppPage } from './app.po';

describe('News App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('News App');
  });
});
