/** Angular Imports */
import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule,
         MatCardModule,
         MatDatepickerModule,
         MatNativeDateModule ,
         MatCheckboxModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
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
              MatCheckboxModule,
              MatSidenavModule,
              MatToolbarModule,
              MatListModule],
    exports: [MatButtonModule,
              MatIconModule,
              MatInputModule,
              MatFormFieldModule,
              MatCardModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCheckboxModule,
              MatSidenavModule,
              MatToolbarModule,
              MatListModule]
})
export class MaterialModule {}
