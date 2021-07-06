import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/interceptors/loader.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor( private loaderService:LoaderService,) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loaderService.setHttpProgressStatus(true);
    } ,500);

    this.loaderService.setHttpProgressStatus(false)
  }

}
