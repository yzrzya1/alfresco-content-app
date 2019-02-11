import { NgModule } from '@angular/core';
import { NodeListComponent } from './node-list.component';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [NodeListComponent],
  exports: [NodeListComponent]
})
export class NodeListModule {}
