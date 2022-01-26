import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorEventComponent } from './visitor-event.component';

describe('VisitorEventComponent', () => {
  let component: VisitorEventComponent;
  let fixture: ComponentFixture<VisitorEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
