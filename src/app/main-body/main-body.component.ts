import { Component, OnInit } from '@angular/core';
import {seaProjects} from '../../assets/data/data';
import {ISeaProjects} from '../model/interfaces';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  seaItemArr: ISeaProjects[] = seaProjects;
  constructor() { }

  ngOnInit(): void {
  }

}
