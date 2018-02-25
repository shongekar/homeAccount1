import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './common/components/card/card.component';
import { ProfileComponent } from './common/components/profile/profile.component';
import { TableComponent } from './common/components/table/table.component';
import { BluffComponent } from './games/bluff/bluff.component';
import { componentFactoryName } from '@angular/compiler';
import { HomeComponent } from './common/components/home/home.component';
import { PlayersComponent } from './common/components/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProfileComponent,
    TableComponent,
    BluffComponent,
    HomeComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'games/bluff', component: BluffComponent},
      {path: '**', component: HomeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
