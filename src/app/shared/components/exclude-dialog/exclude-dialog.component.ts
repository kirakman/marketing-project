import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-exclude-dialog',
  templateUrl: './exclude-dialog.component.html',
  styleUrls: ['./exclude-dialog.component.css']
})
export class ExcludeDialogComponent {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ExcludeDialogComponent>){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ExcludeDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
