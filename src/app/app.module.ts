import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavvarComponent } from './components/navvar/navvar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { FlashMessagesModule } from 'angular2-flash-messages';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: 'add-listing', component: AddListingComponent }
]


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyA-2AMU4I7Y_LJaUSicR1q_cjLaE_gLMOw',
  authDomain: 'proplisting-30f5c.firebaseapp.com',
  databaseURL: 'https://proplisting-30f5c.firebaseio.com',
  storageBucket: 'proplisting-30f5c.appspot.com',
  messagingSenderId: '863095858940'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavvarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
