import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

import Typewriter from 'typewriter-effect';
import { domainUrl } from '@/components/domainUrl';
import HelloBar from '@/components/HelloBar';
import Head from 'next/head';

const Home = () => {
  const handleDescription = () => {
    console.log('hello');
  };

  return (
    <>
      <Head>
        <title>Scrip AI - Free AI writer [100% FREE - No Login required]</title>
        <meta
          name="title"
          content="Scrip AI - Free AI writer [100% FREE - No Login required]"
        />
        <meta
          name="description"
          content="10X faster & free way to write AI content for 100+ use cases, try Free AI writer powerd by Scrip AI "
        />
        <link rel="canonical" href="https://Hashtaglly.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Hashtaglly.com/" />
        <meta
          property="og:title"
          content="Scrip AI - Free AI writer [100% FREE - No Login required]"
        />
        <meta
          property="og:description"
          content="10X faster & free way to write AI content for 100+ use cases, try Free AI writer powerd by Scrip AI "
        />
        <meta
          property="og:image"
          content="https://Hashtaglly.com/scrip-ai-cover.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://Hashtaglly.com/" />
        <meta
          property="twitter:title"
          content="Scrip AI - Free AI writer [100% FREE - No Login required]"
        />
        <meta
          property="twitter:description"
          content="10X faster & free way to write AI content for 100+ use cases, try Free AI writer powerd by Scrip AI "
        />
        <meta
          property="twitter:image"
          content="https://Hashtaglly.com/scrip-ai-cover.png"
        />
        <link rel="icon" href="https://Hashtaglly.com/favicon.png" />

        <meta
          name="google-site-verification"
          content="Yp9e-xgEgjFSdaOwKgO0bv66QN5ScCpFxlGr0F8qUWk"
        />
      </Head>
      <HelloBar />
      <main className="m-auto flex h-screen max-w-5xl flex-col">
        <Nav />
        <div className="flex h-full flex-col items-center justify-between gap-6 p-4 pt-24">
          <div className="flex flex-col items-center gap-8">
            <div className="line flex flex-col text-center text-base font-extrabold xs:text-2xl sdm:text-4xl sm:gap-3 md:text-5xl mdx:text-6xl ">
              <span>Find Best hastag for</span>
              <span className="text-green-600">
                <Typewriter
                  options={{
                    strings: ['Youtube', 'TikTok', 'Instagram', 'Facebook'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            <input
              type="text"
              placeholder="Search a hashtag here..."
              className="h-12 w-full max-w-lg rounded-md  border-2 p-3 text-xs shadow-sm placeholder:text-center placeholder:text-xs placeholder:text-gray-600"
              // value=""
              // onChange={handleDescription}
            />

            <div className="flex flex-col items-center gap-1 text-center text-xs text-gray-600 sm:text-base">
              <span>✓ No credit card required</span>
              <span>✓ No login is required</span>
            </div>

            {/* <a
            className="sd:hidden"
            href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
            target="_blank"
          >
            <img
              className="w-36"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
            />
          </a> */}
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
