import { Component } from '@angular/core';
import { thirdDirective } from './thirdDirective';


// Define second directive.
@Component({
  // Selector uses lower case with hyphens.
  selector: 'second-directive',
  template: `<h3>This is the second directive!</h3>`,
})
export class NewDirective {
}

@NgModule({
  declarations: [
    thirdDirective
  ],
})

