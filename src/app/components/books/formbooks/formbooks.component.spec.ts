import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbooksComponent } from './formbooks.component';

describe('FormbooksComponent', () => {
  let component: FormbooksComponent;
  let fixture: ComponentFixture<FormbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormbooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
