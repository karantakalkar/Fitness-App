/** Angular Imports */
import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule,
         MatCardModule,
         MatDatepickerModule,
         MatNativeDateModule ,
         MatCheckboxModule
       } from '@angular/material';

/** 
 * Angular Material Module
 */
@NgModule({
    imports: [MatButtonModule,
              MatIconModule,
              MatInputModule,
              MatFormFieldModule,
              MatCardModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCheckboxModule],
    exports: [MatButtonModule,
              MatIconModule,
              MatInputModule,
              MatFormFieldModule,
              MatCardModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCheckboxModule]
})
export class MaterialModule {}
