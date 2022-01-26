import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorMembresPubsComponent } from './visitor-membres-pubs.component';

describe('VisitorMembresPubsComponent', () => {
  let component: VisitorMembresPubsComponent;
  let fixture: ComponentFixture<VisitorMembresPubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorMembresPubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorMembresPubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
