import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-cvc-side-menu',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './cvc-side-menu.component.html',
})
export class CvcSideMenuComponent {

  public isAuthenticated = input(false);
  public titleColor = input<TitleColor>(TitleColor.purple);

  public onSignOut = output();
  public onSignIn = output();

}
