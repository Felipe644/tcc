import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandListComponent } from './pages/demand-list/demand-list.component';


const routes: Routes = [
  { path: 'demand-list', component: DemandListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
