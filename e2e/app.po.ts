import { browser, element, by } from 'protractor';

export class WhereToNomPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nom-root h1')).getText();
  }
}
