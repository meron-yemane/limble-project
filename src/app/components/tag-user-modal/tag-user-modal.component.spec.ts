import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagUserModalComponent } from './tag-user-modal.component';

describe('TagUserInCommentModalComponent', () => {
  let component: TagUserModalComponent;
  let fixture: ComponentFixture<TagUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagUserModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TagUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
