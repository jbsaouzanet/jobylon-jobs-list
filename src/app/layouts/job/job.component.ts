import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { JobListService } from '../../shared/jobs-list/jobs-list.service';
import { Jobs } from '../../model/jobs.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogContent } from '../dialog-content/dialog-content.component';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'job',
    templateUrl: './job.component.html',
  //  styleUrls: ['./main.scss']
  })
  
export class JobComponent  implements  OnInit {

    title = 'jobylon-job';
    id: string
    url: string;
    jobs: Jobs; 
    jobList: Array<Jobs>; 
    data: any
    constructor (private jobListService:JobListService, public dialog: MatDialog, private route: ActivatedRoute) {}
  
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id')
        this.url = "https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/";
        this.getJobsList();
       
       
    }

    getJobsList() {
        console.log(this.url);
            this.jobListService.get(this.url)
            .subscribe(response => {
            this.jobList = new Array(response);
            //console.log(this.jobList);  
            //console.log(Number(this.id));
            //this.data = this.jobList.find(i => i.id === Number(this.id));   
            //console.log(this.jobList.find(i => i.id === Number(this.id)));       
            });
    }    
}

