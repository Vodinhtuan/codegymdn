import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  formGroup = new FormGroup(
    {
      id : new FormControl(),
      name : new FormControl('',[Validators.required,Validators.minLength(3)]),
      birthday : new FormControl('',[Validators.required]),
      gender : new FormControl('',[Validators.required]),
      idCard : new FormControl('',[Validators.required]),
      phone : new FormControl('',[Validators.required,Validators.pattern("^(\\+84|0)\\d{9}$")]),
      email : new FormControl('',[Validators.required,Validators.pattern("^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),
      customerType : new FormControl('',[Validators.required]),
      address : new FormControl('',[Validators.required]),
    }
  )

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService, private route: Router) {
    // @ts-ignore
    this.customerTypes=this.customerTypeService.getAll();
  }

  ngOnInit(): void {
  }

  saveCreate() {
    this.customerService.addCustomer(this.formGroup.value).subscribe(value => {
      this.route.navigateByUrl('/customer/list').then(result => {
        this.formGroup.reset();
      })
    })
  }

}
