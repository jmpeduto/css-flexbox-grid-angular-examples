import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodepenGridExampleComponent } from './codepen-grid-example.component';

describe('CodepenGridExampleComponent', () => {
  let component: CodepenGridExampleComponent;
  let fixture: ComponentFixture<CodepenGridExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodepenGridExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodepenGridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
