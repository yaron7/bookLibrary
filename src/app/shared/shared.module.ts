import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent, ModalContent } from './modal/modal.component';
import { TitleForamtPipe } from './title-foramt.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ModalComponent,
    ModalContent,
    TitleForamtPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ModalComponent,
    TitleForamtPipe
  ],
  entryComponents: [ModalContent]
})
export class SharedModule { }
