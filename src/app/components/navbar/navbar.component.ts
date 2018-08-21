import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {SettingService} from '../../services/setting.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;
  subscription: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService,
              private settingsService: SettingService) { }

  ngOnInit() {
    this.subscription  = this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onLogoutClick($event) {
    // $event.preventDefault();
    this.authService.logout().then( (res) => {
      this.flashMessage.show('You are now logged out', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/login']);
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
