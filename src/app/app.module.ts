import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TestsService } from './tests.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BlogComponent } from './blog/blog.component';
import { BotComponent } from './bot/bot.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavigationComponent,
    BlogComponent,
    BotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
