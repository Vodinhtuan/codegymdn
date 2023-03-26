import { Component, OnInit } from '@angular/core';
import {ContractService} from "../../../service/contract/contract.service";
import {Employee} from "../../../model/employee/employee";
import {EmployeeService} from "../../../service/employee/employee.service";
import {Contract} from "../../../model/contract/contract";
@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[]= [];

  constructor(private contractService: ContractService) {
    this.contractService.getAll().subscribe(next => {
      console.log(next);
      this.contracts = next;
    }, error => {
      console.log("Lỗi!")
    })
  }

  ngOnInit(): void {
  }

  checkDelete(id: number) {

  }

}
