import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BurgerAndSideMenuStateService } from '@core/services/burger-and-side-menu-state.service';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [MatSidenavModule, SideMenuComponent, RouterOutlet],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss',
})
export class ManagementComponent {
  protected readonly burgerMenuState = inject(BurgerAndSideMenuStateService);
}
