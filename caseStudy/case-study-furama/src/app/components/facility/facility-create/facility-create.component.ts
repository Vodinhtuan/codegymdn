import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RentType} from "../../../model/facility/rent-type";
import {FacilityType} from "../../../model/facility/facility-type";
import {ActivatedRoute, Router} from "@angular/router";
import {FacilityService} from "../../../service/facility/facility.service";
import {RenTypeService} from "../../../service/facility/ren-type.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];
  formGroup = this.formBuilder.group({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required, Validators.min(1)]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    descriptionOtherConvenience: new FormControl('', [Validators.required]),
    areaPool: new FormControl('', [Validators.required]),
    numberOfFloors: new FormControl('', [Validators.required]),
    freeService: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
  })
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private facilityService: FacilityService,
              private rentTypeService: RenTypeService,
              private facilityTypeService: FacilityTypeService) {
    this.rentTypes=rentTypeService.findALl();
    this.facilityTypes=facilityTypeService.findALl();
  }

  ngOnInit(): void {
  }


  save() {
    this.facilityService.addFacility(this.formGroup.value).subscribe(value => {
      this.router.navigateByUrl("/facility/list").then(data => {
        this.formGroup.reset();
      })
    });
  }

}
