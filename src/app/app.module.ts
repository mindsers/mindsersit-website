import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'


import { ServiceWorkerModule } from '@angular/service-worker'
import { HttpClientModule } from '@angular/common/http'

import { environment } from '../environments/environment'
import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ResumeComponent } from './resume/resume.component'
import { HomeComponent } from './home/home.component'
import { ResumeService } from './resume/resume.service'
import { ContactComponent } from './contact/contact.component'
import { ContactService } from './contact/contact.service'
import { Error404Component } from './errors/error404.component'

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent,
    ContactComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [ContactComponent],
  providers: [ResumeService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
