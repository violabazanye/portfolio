import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbcComponent } from './tbc.component';

describe('TbcComponent', () => {
  let component: TbcComponent;
  let fixture: ComponentFixture<TbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
