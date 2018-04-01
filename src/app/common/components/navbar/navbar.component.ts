import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public playerName: string = "Rakshitha";
  @Input() public notifications = [ "Notification 1" ]; //For testing notifcation 1 is set
  
  color: string = "primary";

  openProfile(){
    alert("TODO")
  }

  logout(){
    
    let response = confirm("Do you really want to logout?");

    if (response) {
        alert("Logged out!")
    } 
    else {
      alert("Good! Game On!")
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
