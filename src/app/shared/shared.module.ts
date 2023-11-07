import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ExcludeDialogComponent } from './components/exclude-dialog/exclude-dialog.component';
import { EditModuleComponent } from './components/edit-module/edit-module.component';
import { CommentModuleComponent } from './components/comment-module/comment-module.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ExcludeDialogComponent,
    EditModuleComponent,
    CommentModuleComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ErrorDialogComponent, EditModuleComponent]
})
export class SharedModule { }
