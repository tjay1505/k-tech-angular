import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusContactComponent } from './campus-contact.component';

describe('CampusContactComponent', () => {
  let component: CampusContactComponent;
  let fixture: ComponentFixture<CampusContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampusContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
