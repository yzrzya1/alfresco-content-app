import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-item',
  template: `
    [link] {{ item.title }}
  `
})
export class LinkItemComponent implements OnInit {
  @Input() item;

  ngOnInit() {
    console.log(this.item);
  }
}
