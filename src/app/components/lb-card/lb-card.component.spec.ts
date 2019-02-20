import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbCardComponent } from './lb-card.component';

describe('LbCardComponent', () => {
  let component: LbCardComponent;
  let fixture: ComponentFixture<LbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
