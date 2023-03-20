import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

   navbar = 'home';
  get showHome(){
    return this.navbar === 'home';
  }
  get getAddPage(){
    return this.navbar === 'add';
  }
  toggleNavbar(navbar: string){
    this.navbar = navbar;
  }

  ngOnInit(): void {
  }

}
