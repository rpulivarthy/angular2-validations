import { FormvalidationPage } from './app.po';

describe('formvalidation App', function() {
  let page: FormvalidationPage;

  beforeEach(() => {
    page = new FormvalidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
