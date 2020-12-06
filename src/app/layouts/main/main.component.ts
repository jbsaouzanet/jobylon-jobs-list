import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { JobListService } from '../../shared/jobs-list/jobs-list.service';
import { Jobs } from '../../model/jobs.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogContent } from '../dialog-content/dialog-content.component';

@Component({
    selector: 'jobylon-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.scss']
  })
  
export class MainComponent  implements  OnInit {

    title = 'jobylon-jobs-list';
    url: string;
    jobs: Jobs; 
    constructor (private jobListService:JobListService, public dialog: MatDialog) {}
  
    ngOnInit() {
         this.url = "https://jbsaouzanet.github.io/jobylon-jobs-list/assets/jobslist.mock.json";
    }

    openModal(job) {
        console.log(job);
        const dialogRef = this.dialog.open(DialogContent, { data: job });

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
    }

    getJobsList() {
        console.log(this.url);
        if(this.url !== ""){
            this.jobListService.get(this.url)
            .subscribe(response => {
            this.jobs = response;
            console.log(this.jobs);
            });
        }       
    }    
}

