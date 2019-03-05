import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-item',
  template: `
    <mat-icon>
      {{ item.icon }}
    </mat-icon>
  `,
  host: { class: 'app-icon-item' }
})
export class IconItemComponent {
  @Input() item;
}
