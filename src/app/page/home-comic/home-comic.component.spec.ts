import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComicComponent } from './home-comic.component';

describe('HomeComicComponent', () => {
  let component: HomeComicComponent;
  let fixture: ComponentFixture<HomeComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
