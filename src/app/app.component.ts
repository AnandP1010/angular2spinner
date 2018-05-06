import { Component } from '@angular/core';

import { SpinnerService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private spinTimeout = 1;

  constructor(private spinnerService: SpinnerService) {
  }

  public callspiner(event: MouseEvent): void {
      
      this.spinnerService.show();
     
  }

  public stopspiner(event: MouseEvent): void {
      
        this.spinnerService.hide();
    
}


}
