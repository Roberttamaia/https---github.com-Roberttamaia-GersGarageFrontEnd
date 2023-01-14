import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { IService } from '../models/services';
import { IBooking } from '../models/bookings';
import { Invoice } from '../models/invoices';
import { IVehicleParts } from '../models/vehicleParts';
import { IVehicle } from '../models/vehicles';
import { IVehicleType } from '../models/vehicleTypes';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _baseUrl: string = 'http://localhost:9191';
  userData: any;
  constructor(
    private http: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    /* logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
      up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this._baseUrl}/users`);
  }
  getServices(): Observable<IService[]> {
    return this.http.get<IService[]>(`${this._baseUrl}/listServices`);
  }
  getBookings(): Observable<IBooking[]> {
    return this.http.get<IBooking[]>(`${this._baseUrl}/listBooked`);
  }
  getInvoice(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this._baseUrl}/listInvoices`);
  }
  getVehicleParts(): Observable<IVehicleParts[]> {
    return this.http.get<IVehicleParts[]>(`${this._baseUrl}/listVehicleParts`);
  }
  getVehicles(): Observable<IVehicle[]> {
    return this.http.get<IVehicle[]>(`${this._baseUrl}/listVehicles`);
  }
  getVehicleTypes(): Observable<IVehicleType[]> {
    return this.http.get<IVehicleType[]>(`${this._baseUrl}/listVehicleTypes`);
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['dashboard']);
    });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        this.router.navigate(['dashboard']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  SetUserData(user: any) {
    sessionStorage.setItem('user', JSON.stringify(user.multiFactor.user));
    sessionStorage.setItem(
      'token',
      user.multiFactor.user.stsTokenManager.accessToken
    );
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
