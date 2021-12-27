import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilListComponent } from './outil-list.component';

describe('OutilListComponent', () => {
  let component: OutilListComponent;
  let fixture: ComponentFixture<OutilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutilListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
