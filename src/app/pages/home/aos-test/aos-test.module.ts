import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AosTestRoutingModule } from './aos-test-routing.module';
import { AosTestComponent } from './aos-test.component';


@NgModule({
    declarations: [
        AosTestComponent
    ],
    exports: [
        AosTestComponent
    ],
    imports: [
        CommonModule,
        AosTestRoutingModule
    ]
})
export class AosTestModule { }
