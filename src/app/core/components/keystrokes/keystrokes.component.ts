import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-keystrokes',
  templateUrl: './keystrokes.component.html',
  styleUrls: ['./keystrokes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeystrokesComponent implements OnInit {

  isVisible = false;

  @HostListener('window:keydown', ['$event']) onKeyDown(evt: KeyboardEvent){
    if (evt.key === '?') {
      this.isVisible = !this.isVisible;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
