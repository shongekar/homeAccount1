import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './common/components/card/card.component';
import { ProfileComponent } from './common/components/profile/profile.component';
import { TableComponent } from './common/components/table/table.component';
import { BluffComponent } from './games/bluff/bluff.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProfileComponent,
    TableComponent,
    BluffComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
