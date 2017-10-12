import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppTitle() {
    return element(by.css('[data-e2e]="app-title"')).getText();
  }
}
