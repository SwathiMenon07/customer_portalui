import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
username! :string;
current_password!:string;
new_password!:string;
confirm_password!:string;
constructor(private router:Router){}
onsubmit():void
{
  this.router.navigate(['/login']);
 
}

}