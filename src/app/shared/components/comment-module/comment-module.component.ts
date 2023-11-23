import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardsInfoData } from 'src/app/Model/cards-model';
import { Comment } from '../../../Model/comment-model';


@Component({
  selector: 'app-comment-module',
  templateUrl: './comment-module.component.html',
  styleUrls: ['./comment-module.component.css']
})
export class CommentModuleComponent implements OnInit {

  comments: Comment[] = [
    new Comment(1, 'Primeiro comentário'),
    new Comment(2, 'Segundo comentário'),
    new Comment(3, 'Terceiro comentário'),
  ];

  newCommentText: string = '';

  addComment() {
  if (this.newCommentText) {
    const newComment = new Comment(this.comments.length + 1, this.newCommentText);
    this.comments.push(newComment);
    this.newCommentText = '';
  }
}

saveComments() {
  localStorage.setItem('comments', JSON.stringify(this.comments));
}


loadComments() {
  const commentsString = localStorage.getItem('comments');
  if (commentsString !== null) {
    const comments = JSON.parse(commentsString);
    this.comments = comments;
  }
}

  card: any=  CardsInfoData;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { card: CardsInfoData }, public dialogRef: MatDialogRef<CommentModuleComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.card = this.data.card;
    this.loadComments();
    this.card = this.data.card;
  }

}
