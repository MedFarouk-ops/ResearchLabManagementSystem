import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorMembresComponent } from './visitor-membres.component';

describe('VisitorMembresComponent', () => {
  let component: VisitorMembresComponent;
  let fixture: ComponentFixture<VisitorMembresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorMembresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
