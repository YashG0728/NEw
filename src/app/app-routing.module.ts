import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { HeaderComponent } from './component/header/header.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
{path:'',redirectTo:'homepage', pathMatch:'full'},
{path:'homepage', component:HomepageComponent},
{path: 'addemployee', component: AddEmployeeComponent},
{path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
