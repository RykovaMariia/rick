import { Component, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { BurgerAndSideMenuStateService } from '@core/services/burger-and-side-menu-state.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatExpansionModule, RouterLink, MatIconModule, MatListModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  protected readonly burgerMenuState = inject(BurgerAndSideMenuStateService);

  protected readonly panelOpenState = signal(false);
}
