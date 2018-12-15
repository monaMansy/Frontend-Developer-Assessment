import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { first } from 'rxjs/operators';
import {loggingService} from'./login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[loggingService]
  
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;


  constructor(private router:Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService :loggingService) {
      
   }

 
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      
  }
     // convenience getter for easy access to form fields
     get f() { return this.loginForm.controls; }
     
         onSubmit() {
          
             this.submitted = true;
     
             // stop here if form is invalid
             if (this.loginForm.invalid) {
                 return;
             }
            
             this.loading = true;
             this.authService.login(this.f.username.value, this.f.password.value)
             .pipe(first())
             .subscribe(
                 data => {
                     this.router.navigate(['/users']);
                 },
                 error => {
                 });
        

}
}
