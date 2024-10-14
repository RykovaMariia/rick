import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BurgerAndSideMenuStateService {
  private readonly $isBurgerMenu = signal(false);

  public isBurgerMenu = this.$isBurgerMenu.asReadonly();

  private readonly $isOpenBurgerMenu = signal(false);

  // public isOpenBurgerMenu = this.$isOpenBurgerMenu.asReadonly();

  public isSideMenu = computed(() => !this.$isBurgerMenu() || this.$isOpenBurgerMenu());

  public setStateBurgerMenu(isBurgerMenu: boolean) {
    this.$isBurgerMenu.set(isBurgerMenu);
  }

  public toggleOpenBurgerMenu() {
    this.$isOpenBurgerMenu.update((isOpen) => !isOpen);
  }
}
