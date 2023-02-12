import { HeroCard } from "../Components/HeroCard";
import { ContactForm } from "../Components/ContactForm";

export const HeroSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 text-center lg:text-start px-8 lg:grid-cols-2 max-w-[1100px] flex mx-auto mt-20">
        <div className="mt-56 lg:mt-0">
          <div className="text-[50px] md:text-[56px] font-bold">
            <h1 id="test">Vite</h1>
          </div>
          <div className="text-[35px] md:text-[45px] font-[700] mb-4 max-w-[550px] mx-auto sm:px-20 text-center md:text-start md:px-0 text-gray-100">
            <h1 className="leading-none ">Next Generation Frontend Tooling</h1>
          </div>
          <div className="font-[500] text-[20px] md:text-[24px] text-gray-400 max-w-[550px] mx-auto">
            <h1>
              Get ready for a development environment that can finally catch up
              with you.
            </h1>
          </div>
          <div className="flex pt-8 justify-center flex-wrap lg:justify-start space-x-6 gap-y-4 font-[600] text-[14px] text-white">
            <button className="shadow-xl border border-gray-600 bg-button-color rounded-2xl p-2 px-4 w-fit">
              Get Started
            </button>
            <button className="shadow-xl border border-gray-600 bg-button-color-2 rounded-2xl p-2 px-4 w-fit">
              Why Vite?
            </button>
            <button className="shadow-xl border border-gray-600 bg-button-color-2 rounded-2xl p-2 px-4 w-fit">
              View On GitHub
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div id="test2" className="md:mt-10"></div>
          <img
            id="test3"
            className=""
            src="https://vitejs.dev/logo-with-shadow.png"
            alt="Vite"
            data-v-d43214f0=""
          />
        </div>
      </div>
      <div className="grid md:px-12 lg:px-auto px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-24 mt-[-130pxs] max-w-[1200px] mx-auto">
        <HeroCard
          title="Instant Server Start"
          desc="On demand file serving over native ESM, no bundling required!"
          icon="💡"
        />
        <HeroCard
          title="Lightning Fast HMR"
          desc="Hot Module Replacement (HMR) that stays fast regardless of app size."
          icon="⚡️"
        />
        <HeroCard
          title="Rich Features"
          desc="Out-of-the-box support for TypeScript, JSX, CSS and more."
          icon="🛠️"
        />
        <HeroCard
          title="Optimized Build"
          desc="Pre-configured Rollup build with multi-page and library mode support."
          icon="📦"
        />
        <HeroCard
          title="Universal Plugins"
          desc="Rollup-superset plugin interface shared between dev and build."
          icon="🔩"
        />
        <HeroCard
          title="Fully Typed APIs"
          desc="Flexible programmatic APIs with full TypeScript typing."
          icon="🔑"
        />
      </div>
      <ContactForm />
    </div>
  );
};
