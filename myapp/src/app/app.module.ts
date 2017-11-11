import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewDirective }  from './newDirective';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NewDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
