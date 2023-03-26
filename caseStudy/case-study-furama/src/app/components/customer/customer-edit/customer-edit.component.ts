import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {CustomerType} from "../../../model/customer/customer-type";
import {Customer} from "../../../model/customer/customer";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  formGroup: FormGroup;
  customerSelect: Customer = {};
  customerTypes: CustomerType[]= [];

  constructor(private customerService : CustomerService,
              private customerTypeService : CustomerTypeService,
              private activatedRoute : ActivatedRoute,
              private route : Router) { }

  ngOnInit(): void {
    this.createForm();
    this.customerTypes = this.customerTypeService.getAll()
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +(data.get('id'));
      this.customerService.findById(id).subscribe(value => {
        this.customerSelect = value;
        console.log(this.customerSelect)
        this.createForm();
      })
    })
  }

  save(){
    this.customerService.updateById(this.formGroup.value).subscribe(data => {
      this.route.navigateByUrl('/customer/list').then(result => {
        this.formGroup.reset();
        this.customerSelect = {};

      })
    })

  }

  createForm(){
    this.formGroup = new FormGroup(
      {
        id : new FormControl(this.customerSelect.id,[Validators.required]),
        name : new FormControl(this.customerSelect.name,[Validators.required,Validators.minLength(3)]),
        birthday : new FormControl(this.customerSelect.birthday,[Validators.required]),
        gender : new FormControl(this.customerSelect.gender,[Validators.required]),
        idCard : new FormControl(this.customerSelect.idCard,[Validators.required]),
        phone : new FormControl(this.customerSelect.phone,[Validators.required,Validators.pattern("^(\\+84|0)\\d{9}$")]),
        email : new FormControl(this.customerSelect.email,[Validators.required,Validators.email]),
        customerType : new FormControl(this.customerSelect.customerType,[Validators.required]),
        address : new FormControl(this.customerSelect.address,[Validators.required]),

      }
    )
  }
}
