import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewsComponent } from './components/news/news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewNewsComponent } from './components/new-news/new-news.component';
import { OneNewsComponent } from './components/one-news/one-news.component';
import { CommandsComponent } from './components/commands/commands.component';
import { WikiComponent } from './components/wiki/wiki.component';
import { WikiPageComponent } from './components/wiki-page/wiki-page.component';
import { WikiSearchComponent } from './components/wiki-search/wiki-search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CookieService } from 'ngx-cookie-service';
import { GuildDashboardComponent } from './components/guild-dashboard/guild-dashboard.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NewsComponent,
    NewNewsComponent,
    OneNewsComponent,
    CommandsComponent,
    WikiComponent,
    WikiPageComponent,
    WikiSearchComponent,
    DashboardComponent,
    GuildDashboardComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
