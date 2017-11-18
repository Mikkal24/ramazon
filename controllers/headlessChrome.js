const HeadlessChrome = require('simple-headless-chrome')
 
const browser = new HeadlessChrome({
  headless: false,  // If you turn this off, you can actually see the browser navigate with your instructions, 
});

async function buyCart(purchaseUrl, shippingInfo) {
  try {
    await browser.init()
    const mainTab = await browser.newTab({ privateTab: false })
    await mainTab.wait(5000);
    await mainTab.goTo(purchaseUrl);
    await mainTab.click('input[name=add]');
    await mainTab.goTo
    await mainTab.wait(5000);
    await mainTab.click('input[name=proceedToCheckout]');
    await mainTab.wait(5000);
    await mainTab.setValue('#ap_email','boxfullofrandom@gmail.com')
    await mainTab.setValue('#ap_password', '$Pajarit0')
    await mainTab.click('#signInSubmit')
    await mainTab.wait(5000);

    // THIS ONLY WORKS FOR AMAZON PRIME
    // await mainTab.click('#addressChangeLinkId');
    // await mainTab.click("#add-new-address-popover-link");
        console.log("trying to set address values");
    await mainTab.setValue('#enterAddressFullName', shippingInfo.customerName);
    await mainTab.setValue('#enterAddressAddressLine1', shippingInfo.address);
    // await mainTab.setValue('#enterAddressAddressLine2', shippingInfo.);
    await mainTab.setValue('#enterAddressCity', shippingInfo.city);
    await mainTab.setValue('#enterAddressStateOrRegion', shippingInfo.state);
    await mainTab.setValue('#enterAddressPostalCode', shippingInfo.zipCode);
    await mainTab.setValue('#enterAddressPhoneNumber', shippingInfo.phoneNumber);

    await mainTab.click('input[name=shipToThisAddress]');

    await mainTab.wait(5000);
    console.log("trying to click continue...")
    await mainTab.click('input[type=submit]');

    await mainTab.click('#pm_0');
    // await mainTab.setValue('#addCreditCardNumber', "4300640137667889")
    // await mainTab.click('#confirm-card');
    // await mainTab.wait(1000);
    await mainTab.click('#continue-top');
    await mainTab.wait(3000);
    await mainTab.goTo("https://www.amazon.com/gp/buy/prime/handler.html/ref=student_pip_ip_nt_pft?redirectPath=/gp/prime/pip/proceed.html&ie=UTF8&action.checkoutInterstitialDecline=1");
    await mainTab.wait(3000);
    await mainTab.click('input[name=placeYourOrder1]')
    console.log("please for the love of god work")
    // const htmlTag = await mainTab.evaluate(function(selector) {
    //     const selectorHtml = document.querySelector(selector)
    //     return selectorHtml.innerHTML;
    // }, '.grand-total-price');

    // console.log(htmlTag.result.value);
    //await browser.close()
  } catch (err) {
    console.log('ERROR!', err)
  }
}

module.exports = buyCart;

// const HeadlessChrome = require('simple-headless-chrome')
 
// const browser = new HeadlessChrome({
//   headless: true // If you turn this off, you can actually see the browser navigate with your instructions 
//   // see above if using remote interface 
// })
// async function navigateWebsite() {
//   try {
//     await browser.init()
 
//     const mainTab = await browser.newTab({ privateTab: false })
 
//     // Navigate to a URL 
//     await mainTab.goTo('http://www.mywebsite.com/login')
 
//     // Fill an element 
//     await mainTab.fill('#username', 'myUser')
 
//     // Type in an element 
//     await mainTab.type('#password', 'Yey!ImAPassword!')
 
//     // Click on a button 
//     await mainTab.click('#Login')
 
//     // Log some info in your console 
//     await mainTab.log('Click login')
 
//     // Wait some time! (2s) 
//     await mainTab.wait(2000)
 
//     // Log some info in your console, ONLY if you started the app in DEBUG mode (DEBUG='HeadlessChrome*' npm start) 
//     await mainTab.debugLog('Waiting 5 seconds to give some time to all the redirects')
 
//     // Navigate a little... 
//     await mainTab.goTo('http://www.mywebsite.com/myProfile')
 
//     // Check the select current value 
//     const myCurrentSubscriptionPlan = await mainTab.getValue('#subscriptionSelect')
//     console.log(myCurrentSubscriptionPlan) // {type: 'string', value: '1 month' } 
 
//     // Edit the subscription 
//     await mainTab.select('#subscriptionSelect', '3 months')
//     await mainTab.click('#Save')
 
//     // Resize the viewport to full screen size (One use is to take full size screen shots) 
//     await mainTab.resizeFullScreen()
 
//     // Take a screenshot 
//     await mainTab.saveScreenshot('./shc.png')
 
//     // Get a HTML tag value based on class id 
//     const htmlTag = await mainTab.evaluate(function(selector) {
//         const selectorHtml = document.querySelector(selector)
//         return selectorHtml.innerHTML
//     }, '.main'); // returns innerHTML of first matching selector for class "main" 
 
//     // Close the browser 
//     await browser.close()
//   } catch (err) {
//     console.log('ERROR!', err)
//   }
//  }
//  navigateWebsite()