import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Jobs } from './job-tile';
import { JobsService } from './job.service';


@Component({
  selector: 'app-job-tile',
  templateUrl: './job-tile.component.html',
  providers: [JobsService],
  styleUrls: ['./job-tile.component.css']
})
export class JobTileComponent implements OnInit {
  jobs: Jobs[] = [];
  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobsService.getJobs()
      .subscribe(jobs => (this.jobs = jobs));
  }

}
