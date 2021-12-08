import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component/dynamic-component.component';
import { DynamicTextComponent } from './dynamic-component/dynamic-components/dynamic-text/dynamic-text.component';
import { DynamicComponentHostDirective } from './dynamic-component/dynamic-component-host.directive';
import { DynamicGenderComponent } from './dynamic-component/dynamic-components/dynamic-gender/dynamic-gender.component';
import { DynamicTextlistComponent } from './dynamic-component/dynamic-components/dynamic-textlist/dynamic-textlist.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DynamicComponentHostDirective,
    DynamicComponentComponent,
    DynamicTextComponent,
    DynamicGenderComponent,
    DynamicTextlistComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
