import Projects from "./Projects";
import Skill from "./Skils";
import Lopercourse from "../images/lopercourse.png";
import Leafmails from "../images/leafmails.png";
import Rect from "../images/react.png";
import Serti from "./sartifikat";
import Lauchpad from "../images/launchpad.png";

import("preline");

const Tab = () => {
  return (
    <section>
      <div className=" w-auto">
        <nav
          className="-mb-0.5 flex justify-center space-x-6"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-slate-900 hs-tab-active:text-slate-900 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-slate-900 focus:text-slate-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-tab-active:border-white/70 dark:hs-tab-active:text-white/70 dark:text-gray-400 dark:hover:text-white active"
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            Skills
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-slate-900 hs-tab-active:text-slate-900 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-slate-900  focus:text-slate-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-tab-active:border-white/70 dark:hs-tab-active:text-white/70 dark:text-gray-400 dark:hover:text-white"
            id="horizontal-alignment-item-2"
            data-hs-tab="#horizontal-alignment-2"
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            Projects
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-slate-900 hs-tab-active:text-slate-900 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-slate-900 focus:text-slate-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-tab-active:border-white/70 dark:hs-tab-active:text-white/70 dark:text-gray-400 dark:hover:text-white"
            id="horizontal-alignment-item-3"
            data-hs-tab="#horizontal-alignment-3"
            aria-controls="horizontal-alignment-3"
            role="tab"
          >
            certificate
          </button>
        </nav>
      </div>
      <div className="mt-3 ">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          className="grid grid-cols-12  gap-4 w-full xl:gap-4 md:p-10"
        >
          <div className="col-span-12 md:col-span-6 md:order-2 lg:col-span-4 grid gap-4 xl:gap-6">
            <Skill
              images={Rect}
              title="ReactJS"
              desc="Library JavaScript"
              arial_progress="60%"
              progress="60"
              style_porgress="60%"
            />

            <Skill
              images={
                "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              }
              title="Tailwind Css"
              desc="Framework CSS"
              arial_progress="90%"
              progress="90"
              style_porgress="90%"
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:order-2 lg:col-span-4 grid gap-4 xl:gap-6">
            <Skill
              images={
                "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              }
              title="JavaScript"
              desc="Web Language"
              arial_progress="50%"
              progress="50"
              style_porgress="50%"
            />

            <Skill
              images={"https://i.ibb.co/JcstByf/dart.png"}
              title="Dart"
              desc="MultiFlatfom Language"
              arial_progress="30%"
              progress="30"
              style_porgress="30%"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 md:order-3 grid md:grid-cols-2 lg:grid-cols-1 gap-4 xl:gap-6">
            <Skill
              images={
                "https://developer.apple.com/assets/elements/icons/swift/swift-96x96_2x.png"
              }
              title="Swift"
              desc="Apple Language"
              arial_progress="20%"
              progress="20"
              style_porgress="20%"
            />

            <Skill
              images={
                "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              }
              title="TypeScript"
              desc="Compiler JS"
              arial_progress="40%"
              progress="40"
              style_porgress="40%"
            />
          </div>
        </div>
        <div
          id="horizontal-alignment-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2"
        >
          <span className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
            <Projects
              images={Lopercourse}
              names="Lopercourse"
              des="Website team AIR yang membuat untuk training ujian"
              link="https://lopercourse.com/"
            />
            <Projects
              images={Leafmails}
              names="LeafMails"
              des="Website untuk latihan CSS dan JS"
              link="https://leafmails.site/"
            />
            <Projects
              images={Lauchpad}
              names="Launchpad APP"
              des="Remact appple launchpad"
              link="https://lauchpad-ten.vercel.app/"
            />
          </span>
        </div>
        <div
          id="horizontal-alignment-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-3"
        >
          <div class="grid lg:grid-cols-2 gap-6 p-10">
            <Serti
              link="https://www.dicoding.com/certificates/JLX1WDML6P72"
              desc_serti="Belajar Dasar Pemograman Web"
              from_sertifikat="Dicoding Academy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab;
