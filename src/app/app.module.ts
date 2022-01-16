import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodepenGridExampleComponent } from './components/codepen/codepen-grid-example/codepen-grid-example.component';
import { DeveloperMozillaGridExampleComponent } from './components/developer-mozilla/developer-mozilla-grid-example/developer-mozilla-grid-example.component';
import { HomeComponent } from './components/home-component/home.component';
import { StackoverflowGridExampleComponent } from './components/stackoverflow/stackoverflow-grid-example/stackoverflow-grid-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CodepenGridExampleComponent,
    DeveloperMozillaGridExampleComponent,
    StackoverflowGridExampleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
