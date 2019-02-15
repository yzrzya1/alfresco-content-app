import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-link-item',
  template: `
    [icon] {{ item.title }}
  `
})
export class IconLinkItemComponent {
  @Input() item;
}
