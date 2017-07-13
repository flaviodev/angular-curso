import { APrimeiroProjetoPage } from './app.po';

describe('a-primeiro-projeto App', () => {
  let page: APrimeiroProjetoPage;

  beforeEach(() => {
    page = new APrimeiroProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
