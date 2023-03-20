import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  strInput = "";
  operator = ['+', '-', '*', '/'];
  temp = [];
  num1 = 0; num2 = 0;

  input(input){
    this.strInput += input;
  }

  cal(){
    for (let i:number = 0; i < this.strInput.length; i++){
      if (this.operator.indexOf(this.strInput.charAt(i)) != -1){
        this.temp = this.strInput.split(this.strInput.charAt(i));
        this.num1 = Number(this.temp[0]);
        this.num2 = Number(this.temp[1]);
        switch (this.strInput.charAt(i)) {
          case '+':
            this.strInput = (this.num1 + this.num2) + "";
            break;
          case '-':
            this.strInput = (this.num1 - this.num2) + "";
            break;
          case '*':
            this.strInput = (this.num1 * this.num2) + "";
            break;
          case '/':
            if (this.num2 == 0) {
              this.strInput = "";
              break;
            }
            this.strInput = (this.num1 / this.num2) + "";
            break;
        }
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
