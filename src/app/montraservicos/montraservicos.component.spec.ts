import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontraservicosComponent } from './montraservicos.component';

describe('MontraservicosComponent', () => {
  let component: MontraservicosComponent;
  let fixture: ComponentFixture<MontraservicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontraservicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontraservicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
