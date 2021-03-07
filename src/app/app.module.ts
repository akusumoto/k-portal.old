import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';

var config = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyD80x2QS14PAriMg41JL2GJotKGuYXhivo",
  authDomain: "kportal-83694.firebaseapp.com",
  databaseURL: "https://kportal-83694.firebaseio.com",
  projectId: "kportal-83694",
  storageBucket: "kportal-83694.appspot.com",
  messagingSenderId: "761049942089",
  appId: "1:761049942089:web:679c0b991706722ac95798",
  measurementId: "G-C0SCPBJMG8"
};

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
