import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';
import { User } from '../user';
import { UserAuthProfile } from '../user-auth-profile';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.sass'],
})
export class UserBarComponent {
  user?: User;

  constructor(
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.tokenStorage.getUserProfile()['user'];
  }

  logout() {
    this.router.navigateByUrl('/login');
    this.authService.logout();
  }
}
