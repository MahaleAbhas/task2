import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './CRUD/signup/signup.component';
import { TableComponent } from './CRUD/table/table.component';
import { UpdateComponent } from './CRUD/update/update.component';

const routes: Routes = [
  {path: "signup", component: SignupComponent},
  {path: "table", component: TableComponent},
  {path: "update", component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
