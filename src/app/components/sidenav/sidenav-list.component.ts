import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
@Component({
  selector: 'app-sidenav-list',
  template: `
    <ng-container *ngIf="!list.children">
      <ng-template
        [ngTemplateOutlet]="template"
        [ngTemplateOutletContext]="{ $implicit: list }"
      ></ng-template>
    </ng-container>

    <ng-container *ngIf="list.children && list.children.length">
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            <ng-template
              [ngTemplateOutlet]="template"
              [ngTemplateOutletContext]="{ $implicit: list }"
            ></ng-template>
          </mat-panel-title>
        </mat-expansion-panel-header>

        <div *ngFor="let child of list.children; trackBy: trackById">
          <ng-template
            [ngTemplateOutlet]="template"
            [ngTemplateOutletContext]="{ $implicit: child }"
          ></ng-template>
        </div>
      </mat-expansion-panel>
    </ng-container>
  `
})
export class SidenavListComponent {
  @Input() list;

  @ContentChild(TemplateRef) template: any;

  trackById(index: number, obj: { id: string }) {
    return obj.id;
  }
}
