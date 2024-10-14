import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BurgerAndSideMenuStateService {
  private readonly $isBurgerMenu = signal(false);

  public isBurgerMenu = this.$isBurgerMenu.asReadonly();

  public isSideMenu = computed(() => !this.$isBurgerMenu);

  public setStateBurgerMenu(isBurgerMenu: boolean) {
    this.$isBurgerMenu.set(isBurgerMenu);
  }
}
