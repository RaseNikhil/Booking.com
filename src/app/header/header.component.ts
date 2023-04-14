import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: String = 'default';
  sellerName:String="nick";
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((value: any) => {
      if (value.url) {


        if (localStorage.getItem('sellerData') && value.url.includes('/seller')) {
          let sellerStore =localStorage.getItem('sellerData');
          let seller = sellerStore && JSON.parse(sellerStore);
          this.sellerName="Hi "+seller[0].name;
          this.menuType = 'seller';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  logout(){
    localStorage.removeItem('sellerData');
    this.route.navigate(['/']);
  }
}
