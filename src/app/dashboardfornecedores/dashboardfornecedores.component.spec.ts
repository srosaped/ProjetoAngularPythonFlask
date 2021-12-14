import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardfornecedoresComponent } from './dashboardfornecedores.component';

describe('DashboardfornecedoresComponent', () => {
  let component: DashboardfornecedoresComponent;
  let fixture: ComponentFixture<DashboardfornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardfornecedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardfornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
