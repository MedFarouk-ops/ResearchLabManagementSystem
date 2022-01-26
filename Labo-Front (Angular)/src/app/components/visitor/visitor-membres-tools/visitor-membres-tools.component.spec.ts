import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorMembresToolsComponent } from './visitor-membres-tools.component';

describe('VisitorMembresToolsComponent', () => {
  let component: VisitorMembresToolsComponent;
  let fixture: ComponentFixture<VisitorMembresToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorMembresToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorMembresToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
