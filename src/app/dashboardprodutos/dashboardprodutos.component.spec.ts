import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardprodutosComponent } from './dashboardprodutos.component';

describe('DashboardprodutosComponent', () => {
  let component: DashboardprodutosComponent;
  let fixture: ComponentFixture<DashboardprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardprodutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
