import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { BurgerAndSideMenuStateService } from '@core/services/burger-and-side-menu-state.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { USER_INFO } from '@shared/constants/user-info.constant';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly breakpointObserver = inject(BreakpointObserver);

  protected readonly burgerMenuState = inject(BurgerAndSideMenuStateService);

  protected userInfo = USER_INFO;

  public ngOnInit() {
    this.breakpointObserver.observe(Breakpoints.Large).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.burgerMenuState.setStateBurgerMenu(false);
      } else {
        this.burgerMenuState.setStateBurgerMenu(true);
      }
    });
  }
}
