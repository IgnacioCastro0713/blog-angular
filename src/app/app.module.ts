import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; /*important*/
import { HttpClientModule} from '@angular/common/http'; /*important*/
import { routing, appRoutingProviders } from './app.routing';
import { tokenInterceptorProvider, errorInterceptorProvider } from './helpers/';

// Modules
import {FroalaModuleEditor, SwalModule} from './components/modules/';
import { AngularFileUploaderModule } from 'angular-file-uploader';
// Component
import { AppComponent } from './app.component';
import {
  // Auth
  LoginComponent,
  RegisterComponent,
  SettingsProfileComponent,
  // Home
  HomeComponent,
  ErrorComponent,
  // Category
  CategoryListComponent,
  CategoryCreateComponent
} from './components';


@NgModule({
  declarations: [
    AppComponent,
    // Auth
    LoginComponent,
    RegisterComponent,
    SettingsProfileComponent,
    // Home
    HomeComponent,
    ErrorComponent,
    // Category
    CategoryCreateComponent,
    CategoryListComponent,
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
