import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
@Component({
  selector: 'app-item',
  template: `
    <ng-container *ngIf="!item.children">
      <div class="item">
        <ng-template
          [ngTemplateOutlet]="template"
          [ngTemplateOutletContext]="{ $implicit: item }"
        ></ng-template>
      </div>
    </ng-container>

    <ng-container *ngIf="item.children && item.children.length">
      <mat-expansion-panel [@.disabled]="true">
        <mat-expansion-panel-header
          expandedHeight="48px"
          collapsedHeight="48px"
        >
          <mat-panel-title>
            <div class="item">
              <ng-template
                [ngTemplateOutlet]="template"
                [ngTemplateOutletContext]="{ $implicit: item }"
              ></ng-template>
            </div>
          </mat-panel-title>
        </mat-expansion-panel-header>

        <div
          *ngFor="let child of item.children; trackBy: trackById"
          class="item"
        >
          <ng-template
            [ngTemplateOutlet]="template"
            [ngTemplateOutletContext]="{ $implicit: child }"
          ></ng-template>
        </div>
      </mat-expansion-panel>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./item.component.scss'],
  host: { class: 'app-item' }
})
export class ItemComponent {
  @Input() item;

  @ContentChild(TemplateRef) template: any;

  trackById(index: number, obj: { id: string }) {
    return obj.id;
  }
}
