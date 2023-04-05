import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {ConsignmentService} from "../../../services/consignment.service";
import {Router} from "@angular/router";
import {product} from "../../../models/product";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  consignmentForm: FormGroup;
  products: Array<product> = [];

  constructor(
    private productService: ProductService,
    private consignmentService: ConsignmentService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.consignmentForm = new FormGroup({
      consignmentId: new FormControl('LH-',[Validators.required, Validators.pattern(/^LH-\d{4}$/)]),
      product: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      importDate: new FormControl('', [Validators.required, this.validateImportDate]),
      exportDate: new FormControl('', [Validators.required,
        // this.validateExportDate,
        validateExportDate
      ]),
      tax: new FormControl('', [Validators.required, Validators.pattern('^(?!-)([1-9]|[1-2][0-9]|30)%$'),
      ]),
    });

    this.productService.getAllProduct().subscribe(
      value => {
        console.log(value);
        this.products = value;
      },
      error => {
        console.log('Not found list products!');
      }
    );
  }

  ngOnInit(): void {}

  parseDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  save(): void {
    console.log(this.consignmentForm);
    if (this.consignmentForm.valid) {
      const consignment = this.consignmentForm.value;
      consignment.importDate = this.parseDate(consignment.importDate);
      consignment.exportDate = this.parseDate(consignment.exportDate);
      this.consignmentService.addNewConsignment(consignment).subscribe(
        value => {
          console.log('success full adding!');
          this.snackBar.open('Thêm mới thành công!', '', {
            duration: 3000, // thời gian hiển thị thông báo
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          this.router.navigateByUrl('/list').then(success => {
            this.consignmentForm.reset();
          });
        },
        error => {
          console.log('Error: ' + error);
        }
      );
    }
  }

  validateImportDate(control: FormControl) {
    const inputDate = new Date(control.value).getTime();
    const today = new Date().setHours(0, 0, 0, 0);
    if (inputDate < today) {
      return { invalidDate: true };
    }
    return null;
  };
}

export function validateExportDate(control: AbstractControl): ValidationErrors | null {
  const exportDate = new Date(control.value).setHours(0, 0, 0, 0);
  const importDate = control.parent?.get('importDate')?.value;
  const today = new Date().setHours(0, 0, 0, 0);

  // Check if export date is at least 1 day after import date
  if (exportDate <= importDate || (exportDate - importDate) < 86400000) {
    return { invalidDateRange: true };
  }

  // Check if export date is today or in the future
  if (exportDate < today) {
    return { invalidExportDate: true };
  }

  return null;
}



