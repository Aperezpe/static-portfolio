class MediaQuery {
  constructor() {
    const lgPhoneVar = getComputedStyle(document.documentElement).getPropertyValue('--lg-phone');
    const phoneVar = getComputedStyle(document.documentElement).getPropertyValue('--phone');
    this.lgPhone = window.matchMedia(`(max-width: ${lgPhoneVar})`);
    this.phone = window.matchMedia(`(max-width: ${phoneVar})`);

  }

}

const mediaQuery = new MediaQuery();
