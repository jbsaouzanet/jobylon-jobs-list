import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { JobListService } from '../../shared/jobs-list/jobs-list.service';
import { Jobs } from '../../model/jobs.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogContent } from '../dialog-content/dialog-content.component';

@Component({
    selector: 'job',
    templateUrl: './job.component.html',
  //  styleUrls: ['./main.scss']
  })
  
export class JobComponent  implements  OnInit {

    title = 'jobylon-job';
    url: string;
    jobs: Jobs; 
    constructor (private jobListService:JobListService, public dialog: MatDialog) {}
  
    ngOnInit() {
         this.url = "https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/";
         
    }

    getJobsList() {
        console.log(this.url);
            this.jobListService.get(this.url)
            .subscribe(response => {
            this.jobs = response;
            console.log(this.jobs);
            });
    }    
}

