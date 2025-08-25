
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/polyfills.i4n1wfLs.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/app.BqHzvwH8.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/en.vBNDtX9U.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/page-OnePage.UrD60slk.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/DeliveryMethodSelectorSection.CJqmAmks.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/useUiComponentsColorContrast.D1vIWbFT.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/VaultedPayment.BafGmALB.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/LocalizationExtensionField.Djpkm6pV.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/ShopPayOptInDisclaimer.D56_9NRn.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/ShipmentBreakdown.D5Ul9XZ3.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/MerchandiseModal._KPIS79g.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/StackedMerchandisePreview.Do1sLzYO.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/PayButtonSection.BOPdC1YZ.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/component-ShopPayVerificationSwitch.Bq4kMges.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/useSubscribeMessenger.CPgTE1WO.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/index.NmLD1CEP.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/assets/app.C44mptmQ.css","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/assets/DeliveryMethodSelectorSection.BvrdqG-K.css","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/assets/StackedMerchandisePreview.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  