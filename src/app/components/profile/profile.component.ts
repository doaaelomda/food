import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string ='' ;
  email: string =''
  password: string =''
  img:string|null=null;
  constructor(private authService: AuthService,private profileService: ProfileService) { }
  ngOnInit(): void {
    let userData = this.authService['getUserData']();
    if (localStorage.getItem('userData')) {
      userData = JSON.parse(localStorage.getItem('userData')!);
    }

    this.name = userData.username;
    this.email = userData.email ;
    this.password = userData.password ;
    this.img = userData.img ;

    localStorage.setItem('userData', JSON.stringify(userData));
  }
  update() {
    const name = this.name;
    const email = this.email;
    const password = this.password;
  
    // Update the data in the service to reflect the changes made
    this.profileService.name = name;
    this.profileService.email = email;
    this.profileService.password = password;
  
    // Save the updated data to localStorage
    const userData = {
      username: name,
      email: email,
      password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.reload() 
    alert('Profile updated successfully!');
    
  }
  
}