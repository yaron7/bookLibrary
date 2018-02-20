import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ModalComponent } from './shared/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private isChecked: boolean;

  constructor(private dataService: DataService) { 
    this.subscribeHamburgerBtn();
  }

  checked() {
    this.dataService.toggleHamburgerBtn(!this.isChecked)
  }

  private subscribeHamburgerBtn() {
    this.dataService.isChecked
      .subscribe(res => {
        this.isChecked = res;
      });
  }
}
