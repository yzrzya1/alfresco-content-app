import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'aca-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'aca-node-list' }
})
export class NodeListComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input()
  data: any[] = [];

  columns = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (row: any) => `${row.id}`
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (row: any) => `${row.name}`
    }
  ];

  displayedColumns = this.columns.map(x => x.columnDef);

  dataSource: MatTableDataSource<any>;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
