import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { LogoTypeComponent } from './global/logo-type/logo-type.component';
import { ContinueComponent } from './global/continue/continue.component';

@NgModule({
  declarations: [LayoutComponent, LogoTypeComponent, ContinueComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
