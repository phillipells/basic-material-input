import { SandboxAppPage } from './app.po';

describe('sandbox-app App', () => {
  let page: SandboxAppPage;

  beforeEach(() => {
    page = new SandboxAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
