// ---------- Home Page Scripts ----------
export const initHomePageScripts = () => {
    // Google tag (gtag.js)
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-17465611354";
    document.head.appendChild(gtagScript);

    // Google Analytics configuration
    const configScript = document.createElement("script");
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17465611354');
    `;
    document.head.appendChild(configScript);

    // Microsoft Clarity
    const clarityScript = document.createElement("script");
    clarityScript.type = "text/javascript";
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "ttkvc3otpo");
    `;
    document.head.appendChild(clarityScript);

    return () => {
        document.head.removeChild(gtagScript);
        document.head.removeChild(configScript);
        document.head.removeChild(clarityScript);
    };
};


// ---------- Thank You Page Scripts ----------
export const initThankYouPageScripts = () => {
    // Google tag (gtag.js)
    // const gtagScript = document.createElement("script");
    // gtagScript.async = true;
    // gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-17465611354";
    // document.head.appendChild(gtagScript);

    // // Google Analytics configuration
    // const configScript = document.createElement("script");
    // configScript.innerHTML = `
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'AW-17465611354');
    // `;
    // document.head.appendChild(configScript);

    // // Event snippet for Al Mamsha Conversion conversion page
    // const conversionScript = document.createElement("script");
    // conversionScript.innerHTML = `
    //   gtag('event', 'conversion', {'send_to': 'AW-17465611354/ZC53COy29rAbENqooIhB'});
    // `;
    // document.head.appendChild(conversionScript);

    // return () => {
    //     document.head.removeChild(gtagScript);
    //     document.head.removeChild(configScript);
    //     document.head.removeChild(conversionScript);
    // };

    // Google tag (gtag.js)
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-17673947347";
    document.head.appendChild(gtagScript);

    // Google Analytics configuration
    const configScript = document.createElement("script");
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17673947347');
    `;
    document.head.appendChild(configScript);

    // Event snippet for Page view conversion page
    const conversionScript = document.createElement("script");
    conversionScript.innerHTML = `
      gtag('event', 'conversion', {
          'send_to': 'AW-17673947347/U3rMCJL7oLIbENORzOtB',
          'value': 1.0,
          'currency': 'AED'
      });
    `;
    document.head.appendChild(conversionScript);

    return () => {
        document.head.removeChild(gtagScript);
        document.head.removeChild(configScript);
        document.head.removeChild(conversionScript);
    };
};
