import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatChildComponent } from './mat-child/mat-child.component';
import { MatLoginComponent } from './mat-login/mat-login.component';
import { MatUserComponent } from './mat-user/mat-user.component';

const routes:Routes=[
  {
    path: 'mat-child',
    component: MatChildComponent
  },
  {
    path: 'mat-login',
    component: MatLoginComponent
  },
  {
    path: 'mat-user',
    component: MatUserComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
