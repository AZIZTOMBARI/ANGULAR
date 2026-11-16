import { Component } from '@angular/core';

@Component({
  selector: 'app-site-header',
  template: `
    <header class="site-header">
      <div class="header-content">
        <a class="brand" href="/" aria-label="Accueil ConferenceHub">
          <span class="brand-mark">C</span>
          <span>ConferenceHub</span>
        </a>
        <nav aria-label="Navigation principale">
          <a class="active" href="#conferences">Conférences</a>
          <a href="#amis">Mes amis</a>
          <a href="#notifications">Notifications <span class="notification-count">3</span></a>
        </nav>
        <div class="profile" id="profil">
          <span class="avatar" aria-hidden="true">AT</span>
          <span>Aziz Tombari</span>
        </div>
      </div>
    </header>
  `,
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {}
