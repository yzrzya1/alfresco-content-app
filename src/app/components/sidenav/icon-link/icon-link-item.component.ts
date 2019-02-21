import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-link-item',
  template: `
    <mat-icon>
      {{ item.icon }}
    </mat-icon>
  `
})
export class IconLinkItemComponent {
  @Input() item;
}
