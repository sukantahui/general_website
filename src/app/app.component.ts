import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import {CanonicalService} from './services/canonical.service';
import {CommonService} from './services/common.service';
import {AuthService} from './services/auth.service';
import * as AOS from 'aos';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  active = 1;
  events: string[] = [];
  opened: boolean;
  faCoffee = faCoffee;
  faBaby = faBaby;
  mediaSub: Subscription;
  deviceXs: boolean;

  direction = 'row';
  navFixed = false;
  private scrollOffset = 70;
  private projectData: any;
  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) > this.scrollOffset;
  }

  toggleDirection() {
    const next = (DIRECTIONS.indexOf(this.direction) + 1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }

  // tslint:disable-next-line:max-line-length
  constructor(public mediaObserver: MediaObserver
              // tslint:disable-next-line:align
              , private pageTitle: Title, private metaService: Meta
              // tslint:disable-next-line:align
              , private canonicalService: CanonicalService
              // tslint:disable-next-line:align
              , private commonService: CommonService
              // tslint:disable-next-line:align
              , private authService: AuthService
              // tslint:disable-next-line:align
              , private http: HttpClient) {
    AOS.init();
    this.http.get('assets/ProjectData.json').subscribe((data: any) => {
      this.projectData = data;
      this.pageTitle.setTitle(data.projectTitle);
    });
  }
  ngOnInit(): void {
    this.authService.autoLogin();
    this.canonicalService.setCanonicalURL();
    this.metaService.addTags([
      { name: 'keywords', content: 'sukanta hui' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'sukanta hui' },
      { name: 'date', content: '2021-05-25', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { description: 'This is a general website for any use' }
    ]);


    this.mediaSub = this.mediaObserver.media$.subscribe(
        (result: MediaChange) => {
          this.deviceXs = (result.mqAlias === 'xs' ? true : false);
          this.commonService.setDeviceXs(this.deviceXs);
        }
      );
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}

const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];
