import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontraprodutosComponent } from './montraprodutos.component';

describe('MontraprodutosComponent', () => {
  let component: MontraprodutosComponent;
  let fixture: ComponentFixture<MontraprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontraprodutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontraprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
