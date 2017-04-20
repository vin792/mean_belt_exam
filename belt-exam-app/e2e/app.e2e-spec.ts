import { BeltExamAppPage } from './app.po';

describe('belt-exam-app App', () => {
  let page: BeltExamAppPage;

  beforeEach(() => {
    page = new BeltExamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
