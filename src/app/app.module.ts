import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './core/components/card/card.component';
import { CardListComponent } from './core/components/card-list/card-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ElementsPageComponent } from './pages/elements-page/elements-page.component';
import { ElementsDetailPageComponent } from './pages/elements-page/elements-detail-page/elements-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,    
    CardListComponent,
    HomePageComponent,
    ManagementPageComponent,
    ElementsPageComponent,
    ElementsDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
