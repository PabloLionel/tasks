import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatGridListModule,
  MatSidenavModule,
  MatCheckboxModule
} from '@angular/material';
// import {
//   DragDropModule
// } from '@angular/cdk/drag-drop';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  imports: [
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    NguCarouselModule,
    MatCheckboxModule],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    NguCarouselModule,
    MatCheckboxModule],
})
export class MaterialModule { }
