import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NumericOperatorInputDirective } from './numeric-operator-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NumericOperatorInputDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
