import { Component, Inject } from '@angular/core';
import { Jobs } from 'src/app/model/jobs.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'dialog-content',
    templateUrl: './dialog-content.component.html',
    styleUrls: ['./dialog.scss']
})

export class DialogContent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: Jobs) {}
}