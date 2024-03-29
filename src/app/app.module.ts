import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchWheaterComponent } from './search-wheater/search-wheater.component';
import { FavoriteWheaterComponent } from './favorite-wheater/favorite-wheater.component';
import { RouterModule } from '@angular/router';
import { SearchWheaterService } from './search-wheater/search-wheater.service';
import { DayComponentComponent } from './day-component/day-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    {path :'',component:SearchWheaterComponent},
      {path :'favorite',component:FavoriteWheaterComponent}
  ]),
    HttpClientModule,HttpModule ],
  declarations: [ AppComponent, TitleComponent,NavBarComponent, SearchWheaterComponent, FavoriteWheaterComponent, DayComponentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SearchWheaterService,FavoriteWheaterComponent]
})
export class AppModule { }
