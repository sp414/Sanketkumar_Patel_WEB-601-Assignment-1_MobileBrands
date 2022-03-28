import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyContentListComponent } from './modify-content-list.component';

describe('ModifyContentListComponent', () => {
  let component: ModifyContentListComponent;
  let fixture: ComponentFixture<ModifyContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyContentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
