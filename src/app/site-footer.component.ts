import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  template: `
    <footer>
      <div>
        <strong>ConferenceHub</strong>
        <span>La communauté des passionnés de technologie.</span>
      </div>
      <span>© 2026 ConferenceHub</span>
    </footer>
  `,
  styleUrl: './site-footer.component.css',
})
export class SiteFooterComponent {}
