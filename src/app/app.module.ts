import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; /*important*/
import { HttpClientModule} from '@angular/common/http'; /*important*/
import { routing, appRoutingProviders } from './app.routing';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { tokenInterceptorProvider, errorInterceptorProvider } from './helpers/';

import { AppComponent } from './app.component';
import {
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  SettingsProfileComponent,
  ErrorComponent,
} from './components';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    SettingsProfileComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })
  ],
  providers: [
    appRoutingProviders,
    tokenInterceptorProvider,
    errorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
