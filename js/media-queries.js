class MediaQuery {
  constructor() {
    const lgPhoneVar = getComputedStyle(document.documentElement).getPropertyValue('--lg-phone');
    this.lgPhone = window.matchMedia(`(max-width: ${lgPhoneVar})`);
  }

}

const mediaQuery = new MediaQuery();