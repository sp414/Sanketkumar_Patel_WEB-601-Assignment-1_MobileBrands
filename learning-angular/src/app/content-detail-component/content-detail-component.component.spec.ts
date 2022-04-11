import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailComponentComponent } from './content-detail-component.component';

describe('ContentDetailComponentComponent', () => {
  let component: ContentDetailComponentComponent;
  let fixture: ComponentFixture<ContentDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
