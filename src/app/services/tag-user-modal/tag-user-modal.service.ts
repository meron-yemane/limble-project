import { Injectable } from '@angular/core';
import { TagUserModalComponent } from '../../components/tag-user-modal/tag-user-modal.component';

@Injectable({
  providedIn: 'root',
})
export class TagUserModalService {
  private modals: TagUserModalComponent[] = [];
  constructor() {}

  add(modal: TagUserModalComponent) {
    if (
      !modal.id ||
      this.modals.find((preexistingModal) => preexistingModal.id === modal.id)
    ) {
      throw new Error('modal must have unique ID attribute');
    }

    this.modals.push(modal);
  }

  remove(modalToRemove: TagUserModalComponent) {
    this.modals = this.modals.filter((modal) => modal.id !== modalToRemove.id);
  }

  open(id: string) {
    const modalToOpen = this.modals.find((modal) => modal.id === id);
    if (!modalToOpen) throw new Error(`modal with id ${id} not found`);
    modalToOpen.open();
  }

  close() {
    const modal = this.modals.find((modal) => modal.isOpen);
    modal?.close();
  }
}
