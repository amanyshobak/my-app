import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page_oneComponent } from './page_one/page_one.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { Page_twoComponent } from './page_two/page_two.component';
@NgModule({
  declarations: [		
    AppComponent,
      Page_oneComponent,
      Page_twoComponent
   ],
  imports: [
    BrowserModule,MatStepperModule,
    MatFormFieldModule,
    MatSliderModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,   
    MatInputModule,MatRippleModule,FlexLayoutModule,MatIconModule,MatMenuModule,
    MatToolbarModule,
  ],
  exports: [ MatFormFieldModule, MatInputModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
