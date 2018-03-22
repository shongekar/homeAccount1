import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material';

import { AppComponent } from './app.component';
import { CardComponent } from './common/components/card/card.component';
import { ProfileComponent } from './common/components/profile/profile.component';
import { TableComponent } from './common/components/table/table.component';
import { BluffComponent } from './games/bluff/bluff.component';
import { componentFactoryName } from '@angular/compiler';
import { HomeComponent } from './common/components/home/home.component';
import { TimerComponent } from './common/components/timer/timer.component';
import { GameFormComponent } from './common/components/forms/game-form/game-form.component';
import { ProfileFormComponent } from './common/components/forms/profile-form/profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProfileComponent,
    TableComponent,
    BluffComponent,
    HomeComponent,
    TimerComponent,
    GameFormComponent,
    ProfileFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'games/bluff', component: BluffComponent},
      {path: '**', component: HomeComponent},
    ]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
