import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicByIdComponent } from './comic-by-id.component';

describe('ComicByIdComponent', () => {
  let component: ComicByIdComponent;
  let fixture: ComponentFixture<ComicByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
