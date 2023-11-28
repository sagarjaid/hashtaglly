import HelloBar from '@/components/HelloBar';
import Nav from '@/components/Nav';
import SEOMeta from '@/components/SEOMeta';
import Tools from '@/components/Tools';

const AITools = () => {
  return (
    <>
      <SEOMeta
        title="100+ AI Tools [100% FREE - No Login required] — Scrip AI"
        description="Boost your productivity with over 100+ FREE AI tools - No login required. No credit card required. Discover the power of Scrip AI and revolutionize your workflow. Enhance efficiency"
        slug="ai-tools"
      />
      {/* <div className=" w-full bg-yellow-400 px-4 py-2 text-center">
        If you refer this tool to only one friend, You'll make my day :)
      </div> */}
      <HelloBar />
      <main>
        <div className="m-auto flex max-w-5xl flex-col items-center text-sm">
          <Nav />
          <Tools />
        </div>
      </main>
    </>
  );
};

export default AITools;
