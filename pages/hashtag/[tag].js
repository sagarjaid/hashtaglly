import Footer from '@/components/Footer';
import HelloBar from '@/components/HelloBar';
import Menu from '@/components/Menu';
import Nav from '@/components/Nav';
import SEOMeta from '@/components/SEOMeta';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { tagObj } from '@/components/tagObj';

const Tag = () => {
  const router = useRouter();

  const tag = router.query.tag;

  const handleClick = (tag) => {
    console.log(tag);
    const href = `/hashtag/${tag}`;
    router.push(href);
  };

  const [firstSet, setFirstSet] = useState(
    'loging most popular hashtag set...'
  );
  const [secondSet, setSecondSet] = useState('loging hashtag set...');
  const [thirdSet, setThirdSet] = useState('loging hashtag set...');
  const [tagList, setTagList] = useState();
  const [Loading, setLoading] = useState(true);

  let prompt = {
    title: router.query.tag,
    description: '',
    platform: 'Facebook',
    language: 'English',
  };

  const getData = async () => {
    const response1 = await fetch('/api/getxGPTdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: prompt, slug: 'hashtag' }),
    });

    // const response2 = await fetch('/api/getGPTdata', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ prompt: prompt, slug: 'hashtag' }),
    // });

    // const response3 = await fetch('/api/getGPTdata', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ prompt: prompt, slug: 'hashtag' }),
    // });

    const resData1 = await response1.json();
    // const resData2 = await response2.json();
    // const resData3 = await response3.json();

    const DataArr1 = resData1.result.replace(/\n/g, ' ').toLowerCase();

    console.log(DataArr1);
    setFirstSet(DataArr1);

    // const DataArr2 = resData2.result.replace(/\n/g, " ").toLowerCase();
    // console.log(DataArr2);
    // setSecondSet(DataArr2);

    // const DataArr3 = resData3.result.replace(/\n/g, " ").toLowerCase();
    // console.log(DataArr3);
    // setThirdSet(DataArr3);

    setTagList();

    setLoading(false);
  };

  useEffect(() => {
    console.log(prompt, 'prompt');

    getData();
  }, []);

  return (
    <>
      <div className="relative">
        <SEOMeta
          title={`Hashtags for ${tag} on Instagram, Tiktok in 2023 [Updated]`}
          description={`Top 30 ${tag} hashtags. Hashtags for ${tag} on Instagram, Tiktok, twitter & more. Best ${tag} hashtags. 2023 UPDATED!`}
          slug={tag}
        />
        <HelloBar />
        <main>
          <div className="m-auto flex h-screen max-w-5xl flex-col items-center text-base">
            <Nav />
            <div className="flex w-full flex-col justify-around border-y p-4 mdx:flex-row">
              <div className="flex w-full flex-col gap-4">
                <h1 className="text-2xl font-bold">Hashtags for {tag}</h1>
                <h2 className="text-xl">
                  Top #{tag} hashtags on Instagram, Twitter, TikTok
                </h2>
                <div>
                  The most popular and related hashtag for {tag} are as follows
                </div>
                <hr />
                <h3 className="text-lg">#{tag} Hashtags</h3>
                <div className="relative text-sm">
                  <textarea
                    className="w-full rounded-md border border-green-600 bg-green-50 p-2"
                    rows={6}
                    type="text"
                    spellCheck={false}
                    value={firstSet}
                  />
                  <button className="absolute bottom-4 right-3 float-right rounded-md border bg-black px-2 py-0.5 text-white ">
                    copy
                  </button>
                </div>
                {secondSet && (
                  <div className="relative text-sm">
                    <textarea
                      className="w-full rounded-md border border-green-600 bg-green-50 p-2"
                      rows={6}
                      type="text"
                      spellCheck={false}
                      value={secondSet}
                    />
                    <button className="absolute bottom-4 right-3 float-right rounded-md border bg-black px-2 py-0.5 text-white ">
                      copy
                    </button>
                  </div>
                )}
                <h4>
                  Similar hashtags are those words that contain the same word
                  base as the searched hashtag.
                </h4>
                <div className="relative text-sm">
                  <textarea
                    className="w-full rounded-md border border-blue-600 bg-blue-50 p-2"
                    rows={6}
                    type="text"
                    spellCheck={false}
                    value={thirdSet}
                  />
                  <button className="absolute bottom-4 right-3 float-right rounded-md border bg-black px-2 py-0.5 text-white ">
                    copy
                  </button>
                </div>{' '}
                <strong>
                  <div className="text-xs">
                    TIP: Instagram allows about 30 hashtags per post so make
                    sure you maximize the chance by adding all 30 hashtags in a
                    post
                  </div>
                </strong>
                {tagList && (
                  <>
                    <div>
                      <h3>Related Hashtags to {tag}</h3>
                      Related hashtags are those words that are most commonly
                      used on Instagram in IG Post.
                    </div>
                    <div className="flex flex-col gap-1 rounded-md border p-4 text-sm">
                      {tagList?.map((el, i) => (
                        <div key={i}>{el}</div>
                      ))}
                    </div>
                  </>
                )}
                <div>
                  We update this page frequently, make sure you bookmark this
                  website.
                </div>
                Love the Tool? Without you our platform is just a bunch of code
                here and there. Please Share Hashtaglly.com with friends. Thank
                you!
                <div>
                  View {tag} from Social Media Instagram, TikTok, Youtube,
                  Facebook, Twitter, Ello, Reddit, Line, Pinterest, Tumblr
                </div>
                <div className="flex flex-wrap gap-1 text-xs">
                  {tagList?.map((el, i) => (
                    <span className="rounded-md  border  px-2" key={i}>
                      {el}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mdx:hidden">
                <h3 className="py-4 text-xl font-bold">
                  Popular Instagram Hashtags
                </h3>
                <ul className=" flex max-w-2xl cursor-pointer flex-col gap-2 pr-2">
                  {tagObj?.map((tag) => {
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

              <div className="hidden h-screen pl-8 mdx:block mdx:w-1/3 mdx:overflow-y-scroll">
                <Menu />
              </div>
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

export default Tag;
