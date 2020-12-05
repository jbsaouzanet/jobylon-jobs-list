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
import { AppComponent } from '../app.component';
import { JobComponent } from './job/job.component';

@NgModule({
    declarations: [
        HeaderComponent, 
        MainComponent,
        DialogContent,
        MaterialElevationDirective,
        JobComponent
    ],
    exports: [
      HeaderComponent,
      MainComponent,
      DialogContent,
      MaterialElevationDirective,
      JobComponent
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
    bootstrap: [AppComponent]
})
export class LayoutsModule { }
