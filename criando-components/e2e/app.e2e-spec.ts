import { CriandoComponentsPage } from './app.po';

describe('criando-components App', () => {
  let page: CriandoComponentsPage;

  beforeEach(() => {
    page = new CriandoComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
