import '@/styles/globals.css';
import Script from 'next/script';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-4ZWBVE0WBE`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-4ZWBVE0WBE');
  `}
      </Script>
      <Component {...pageProps} />

      <Script
        async={true}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8500986101092156"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />

      <Script
        strategy="afterInteractive"
        onLoad={() => {
          console.log('hjar');
        }}
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3415164,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />

      <Script
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Script has loaded');
        }}
      >{`
        (function() {
          function relaodAds() {
             console.log("reloads got called");
            setTimeout(() => {
               console.log("setTimeout got called");

              if (document) {

                 console.log("if got called");

                var ad1 = document.getElementById("aswift_1")
                var ad2 = document.getElementById("aswift_2")
                var ad3 = document.getElementById("aswift_3")


                if(ad1){
                ad1.src = ad1.src
                }

                if(ad2){
                ad2.src = ad2.src
                }

                if(ad3){
                ad3.src = ad3.src
                }
              }
            }, 30000);
          }
          relaodAds();
        })();
      `}</Script>
    </>
  );
}
