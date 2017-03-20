import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-navvar',
  templateUrl: './navvar.component.html',
  styleUrls: ['./navvar.component.css']
})
export class NavvarComponent implements OnInit {

  constructor(public af:AngularFire) { }

  ngOnInit() {
  }

login(){
  this.af.auth.login();
}

logout(){
  this.af.auth.logout();
}
}
