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
          <ul className="flex max-w-xl cursor-pointer flex-col gap-2 p-4">
            {tagObj?.map((tag, i) => {
              return (
                <li>
                  <span
                    onClick={() => handleClick(tag?.tag)}
                    className="flex justify-between"
                  >
                    <span>#{tag?.tag}</span>
                    <span>{tag?.posts}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="p-4">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Tools;
