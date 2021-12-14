import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardprincipalComponent } from './dashboardprincipal.component';

describe('DashboardprincipalComponent', () => {
  let component: DashboardprincipalComponent;
  let fixture: ComponentFixture<DashboardprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
