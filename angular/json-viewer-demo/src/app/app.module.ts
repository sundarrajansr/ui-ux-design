import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecursiveJsonComponent } from './recursive-json/recursive-json.component';

@NgModule({
  declarations: [
    AppComponent,
    RecursiveJsonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
