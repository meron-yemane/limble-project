import {
  Component,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { TagUserModalService } from '../../services/tag-user-modal/tag-user-modal.service';

@Component({
  selector: 'app-tag-user-modal',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './tag-user-modal.component.html',
  styleUrl: './tag-user-modal.component.css',
})
export class TagUserModalComponent implements OnInit, OnDestroy {
  @Input({
    required: true,
  })
  id?: string;
  tagUserModalService = inject(TagUserModalService);
  isOpen = false;
  private modalElement: ElementRef;

  constructor(private element: ElementRef) {
    this.modalElement = element;
  }

  ngOnInit() {
    this.tagUserModalService.add(this);
  }

  ngOnDestroy() {
    this.tagUserModalService.remove(this);
  }

  open() {
    this.modalElement.nativeElement.style.display = 'block';
    document.body.classList.add('modal-open');
    this.isOpen = true;
  }

  close() {
    this.modalElement.nativeElement.style.display = 'none';
    document.body.classList.remove('modal-open');
    this.isOpen = false;
  }
}
