import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutilComponent } from './add-outil.component';

describe('AddOutilComponent', () => {
  let component: AddOutilComponent;
  let fixture: ComponentFixture<AddOutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
