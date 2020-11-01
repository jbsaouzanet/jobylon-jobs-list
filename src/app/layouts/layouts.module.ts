import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatCardModule }  from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContent } from './dialog-content/dialog-content.component';
import { FormsModule } from '@angular/forms';
import { MaterialElevationDirective } from './material-elevation-directive/material-elevation.directive';
@NgModule({
    declarations: [
        HeaderComponent, 
        MainComponent,
        DialogContent,
        MaterialElevationDirective
    ],
    exports: [
      HeaderComponent,
      MainComponent,
      DialogContent,
      MaterialElevationDirective
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule
    ],
    providers: [],
    entryComponents:[DialogContent],
    bootstrap: []
})
export class LayoutsModule { }
