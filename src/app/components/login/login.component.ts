import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(    private authService: AuthService,
                  private router: Router,
                  private spinnerService: Ng4LoadingSpinnerService,
                  private flashMessage: FlashMessagesService) {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  signInWithGoogle() {
    this.spinnerService.show();
    this.authService.signInWithGoogle()
      .then((res) => {
        this.spinnerService.hide();
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
        this.spinnerService.hide();
      });
  }

  signInWithTwitter() {
    this.spinnerService.show();
    this.authService.signInWithTwitter()
      .then((res) => {
        this.spinnerService.hide();
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
        this.spinnerService.hide();
      });
  }


  signInWithGithub() {
    this.spinnerService.show();
    this.authService.signInWithGithub()
      .then((res) => {
        this.spinnerService.hide();
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
        this.spinnerService.hide();
      });
  }

  onSubmit() {
    this.spinnerService.show();
    this.authService.login(this.email, this.password)
      .then(res => {
        // this.flashMessage.show('You are now logged in', {
        //   cssClass: 'alert-success', timeout: 4000
        // });
        this.spinnerService.hide();
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.spinnerService.hide();
        console.log(err);
      });
  }
}
