import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './ui/main/main.component';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';
import { CheckboxModule } from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CheckboxModule,
    DropdownModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
