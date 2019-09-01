import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; /*important*/
import { HttpClientModule} from '@angular/common/http'; /*important*/
import { routing, appRoutingProviders } from './app.routing';
import { tokenInterceptorProvider, errorInterceptorProvider } from './helpers/';

//Modules
import {FroalaModuleEditor, SwalModule} from './components/modules/'
import { AngularFileUploaderModule } from "angular-file-uploader";
//Component
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
    FroalaModuleEditor,
    SwalModule,
    AngularFileUploaderModule
  ],
  providers: [
    appRoutingProviders,
    tokenInterceptorProvider,
    errorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
