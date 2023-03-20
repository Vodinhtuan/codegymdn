import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picket',
  templateUrl: './color-picket.component.html',
  styleUrls: ['./color-picket.component.css']
})
export class ColorPicketComponent implements OnInit {
  hex = '#a1fc03';

  colors = ['#a1fc03', '#fcf003', '#fc0703', '#03fcfc', '#e303fc'];
  changeHex(hex) {
    this.hex = hex;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
