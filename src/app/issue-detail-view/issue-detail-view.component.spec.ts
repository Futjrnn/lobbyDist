import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailViewComponent } from './issue-detail-view.component';

describe('IssueDetailViewComponent', () => {
  let component: IssueDetailViewComponent;
  let fixture: ComponentFixture<IssueDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
