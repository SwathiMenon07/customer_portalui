import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit{
 loginForm!: FormGroup;

constructor(private apiService:ApiService,private router:Router,private formBuilder:FormBuilder){}
ngOnInit(): void {
  this.loginForm=this.formBuilder.group({
    username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    password:['',[Validators.required,Validators.minLength(6)]],

  })
}

  onSubmit()
    { debugger
      if(this.loginForm.valid){
      const {username,password}=this.loginForm.value;
      this.loginForm.get('username')?.value;
      this.apiService.loginData(username,password).subscribe(()=>
      {
        this.router.navigate(['/home'],{queryParams:{username:username}});
      },
     error=>{
     console.error(error);
     this.loginForm.reset();
    });
  }
    return
    }
  }