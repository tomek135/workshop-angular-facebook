import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './core-routing.module';
import { AppComponent } from './core/components/app/app.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { HomePageComponent } from './core/components/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './core/components/pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
