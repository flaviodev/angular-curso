import { EstilosPage } from './app.po';

describe('estilos App', () => {
  let page: EstilosPage;

  beforeEach(() => {
    page = new EstilosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
