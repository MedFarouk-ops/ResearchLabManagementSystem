import {NgModule} from '@angular/core';

import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ConfirmDialogComponent } from './components/member/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
})
export class ConfirmDialogModule {
}
