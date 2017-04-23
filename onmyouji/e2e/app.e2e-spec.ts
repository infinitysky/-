import { OnmyoujiPage } from './app.po';

describe('onmyouji App', () => {
  let page: OnmyoujiPage;

  beforeEach(() => {
    page = new OnmyoujiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
