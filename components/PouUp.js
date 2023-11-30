import React from 'react';
import { useEffect, useState } from 'react';

const PouUp = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const adBoxEl = document.querySelector('.ad-box');
      const hasAdBlock = window.getComputedStyle(adBoxEl)?.display === 'none';
      console.log(hasAdBlock, 'hasAdBlock');
      setShowBanner(hasAdBlock);
    }, 1200);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div
        className="ad-box"
        style={{ position: 'fixed', top: 0, left: 0 }}
        aria-hidden="true"
      ></div>
      {showBanner && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl p-4">
              <div className="relative flex w-full flex-col items-center gap-4 rounded-xl border-0 bg-white px-8 py-10 text-center shadow-lg outline-none focus:outline-none">
                <img className="w-16" src="/favicon.png"></img>
                <div>
                  <div className="text-lg font-bold">
                    Please disable all Adblockers!
                  </div>
                  <div className="mt-1">
                    Without Advertment We Won't be able to offer Hashtaglly for
                    FREE!
                  </div>
                </div>
                <div
                  className="cursor-pointer rounded-full bg-blue-600 p-2 px-4 text-sm text-white"
                  onClick={() => window.location.reload()}
                >
                  I have disabled AdBlockers manually
                </div>
                <div
                  className="-mt-2 cursor-pointer text-[10px] text-blue-500"
                  onClick={handleToggle}
                >
                  Learn How to disable AdBlocker ▽
                </div>
                {toggle && (
                  <iframe
                    className="aspect-video w-11/12 rounded-xl border-4 border-rose-600 bg-blue-600"
                    title="How to Disable AdBlock on Google Chrome"
                    src="https://www.youtube.com/embed/OdIGBz5koX4"
                    allowfullscreen="true"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      )}
    </>
  );
};

export default PouUp;
