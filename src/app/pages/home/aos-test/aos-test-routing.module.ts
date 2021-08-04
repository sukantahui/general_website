import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AosTestComponent } from './aos-test.component';

const routes: Routes = [{ path: '', component: AosTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AosTestRoutingModule { }
