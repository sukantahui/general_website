import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, public commonService: CommonService) { }

  ngOnInit(): void {
    // this.jumpTo('portfolio');
    this.activatedRoute.fragment.subscribe(res => {
    });
  }
  jumpTo(section){
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({behavior: 'smooth'});
    }, 1000);
  }
}
