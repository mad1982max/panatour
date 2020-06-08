import { Component, OnInit, Input, DoCheck, OnDestroy} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck, OnDestroy {
  @Input() titlePage: string;
  @Input() downloadFlag: boolean = true;
  @Input() nameDownload: string = "Scans"; 
  
  constructor(private router: Router, private route_: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(e => { 
      if(e instanceof NavigationEnd) {
        let route = e.url;
        console.log('route:', e, route);
        if(route === '/') {
          this.downloadFlag = false;
        } else {
          this.titlePage = route;
          this.downloadFlag = true;
        }
      }
     });
  }

  ngDoCheck(): void {}

  ngOnDestroy() {
    console.log('ngOnDestroy');   
  }

}
