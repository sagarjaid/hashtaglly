import React from 'react';
import { domainUrl } from './domainUrl';
import { tagObj } from './tagObj';
import { useRouter } from 'next/router';

const Menu = ({ handleToogle }) => {
  const router = useRouter();

  const handleClick = (tag) => {
    console.log(tag);
    const href = `/hashtag/${tag}`;
    router.push(href);
  };

  return (
    <>
      <div className="flex w-full flex-col bg-white text-xs">
        <div className="flex items-center border-b p-4">
          <div className="flex w-full flex-col ">
            <span className="text-md font-bold ">LIST TOP 100 HASHTAGS !</span>
            <span className="text-[9px] text-green-600">
              (scroll to see more hashtags ↓)
            </span>
          </div>
          <div onClick={handleToogle} className="text-xl mdx:hidden">
            <svg
              className="w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="w-full px-2">
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
      </div>
    </>
  );
};

export default Menu;
