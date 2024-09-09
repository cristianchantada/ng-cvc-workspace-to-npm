import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvcSideMenuComponent, TitleColor } from 'cvc-side-menu';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CvcSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'cvc-testbed-app';
  TitleColor = TitleColor;
  public isAuthenticated = signal(false);

}
