import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-item',
  template: `
    <button [id]="item.id" mat-icon-button>
      <adf-icon [value]="item.icon"></adf-icon>
    </button>

    <span> {{ item.title | translate }}</span>
  `,
  host: { class: 'menu__item' }
})
export class LinkItemComponent implements OnInit {
  @Input() item;

  ngOnInit() {
    console.log(this.item);
  }
}
