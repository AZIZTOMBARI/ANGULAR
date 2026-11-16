import { Component } from '@angular/core';
import { ConferenceListComponent } from './conference-list.component';
import { SiteFooterComponent } from './site-footer.component';
import { SiteHeaderComponent } from './site-header.component';

@Component({
  selector: 'app-root',
  imports: [ConferenceListComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
