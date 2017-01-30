import { SistaBigBonePage } from './app.po';

describe('sista-big-bone App', function() {
  let page: SistaBigBonePage;

  beforeEach(() => {
    page = new SistaBigBonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
