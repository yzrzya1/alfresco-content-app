import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionService } from '@alfresco/adf-extensions';
import { Plugin1Component } from './plugin1.component';
import { SharedModule } from 'shared';
import { SecondComponent } from './second.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [Plugin1Component, SecondComponent],
  entryComponents: [Plugin1Component, SecondComponent]
})
export class Plugin1Module {
  static entry = Plugin1Component;
  static component2 = SecondComponent;

  constructor(extensions: ExtensionService) {
    extensions.setComponents({
      'plugin1.main': Plugin1Component
    });

    console.log(extensions);
  }
}
