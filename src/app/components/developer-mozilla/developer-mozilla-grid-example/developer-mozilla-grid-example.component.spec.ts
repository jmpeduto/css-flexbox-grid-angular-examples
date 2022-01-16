import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperMozillaGridExampleComponent } from './developer-mozilla-grid-example.component';

describe('DeveloperMozillaGridExampleComponent', () => {
  let component: DeveloperMozillaGridExampleComponent;
  let fixture: ComponentFixture<DeveloperMozillaGridExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperMozillaGridExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperMozillaGridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
