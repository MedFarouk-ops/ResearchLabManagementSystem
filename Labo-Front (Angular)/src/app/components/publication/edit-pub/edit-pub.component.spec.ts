import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPubComponent } from './edit-pub.component';

describe('EditPubComponent', () => {
  let component: EditPubComponent;
  let fixture: ComponentFixture<EditPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
