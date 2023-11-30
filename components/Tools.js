import React from 'react';
import Footer from './Footer';
import { domainUrl } from './domainUrl';
import { tagObj } from './tagObj';
import { useRouter } from 'next/router';

const Tools = () => {
  const router = useRouter();

  const handleClick = (tag) => {
    console.log(tag);
    const href = `/hashtag/${tag}`;
    router.push(href);
  };

  return (
    <>
      <div className="w-full">
        <h1 className="p-4 text-xl font-bold">
          100 Most Popular Instagram Hashtags
        </h1>
        <hr />
        <div className="flex flex-col flex-wrap  sm:flex-row">
          <div className=" flex w-full cursor-pointer flex-col gap-2 p-4">
            {tagObj?.map((tag) => {
              return (
                <a
                  key={tag?.tag}
                  href={`${domainUrl}/hashtag/${tag?.tag}`}
                  className="flex justify-between border-b pb-2 text-blue-600"
                >
                  <span>#{tag?.tag}</span>
                  <span>{tag?.posts}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="p-4">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Tools;
