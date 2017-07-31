module.exports = {
  'Demo test Amazon' : function (browser) {
    browser
      .url('https://www.amazon.com/')
      .click("#nav-link-accountList")
      .setValue('#ap_email','voltx180@gmail.com')
      .setValue('#ap_password','7funnights!')
      .click('#signInSubmit')
      .click('#nav-cart');
  }
};