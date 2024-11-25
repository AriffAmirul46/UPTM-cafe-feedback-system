import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // For ngModel and form handling
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment'; // Adjust the path if needed

@NgModule({
  declarations: [AppComponent], // Declare the root component
  imports: [
    BrowserModule, // Core Angular module for browser apps
    IonicModule.forRoot(), // Initialize Ionic
    AppRoutingModule, // Routing configuration
    FormsModule, // Enable template-driven forms
    AngularFireModule.initializeApp(environment.firebase), // Firebase initialization
    AngularFireAuthModule, // Firebase Authentication module
    AngularFirestoreModule, // Firestore database module
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, // Reuse routes for better performance
  ],
  bootstrap: [AppComponent], // Root component to bootstrap
})
export class AppModule {}
