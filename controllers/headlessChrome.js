const HeadlessChrome = require('simple-headless-chrome')
 
const browser = new HeadlessChrome({
  headless: false, // If you turn this off, you can actually see the browser navigate with your instructions, 
})

async function buyCart(purchaseUrl, shippingInfo) {
  try {
    await browser.init()
    const mainTab = await browser.newTab({ privateTab: false })
    await mainTab.goTo(purchaseUrl);
    await mainTab.click('input[name=add]');
    await mainTab.wait(5000);
    await mainTab.click('input[name=proceedToCheckout]');
    await mainTab.wait(5000);
    await mainTab.setValue('#ap_email','voltx180@gmail.com')
    await mainTab.setValue('#ap_password', '7funnights!')
    await mainTab.click('#signInSubmit')
    await mainTab.wait(10000)
    //await browser.close()
  } catch (err) {
    console.log('ERROR!', err)
  }
}

module.exports = buyCart