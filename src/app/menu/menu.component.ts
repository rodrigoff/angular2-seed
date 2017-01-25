import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'menu',
  styles: [`
    :host {
      height:36px;
    }
  `],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public ngOnInit() {
    console.log('Starting MenuComponent', );
  }

}
