import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefbotCaseComponent } from './chefbot-case.component';

describe('ChefbotCaseComponent', () => {
  let component: ChefbotCaseComponent;
  let fixture: ComponentFixture<ChefbotCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefbotCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefbotCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
