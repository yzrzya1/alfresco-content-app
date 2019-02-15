import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { LinkListTemplateDirective } from './link/link-list-template.directive';
import { IconListTemplateDirective } from './icon-link/icon-list-template.directive';

@Component({
  selector: 'app-sidenav',
  template: `
    <div class="sidenav">
      <ng-container [ngSwitch]="mode">
        <ng-container *ngSwitchCase="'maximized'">
          <div
            *ngFor="let group of groups; trackBy: trackById"
            class="sidenav-section"
          >
            <div class="section__list">
              <div
                *ngFor="let item of group.items; trackBy: trackById"
                class="list_item"
              >
                <ng-container
                  *ngTemplateOutlet="
                    linkListTemplate;
                    context: { $implicit: item }
                  "
                ></ng-container>
              </div>
            </div>
          </div>
        </ng-container>

        <ng-container *ngSwitchCase="'minimized'">
          <div
            *ngFor="let group of groups; trackBy: trackById"
            class="sidenav-section"
          >
            <div class="section__list">
              <div
                *ngFor="let item of group.items; trackBy: trackById"
                class="list_item"
              >
                <ng-template
                  [ngTemplateOutlet]="iconListTemplate"
                  [ngTemplateOutletContext]="{ $implicit: item }"
                ></ng-template>
              </div>
            </div>
          </div>
        </ng-container>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .section__list {
        background: red;
        margin-top: 5px;
      }
    `
  ]
})
export class SidenavComponent {
  @Input() mode: 'minimized' | 'maximized' = 'maximized';

  // Read in our structural directives as TemplateRefs
  @ContentChild(LinkListTemplateDirective, { read: TemplateRef })
  linkListTemplate;
  @ContentChild(IconListTemplateDirective, { read: TemplateRef })
  iconListTemplate;

  groups = [
    {
      id: 'primary',
      items: [
        {
          description: 'Link 1',
          icon: 'extension',
          id: 'app.navbar.testLink',
          order: 1,
          route: '/1',
          title: 'Link 1'
        },
        {
          description: 'Link 2',
          id: 'app.navbar.testLink',
          order: 1,
          title: 'Link 2',
          children: [
            {
              id: 'app.navbar.libraries.files',
              order: 100,
              route: '/2',
              title: 'Child 1'
            },
            {
              id: 'app.navbar.libraries.files',
              order: 100,
              route: '/3',
              title: 'Child 2'
            }
          ]
        }
      ]
    },
    {
      id: 'secondary',
      items: [
        {
          description: 'Link 3',
          icon: 'extension',
          id: 'app.navbar.testLink',
          order: 1,
          route: '/4',
          title: 'Link 3'
        },
        {
          description: 'Link 4',
          icon: 'extension',
          id: 'app.navbar.testLink',
          order: 2,
          title: 'Link 4',
          children: [
            {
              description: 'Link 1',
              icon: 'extension',
              id: 'app.navbar.testLink',
              order: 1,
              route: '/5',
              title: 'Link 1'
            }
          ]
        }
      ]
    }
  ];

  trackById(index: number, obj: { id: string }) {
    return obj.id;
  }
}
