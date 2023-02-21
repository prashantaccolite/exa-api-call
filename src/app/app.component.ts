import { Component, OnInit } from '@angular/core';
import { EntriesData } from './model/entries.model';
import { EntriesService } from './services/entries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exa-api-call';
  entries: EntriesData[] = [];

  constructor(private entriesService: EntriesService) { }

  ngOnInit(): void {
    console.log('ng on in it');

    this.entriesService.getManagerViewReport().subscribe((data: EntriesData[]) => {
      console.log('data===>>>', data);
      this.entries = data;
    })

  }
}
