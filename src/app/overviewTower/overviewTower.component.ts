import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-overviewTower',
  templateUrl: './overviewTower.component.html',
  styleUrls: ['./overviewTower.component.scss']
})
export class OverviewTowerComponent implements OnInit, AfterViewInit {
  id: string;
  link: string;
  svg;
  floorRect; 
  headerFooterHeight; 
  obj: HTMLElement;

  sanitizedURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

  constructor(private activateRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.id = activateRoute.snapshot.params['id'];
    this.link = `../../assets/img/overviewTower/${this.id}.svg`;
    
  }

  

  ngAfterViewInit(): void {
    console.log('**svgComp - ngAfterViewInit');
    
    setTimeout(() => {
      
    },3000)
    console.log(this.svg);
    this.resizeFn();
  }

  ngOnInit(): void {
    this.obj  = document.getElementById('svg');
    this.svg  = (this.obj as HTMLObjectElement).contentDocument;
      console.log(this.svg);
      this.svgOnLoad();
    console.log(this.obj);
    console.log('-----onInit');
   
    //this.loadFn();
    //this.obj.addEventListener('load', this.loadFn)
  }

  svgOnLoad() {
    console.log('*-*--*');
    
    // document.body.style.opacity = 1;
    this.svg  = (this.obj as HTMLObjectElement).contentDocument;
    
    window.addEventListener('resize', this.resizeFn);

    this.floorRect = Array.from(this.svg.querySelectorAll(".block"));
    this.floorRect.forEach(singleBlock => {
        singleBlock.addEventListener('click', this.clickFloor.bind(this))
        singleBlock.addEventListener('mouseenter', this.mouseOverFloor.bind(this))
        singleBlock.addEventListener('mouseleave', this.mouseLeave.bind(this))
    })
  }

  resizeFn() {
    console.log('****', this.obj);
    
    this.headerFooterHeight = (document.querySelector('.header')as HTMLElement).offsetHeight + (document.querySelector('.footer') as HTMLElement).offsetHeight;

    var h = window.innerHeight || document.documentElement.clientHeight ||
        document.body.clientHeight;

    var w = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;

    var hwRatio = h / w;
    var multer = hwRatio > 1.8 ? 0.7 : hwRatio <= 1 ? 1.2 : 0.8;
    this.obj.style.height = `${h*multer - this.headerFooterHeight*multer}px`;

}

mouseLeave(e) {
  e.target.style.fill = "none";
  e.target.style.stroke = "none"
}

mouseOverFloor(e) {
  console.log('mouseOverFloor');
  
  e.target.style.fill = "rgba(0,0,0,0.2)";
  e.target.style.stroke = "#FFF773"
  e.target.style.strokeWidth = 8;
}

clickFloor(e) {
    let level = e.target.id;
    console.log('goTo: ', level);
    document.location.href = `../levels/SITEMAP.html?level=${level}`; 
    // document.location.href = `chrome-extension://odlameecjipmbmbejkplpemijjgpljce/STC/06_PANOTOUR/levels/SITEMAP.html?level=${level}`;   
}


}


// obj.onload = function () {

//     document.body.style.opacity = 1;
//     var svgDocument = obj.contentDocument;
//     resizeFn();
//     window.addEventListener('resize', resizeFn);

//     svg = svgDocument;

//     floorRect = [...svgDocument.querySelectorAll(".block")];
//     floorRect.forEach(singleBlock => {
//         singleBlock.addEventListener('click', clickFloor)
//         singleBlock.addEventListener('mouseenter', mouseOverFloor)
//         singleBlock.addEventListener('mouseleave', mouseLeave)
//     })
// };


