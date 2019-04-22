import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // image: SafeResourceUrl;
  
  constructor(private auth: AuthService,){ }

  // logInWithGoogle(){
  //   this.auth.login();
  // }
  // logOutWithGoogle(){
  //   this.auth.logout()
  // }

  
}
