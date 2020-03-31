import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestsService } from 'src/app/services/request-provider.service';
import { StorageService } from 'src/app/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  submitted: boolean;
  errors: any[];

  constructor(private fb: FormBuilder,
              private request: RequestsService,
              private storageService: StorageService,
              public router: Router,
              private auth: AuthService,
              private route: ActivatedRoute,
              ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.minLength(6)]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

    // provider prior to change
    const provider = 'admins';
    const query = {
      username: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
      provider,
    };
    this.request.endPoint = `login`;
    this.request.create(query).subscribe(response => {
      this.saveToken(response);
      this.auth.loggedIn.next(true);
      this.getUserAndChatToken();
    }, error => {
      this.showErrors(error);
    });

  }


  saveToken(response) {
    this.storageService.saveToken(response);
  }

  getUserAndChatToken() {
    // get logged in user
    // this.requestService.endPoint = `user`;
    // this.requestService.fetch(1).subscribe((response) => {
    //   localStorage.setItem('user', JSON.stringify(response['data']));
    //   this.router.navigateByUrl('/pages/dashboard');
    // }, (error) => {
    //   this.showErrors(error);
    //   this.sendAuthEvent('get-current-user-failed');
    // });
    this.router.navigateByUrl('');

  }

  showErrors(error) {
    this.submitted = false;
    this.errors = [];
    if (error['errors'] !== undefined) {
      for (let key in error['errors']) {
        if (error['errors'].hasOwnProperty(key)) {
          this.errors.push(error['errors'][key][0]);
        }
      }
    } else {
      this.errors.push(error['error']['message']);
    }
  }


}
