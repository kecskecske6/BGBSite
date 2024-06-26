import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsComponent } from './components/commands/commands.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuildDashboardComponent } from './components/guild-dashboard/guild-dashboard.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewNewsComponent } from './components/new-news/new-news.component';
import { NewsComponent } from './components/news/news.component';
import { OneNewsComponent } from './components/one-news/one-news.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { WikiPageComponent } from './components/wiki-page/wiki-page.component';
import { WikiSearchComponent } from './components/wiki-search/wiki-search.component';
import { WikiComponent } from './components/wiki/wiki.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { GuildGuard } from './guards/guild.guard';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/new', component: NewNewsComponent, canActivate: [AdminGuard] },
  { path: 'news/:id', component: OneNewsComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'wiki/:title', component: WikiPageComponent },
  { path: 'wiki/search/:title', component: WikiSearchComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/:id', component: GuildDashboardComponent, canActivate: [GuildGuard] },
  { path: 'tos', component: TermsOfServiceComponent },
  { path: 'pp', component: PrivacyPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
