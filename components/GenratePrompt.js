const GenratePrompt = (prompt, slug) => {
  const { title, description, language, keywords, tone, time, platform } =
    prompt;

  let userPrompt;
  switch (slug) {
    case 'ig-reel-script':
      userPrompt = `Assume you are content creator. Write content in ${language} for a Instagrm Reel on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'tiktok-script':
      userPrompt = `Assume you are content creator. Write content in ${language} for a Tiktok on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'yt-shorts-script':
      userPrompt = `Assume you are content creator. Write content in ${language} for a Youtube Shorts on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'app':
      userPrompt = `Assume you are a content creator. Write content in ${language} for a Tiktok on following. Topic: ${title}, description: ${description}, keywords: ${keywords}, Tone: ${tone}, Time to read the content: ${time}, Start the script with 1 sentence hook so that people will want to stop and watch the content creator, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'paragraph-writer':
      userPrompt = `Write 5-6 line paragraph in ${language} for following. Topic: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'sentence-expander':
      userPrompt = `Continue writing following Sentence in ${language}. Sentence: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'content-rewriter' || 'sentence-rewriter':
      userPrompt = `Rewrite following content in ${language}. Content: ${title}, Tone: ${tone}`;
      break;
    case 'sales-copy':
      userPrompt = `Write Sales Copy in ${language} for a landing page based on following. Product/Service Name: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the copy with 1 sentence hook, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'social-post-idea':
      userPrompt = `Write 3 Social Media Post ideas in one line for ${platform} in ${language} based on following. Topic: ${title}, keywords: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-video-idea':
      userPrompt = `Write 3 Youtube Video Ideas for Youtube in ${language} based on following. Topic: ${title}, keywords: ${keywords} Tone: ${tone}`;
      break;
    case 'content-idea':
      userPrompt = `Write 3 content ideas in ${language} for following. Topic: ${title}, Tone: ${tone}`;
      break;
    case 'twitter-bio':
      userPrompt = `Write 3 one line Twitter Bio in ${language} for me based on following. About Me: ${title}, Interests: ${keywords}, Tone: ${tone}, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'social-media-post':
      userPrompt = `Assume you are a social media expert. Write content in ${language} for a ${platform} post on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'instagram-caption':
      userPrompt = `Assume you are Instagram content creator. Write Instagram Caption in ${language} on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the Caption with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'linkedin-post':
      userPrompt = `Assume you are linkedin content creator. Write content in ${language} for a linkedin post on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'linkedin-story-post':
      userPrompt = `Assume you are linkedin content creator. Write linkedin Story post in ${language} on following. Story Topic: ${title}, Story description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit-size sentences and put each sentence in the next line.`;
      break;
    case 'linkedin-post-hook':
      userPrompt = `Assume you are linkedin content creator. Write 1 sentence hook so that people will want to stop scrolling. Write in ${language} for a linkedin post on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'tiktok-hook':
      userPrompt = `Assume you are Tiktok content creator. Write 1 sentence hook so that people will want to stop scrolling. Write in ${language} for a Tiktok video on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-hook':
      userPrompt = `Assume you are youtube content creator. Write 1 sentence hook so that people will want to stop scrolling. Write in ${language} for a Youtube video on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'facebook-post':
      userPrompt = `Assume you are facebook content creator.Write content in ${language} for a facebook post on following.Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}, Start the content with 1 sentence hook so that people will want to stop, make sure to write the content in bit - size sentences and put each sentence in the next line.`;
      break;
    case 'twitter-tweet':
      userPrompt = `Assume you are Twitter content creator.Write Tweet in ${language} for a Twitter post on following.Tweet Topic: ${title}, keyword: ${keywords}, Tone: ${tone}, Start the tweet with 1 sentence hook so that people will want to stop, make sure to write the content in bit - size sentences and put each sentence in the next line.`;
      break;
    case 'twitter-thread':
      userPrompt = `Assume you are Twitter content creator.Write Twitter Thread in ${language} for a Twitter on following.Thread Topic: ${title}, keyword: ${keywords}, Tone: ${tone}, Start the tweet with 1 sentence hook so that people will want to stop, make sure to write the content in bit - size sentences and put each sentence in the next line.`;
      break;
    case 'definition':
      userPrompt = `Write definition in ${language} for following.Topic: ${title}, Tone: ${tone}`;
      break;
    case 'hashtag':
      userPrompt = `Write 30 hashtag all lowercase without bullet point in ${language} for ${platform} post on following.Topic: ${title}, description: ${description}. note: don't add serial number count till 30`;
      break;
    case 'twitter-hashtag':
      userPrompt = `Write 5 hashtag all lowercase without bullet point in ${language} for Twitter post on following.Tweet Topic: ${title}`;
      break;
    case 'linkedin-hashtag':
      userPrompt = `Write 5 hashtag all lowercase without bullet point in ${language} for linkedin post on following. Topic: ${title}`;
      break;
    case 'tiktok-hashtag':
      userPrompt = `Write 5 hashtag all lowercase without bullet point in ${language} for tiktok video on following. video: ${title}`;
      break;
    case 'youtube-hashtag':
      userPrompt = `Write 10 hashtag all lowercase without bullet point in ${language} for youtube video on following. video: ${title}`;
      break;
    case 'youtube-tag':
      userPrompt = `Write 5  youtube video tags in ${language} for following. video: ${title}`;
      break;
    case 'facebook-hashtag':
      userPrompt = `Write 20 hashtag all lowercase without bullet point in ${language} for facebook post on following. Topic: ${title}`;
      break;
    case 'instagram-hashtag':
      userPrompt = `Write 30 hashtag all lowercase without bullet point in ${language} for instagram post on following. Topic: ${title},`;
      break;
    case 'youtube-intro':
      userPrompt = `Assume you are youtube content creator. Write 2 sentence hook intro so that people will want to stop scrolling. Write in ${language} for a Youtube video on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-video-outline':
      userPrompt = `Assume you are youtube content creator. Write Youtube Video Outline in ${language} for a Youtube video on following. Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-seo-title':
      userPrompt = `Assume you are SEO expert. Write 3 Youtube SEO Title in ${language} for a Youtube video on following. Video title: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'youtube-seo-description':
      userPrompt = `Assume you are SEO expert. Write 3 Youtube SEO description in ${language} for a Youtube video on following. Video title: ${title}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'email-subject':
      userPrompt = `Write 3 Email Subject lines in ${language} for following. Email Topic/description: ${title}, Tone: ${tone},`;
      break;
    case 'blog-post-idea':
      userPrompt = `Write 3 Blog Post Ideas for online blog in ${language} based on following.Blog Topic: ${title}, keywords: ${keywords}, Tone: ${tone}. make the ideas clickbaity.`;
      break;
    case 'blog-post-title':
      userPrompt = `Write 3 Blog Post Titles for online blog in ${language} based on following.Blog Topic: ${title}, keywords: ${keywords}, Tone: ${tone}. make the Title clickbaity.`;
      break;
    case 'blog-post-outline':
      userPrompt = `Assume you are SEO expert.Write Blog Post Outline in ${language} for an online blog on following.Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone};`;
      break;
    case 'blog-post-hook':
      userPrompt = `Assume you are blog content creator. Write 1 sentence hook so that people will want to read the full blog. Write in ${language} for a online blog on following. Blog Topic: ${title}, description: ${description}, keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'article-rewriter':
      userPrompt = `Rewrite following article in ${language}. article Title: ${description} Content: ${title}, Tone: ${tone};`;
      break;
    case 'blog-rewriter':
      userPrompt = `Rewrite following Blog post Paragraph in ${language}. Blog Post Title: ${description} Content: ${title}, Tone: ${tone};`;
      break;
    case 'blog-paragraph-writer':
      userPrompt = `Write 5-6 line blog paragraph in ${language} for Online blog on following. blog title/topic: ${title}, description: ${description} keyword: ${keywords}, Tone: ${tone}`;
      break;
    case 'company-name-generator':
      userPrompt = `Write 3 company name for a business-based on following. company description: ${title}, keyword: ${keywords},`;
      break;
    case 'blog-name-generator':
      userPrompt = `Write 3 blog name for a blog-based on following. blog description: ${title}, keyword: ${keywords},`;
      break;
    default:
      break;
  }
  return userPrompt;
};

export default GenratePrompt;
