import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ExcludeDialogComponent } from './components/exclude-dialog/exclude-dialog.component';
import { EditModuleComponent } from './components/edit-module/edit-module.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ExcludeDialogComponent,
    EditModuleComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [ErrorDialogComponent, EditModuleComponent]
})
export class SharedModule { }
