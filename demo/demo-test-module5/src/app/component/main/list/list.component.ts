import {Component, OnInit, ViewChild} from '@angular/core';
import {ConsignmentService} from "../../../services/consignment.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {consignment} from "../../../models/consignment";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public dataSource!: MatTableDataSource<consignment>;
  public consignments!: Array<consignment>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['no', 'product', 'quantity', 'tax', 'importDate', 'exportDate', 'action'];
  constructor(private consignmentService: ConsignmentService) {

  }

  ngOnInit(): void {
    this.getAllCOnsignment();
  }

  getAllCOnsignment() {
    this.consignmentService.getAllConsignment().subscribe(value => {
      this.consignments = value;
      this.dataSource = new MatTableDataSource(this.consignments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
