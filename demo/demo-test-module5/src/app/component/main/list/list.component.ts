import {Component, OnInit, ViewChild} from '@angular/core';
import {ConsignmentService} from "../../../services/consignment.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {consignment} from "../../../models/consignment";
import {formatDate} from "@angular/common";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public dataSource!: MatTableDataSource<consignment>;
  public consignments!: Array<consignment>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['no','consignmentId', 'product', 'quantity', 'tax', 'importDate', 'exportDate', 'action'];
  private filteredConsignments: consignment[];
  filterValue: string = '';


  constructor(private consignmentService: ConsignmentService) {

  }

  ngOnInit(): void {
    this.getAllConsignment();
  }

  getAllConsignment() {
    this.consignmentService.getAllConsignment().subscribe(value => {
      this.consignments = value;
      this.filteredConsignments = value;
      this.dataSource = new MatTableDataSource(this.filteredConsignments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }*/

  applyCustomFilter() {
    this.consignmentService.findByProductName(this.filterValue).subscribe(value => {
      this.consignments = value;
      this.dataSource = new MatTableDataSource(this.consignments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.applyCustomFilter();
  }

  /*applyExportDateFilter() {
    const formattedDate = formatDate(this.filterValue, 'yyyy-MM-dd', 'en-US');
    this.consignmentService.findByExportDate(formattedDate).subscribe((value: consignment[]) => {
      this.consignments = value;
      this.dataSource = new MatTableDataSource(this.consignments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }*/


}
