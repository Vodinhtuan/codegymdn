import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Facility} from "../../../model/facility/facility";
import {RentType} from "../../../model/facility/rent-type";
import {FacilityType} from "../../../model/facility/facility-type";
import {ActivatedRoute, Router} from "@angular/router";
import {RenTypeService} from "../../../service/facility/ren-type.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  formGroup: FormGroup;
  facilitySelected: Facility = {};
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private facilityService: FacilityService,
              private rentTypeService: RenTypeService,
              private facilityTypeService: FacilityTypeService) {
  }

  ngOnInit(): void {
    this.createForm();
    this.rentTypes = this.rentTypeService.findALl();
    this.facilityTypes = this.facilityTypeService.findALl();

    this.activatedRoute.paramMap.subscribe(value => {
      let id = +value.get("id");
      this.facilityService.findById(id).subscribe(data => {
        this.facilitySelected = data;
        console.log(this.facilitySelected)
        this.createForm();
      })
    })
  }


  save() {
    this.facilityService.updateById(this.formGroup.value).subscribe(value => {
      this.router.navigateByUrl("/facility/list").then(data => {
        this.formGroup.reset();
        this.facilitySelected = {};
      })
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.facilitySelected.id],
      name: [this.facilitySelected.name, [Validators.required]],
      area: [this.facilitySelected.area, [Validators.min(1)]],
      cost: [this.facilitySelected.cost, [Validators.required]],
      maxPeople: [this.facilitySelected.maxPeople, [Validators.required]],
      standardRoom: [this.facilitySelected.standardRoom, [Validators.required]],
      descriptionOtherConvenience: [this.facilitySelected.descriptionOtherConvenience, [Validators.required]],
      areaPool: [this.facilitySelected.area, [Validators.required]],
      numberOfFloors: [this.facilitySelected.numberOfFloors, [Validators.required]],
      freeService: [this.facilitySelected.freeService, [Validators.required]],
      rentType: [this.facilitySelected.rentType, [Validators.required]],
      facilityType: [this.facilitySelected.facilityType, [Validators.required]]
    })
  }

}
