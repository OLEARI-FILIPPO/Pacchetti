import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditPacchettoComponent } from './components/edit-pacchetto/edit-pacchetto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditCaldaiaComponent } from './components/edit-caldaia/edit-caldaia.component';

@NgModule({
  declarations: [
    AppComponent,
    EditPacchettoComponent,
    EditCaldaiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
