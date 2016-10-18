import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HelloWorldComponent} from './hello-world.component';
import {PersonalDataComponent} from "./personal-data.component";

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [
    HelloWorldComponent,
    PersonalDataComponent
  ],
  declarations: [
    HelloWorldComponent,
    PersonalDataComponent
  ]
})
export class ViewInterpolationExamplesModule {
}
