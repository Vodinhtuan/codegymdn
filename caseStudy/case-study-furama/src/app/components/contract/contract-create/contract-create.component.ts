import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../../model/customer/customer";
import {Facility} from "../../../model/facility/facility";
import {ActivatedRoute, Router} from "@angular/router";
import {ContractService} from "../../../service/contract/contract.service";
import {CustomerService} from "../../../service/customer/customer.service";
import {FacilityService} from "../../../service/facility/facility.service";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  customers : Customer[] = [];
  facilitys : Facility[] = [] ;
  formGroup = new FormGroup(
    {
      id: new FormControl(),
      customer: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
      dateIn: new FormControl('', [Validators.required]),
      dateOut: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required])
    }
  )
  constructor(private formBuilder: FormBuilder,
              private route : Router,
              private activatedRoute : ActivatedRoute,
              private contractService : ContractService,
              private customerService : CustomerService,
              private facilityService : FacilityService) {
    this.customerService.getAll().subscribe(next => {
      console.log(next);
      this.customers = next;
    }, error => {
      console.log("List customer empty!")
    })

    this.facilityService.getAll().subscribe(next => {
      console.log(next);
      this.facilitys = next;
    }, error => {
      console.log("List facility empty!")
    })
  }

  ngOnInit(): void {
  }

  save() {
    this.contractService.addContract(this.formGroup.value).subscribe(value => {
      this.route.navigateByUrl("/contract/list").then(data => {
        this.formGroup.reset();
      })
    });
  }
}
