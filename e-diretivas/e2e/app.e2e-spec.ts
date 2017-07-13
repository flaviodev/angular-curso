import { EDiretivasPage } from './app.po';

describe('e-diretivas App', () => {
  let page: EDiretivasPage;

  beforeEach(() => {
    page = new EDiretivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
