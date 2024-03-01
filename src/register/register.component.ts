import { Component,OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;

constructor(private apiService:ApiService,private router:Router,private formBuilder:FormBuilder)
{}
ngOnInit(): void {
  this.registerForm=this.formBuilder.group({
    username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    full_name:['',[Validators.required,Validators.minLength(10)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',Validators.required],
},
{
validator:this.passwordMatchValidator
});
}
passwordMatchValidator(formGroup:FormGroup){
  const password=formGroup.get('password');
  const confirmPassword=formGroup.get('confirmPassword');
  if(password && confirmPassword)
  {
    const passwordValue=password.value;
    const confirmPasswordValue=confirmPassword.value;
    return passwordValue === confirmPasswordValue ? null:{mismatch:true};
 }
return null;
}
onsubmit()
{
  debugger
  if(this.registerForm && this.registerForm.valid)
  {
    const formDataToSend={...this.registerForm.value};
    delete formDataToSend.confirmPassword

    this.apiService.registerData(formDataToSend).subscribe(response=>
      {
        console.log('successfully registered',response);
        this.router.navigate(['/login']);
      },
        error=>{console.error('error occured',error)
        this.router.navigate(['/register']);
      this.registerForm.reset();}
      )
  }
  return
}
}
