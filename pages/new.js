import React from 'react';
import SEOMeta from '@/components/SEOMeta';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import HelloBar from '@/components/HelloBar';

const WhatsNew = () => {
  return (
    <>
      <SEOMeta
        title="What's New | FREE AI TikTok, Reel & YT Shorts Script Writer — Scrip AI"
        description="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        slug="new"
      />
      <HelloBar />
      <main className="m-auto flex max-w-5xl flex-col">
        <Nav />
        <div className="flex flex-col items-start justify-center gap-6 px-4 py-10 ">
          <div className="flex flex-col gap-2 text-4xl font-medium">
            What's new!
            <div className="text-sm">Updated on 15 may, 2023</div>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md bg-blue-50 p-4">
            <div className="text-xl"> ✅ Hashtaglly is FREE*!</div>
            <div className="text-sm text-gray-900">15 May, 2023</div>
            <div className="flex flex-col gap-3">
              <span>
                We have cross 27K+ users using Hashtaglly. out of which 500 are
                daily active users.
              </span>
              <span>
                Also We are adding more 100+ FREE usecase in Hashtaglly.
              </span>
              <span>
                Users pay almost $30 per month on ther platfroms like copyAI,
                jasperAI for same usecase which are FREE here on Hashtaglly.
              </span>
              <span>
                We have decided to keep the Hashtaglly FREE till 1 Jan 2024.
              </span>
              <span>After 1 Jan 2024 We will revalidate this decision.</span>
              <span>
                {' '}
                We are able to do this with Ads on this website as the money
                earned from these ads pays few of the expenses.
              </span>
              <span>
                {' '}
                Checkout new FREE tools{' '}
                <a href="/ai-tools" className="text-blue-600">
                  {' '}
                  here
                </a>
                .
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md bg-blue-50 p-4">
            <div className="text-xl"> ✅ 13K+ Users in 13 days!</div>
            <div className="text-sm text-gray-900">1 April, 2023</div>
            <div className="flex flex-col gap-3">
              <span> We have cross 10K+ users using Hashtaglly. </span>
              Few marketing campaigns in the pipeline to improve visibility of
              Hashtaglly among content creators on Tiktok, Reels & YT shorts.
            </div>
            <img src="/traffic.png" className="rounded-md sm:w-2/3" />
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md bg-blue-50 p-4">
            <div className="text-xl">
              {' '}
              ✅ Hashtaglly is FREE for limited time!
            </div>
            <div className="text-sm text-gray-900">19 Mar, 2023</div>
            <div className="flex flex-col gap-3">
              <span>
                {' '}
                I as user really form my heart wanted to have this product free
                & free for lifetime.
              </span>
              <span>
                {' '}
                Scrip AI is bulit on top of openai business api where each call
                to server cost few cents to dollers.
              </span>
              <span>
                {' '}
                We have created a fund of $150 to keep the app free for limited
                time.
              </span>
              <span>
                {' '}
                Once this fund is finshed we may launch freeimum plan to keep
                scrip ai alive.
              </span>
              <span>
                {' '}
                Otherwise we may add more $100 + to the fund to continue
                offering the Hashtaglly for FREE!
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-md bg-blue-50 p-4">
            <div className="text-xl"> ✅ Hashtaglly is live!</div>
            <div className="text-sm text-gray-900">18 Mar, 2023</div>
            <div className="flex flex-col gap-3">
              <span>
                Scrip AI is really excited to show it's first look and the first
                use case.{' '}
              </span>{' '}
              <span>
                with Scrip AI now you can write viral 30 sec - 60 sec short
                video script for Instagram Reel, TikTok and Youtube shorts 10X
                faster.
              </span>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default WhatsNew;
