import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRoutingModule } from './material-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';

import { MatLoginComponent } from './mat-login/mat-login.component';
import { MatUserComponent } from './mat-user/mat-user.component';
import { MatChildComponent } from './mat-child/mat-child.component';

const MaterialComponents = {
  MatButtonModule,
  MatSlideToggleModule,
  MatInputModule,
  MatTableModule,
  MatFormField,
}

@NgModule({
  declarations: [
    
    
    MatLoginComponent,
    MatUserComponent,
    MatChildComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule
  ],
  exports: [ MaterialModule]
})
export class MaterialModule { }
