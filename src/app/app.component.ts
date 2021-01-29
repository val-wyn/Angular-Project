import { Component } from '@angular/core';
import {SessionService} from './core/services/session.service';
import {AuthService} from './core/services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router,
    public _snackBar: MatSnackBar
  ) {}

  get isSignedIn(): boolean {
    return AuthService.isSignedIn;
  }
  get isAdminSignedIn(): boolean {
    return AuthService.isAdminSignedIn;
  }

  signout() {
    // supprimer les données de sessions et retourner à la page de login
    this.router.navigate(['/auth/signin']).then(() => {
      this.sessionService.clear();
      AuthService.user = null;
    });
  }

  openSnackBar2(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
