import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTowerComponent } from './overviewTower.component';

describe('DaMainPageComponent', () => {
  let component: OverviewTowerComponent;
  let fixture: ComponentFixture<OverviewTowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewTowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
