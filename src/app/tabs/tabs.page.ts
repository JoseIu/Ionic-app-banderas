import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  public pages = [
    { tab: 'by-country', name: 'Por País', icon: 'flag-outline' },

    { tab: 'by-capital', name: 'Por Capital', icon: 'location-outline' },
    { tab: 'by-region', name: 'Por Región', icon: 'globe-outline' },
  ];
  constructor() {}
}
