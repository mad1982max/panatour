import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewTowerComponent} from './overviewTower/overviewTower.component';
import {ErrPageComponent} from './err-page/err-page.component';
import {MainBodyComponent} from './main-body/main-body.component';

const routes: Routes = [
  { path: '', component: MainBodyComponent},
  {path: 'overviewTower/:id', component: OverviewTowerComponent},
  {path: '**', component: ErrPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
