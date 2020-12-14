import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { BtnDirective } from './btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    BtnDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
