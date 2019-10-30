$(`#menuTrigger`).click(function() {
  $(`#headerMenu`).toggleClass(`showHeaderMenu`);
  if ($(`#headerMenu`).hasClass(`showHeaderMenu`)) {
    $(`#menuTrigger`).html('<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.27 32.27"><defs><style>.cls-1{fill:#fff;}</style></defs><title>menuClose</title><rect class="cls-1" x="4.06" y="20.44" width="41.87" height="9.13" rx="4.56" ry="4.56" transform="translate(16.14 51.49) rotate(-135)"/><rect class="cls-1" x="4.06" y="20.44" width="41.87" height="9.13" rx="4.56" ry="4.56" transform="translate(-19.22 16.14) rotate(-45)"/></svg>');
  }
  else {
      $(`#menuTrigger`).html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.88 39.13"><defs><style>.a{fill:#fff;}</style></defs><title>menuHamburger</title><rect class="a" y="15" width="41.88" height="9.12" rx="4.56" ry="4.56"></rect><rect class="a" y="30" width="41.88" height="9.12" rx="4.56" ry="4.56"></rect><rect class="a" width="41.88" height="9.12" rx="4.56" ry="4.56"></rect></svg>');
  }
});
