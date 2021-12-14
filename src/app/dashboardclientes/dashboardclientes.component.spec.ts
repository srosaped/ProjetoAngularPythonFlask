import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardclientesComponent } from './dashboardclientes.component';

describe('DashboardclientesComponent', () => {
  let component: DashboardclientesComponent;
  let fixture: ComponentFixture<DashboardclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
