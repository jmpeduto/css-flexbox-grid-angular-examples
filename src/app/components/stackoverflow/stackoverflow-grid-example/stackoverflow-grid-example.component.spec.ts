import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackoverflowGridExampleComponent } from './stackoverflow-grid-example.component';

describe('StackoverflowGridExampleComponent', () => {
  let component: StackoverflowGridExampleComponent;
  let fixture: ComponentFixture<StackoverflowGridExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackoverflowGridExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackoverflowGridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
