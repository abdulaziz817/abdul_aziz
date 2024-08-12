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
      <div className="w-auto">
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
            className="hs-tab-active:font-semibold hs-tab-active:border-slate-900 hs-tab-active:text-slate-900 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-slate-900 focus:text-slate-900 disabled:opacity-50 disabled:pointer-events-none dark:hs-tab-active:border-white/70 dark:hs-tab-active:text-white/70 dark:text-gray-400 dark:hover:text-white"
            id="horizontal-alignment-item-3"
            data-hs-tab="#horizontal-alignment-3"
            aria-controls="horizontal-alignment-3"
            role="tab"
          >
            Certificate
          </button>
        </nav>
      </div>
      <div className="mt-3">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          className="grid grid-cols-12 gap-4 w-full xl:gap-4 md:p-10"
        >
          <div className="col-span-12 md:col-span-6 md:order-2 lg:col-span-4 grid gap-4 xl:gap-6">
            <Skill
              images={Rect}
              title="ReactJS"
              desc="Library JavaScript"
              arial_progress="30%"
              progress="30"
              style_porgress="30%"
            />
            <Skill
              images={
                "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
              }
              title="Adobe"
              desc="Adobe Photoshop"
              arial_progress="75%"
              progress="75"
              style_porgress="75%"
            />
            <Skill
              images={
                "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
              }
              title="Adobe Illustrator"
              desc="Illustration Design"
              arial_progress="80%"
              progress="80"
              style_porgress="80%"
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:order-2 lg:col-span-4 grid gap-4 xl:gap-6">
            <Skill
              images={
                "https://upload.wikimedia.org/wikipedia/commons/f/f1/CorelDraw_Logo.png"
              }
              title="CorelDraw"
              desc=" Advertising Design"
              arial_progress="87%"
              progress="87"
              style_porgress="87%"
            />
            <Skill
              images={
                "https://i.pinimg.com/736x/18/f1/72/18f1727873924ba58fde1f739d11b77b.jpg"
              }
              title="Figma"
              desc="UI/UX"
              arial_progress="75%"
              progress="75"
              style_porgress="75%"
            />
            <Skill
              images={
                "https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png"
              }
              title="Flutter"
              desc="Mobile Development"
              arial_progress="50%"
              progress="50"
              style_porgress="50%"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 md:order-3 grid md:grid-cols-2 lg:grid-cols-1 gap-4 xl:gap-6">
            <Skill
              images={
                "https://play-lh.googleusercontent.com/RKt7FfLHYfXyEJkY2imqAe1BP96wjAHtm7tH_rZZmBBX2QkC_2luYj6jXlPqoRhX5HmB"
              }
              title="Adobe Express "
              desc="Typography"
              arial_progress="79%"
              progress="79"
              style_porgress="79%"
            />
            <Skill
              images={
                "https://cdn.worldvectorlogo.com/logos/canva-1.svg"
              }
              title="Canva"
              desc="Poster Design"
              arial_progress="85%"
              progress="85"
              style_porgress="85%"
            />
            <Skill
              images={
                "https://play-lh.googleusercontent.com/RGvuFCqPOIiR1i9QDN6-HNt5nOuWj4zuqQduxnJn0ughdo-yhAJNG1r6W1A3Fc6Z9w=w240-h480-rw"
              }
              title="Lightroom"
              desc="Design Platform"
              arial_progress="82%"
              progress="82"
              style_porgress="82%"
            />
          </div>
        </div>

        <div
          id="horizontal-alignment-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-3"
        >
          <div className="grid lg:grid-cols-2 gap-6 p-10">
            <Serti
              link="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.mygreatlearning.com%2Fcertificate%2FERIHYZLQ&hashtag=%23GreatLearning"
              desc_serti=""
              from_sertifikat="Great Learning"
            />
          </div>
          {/* <div className="grid lg:grid-cols-2 gap-6 p-10">
            <Serti
              link="https://www.dicoding.com/certificates/81P27761QZOY?fbclid=IwY2xjawEhLGhleHRuA2FlbQIxMQABHTBl8KelqofN7YB_1nt8WmamKRX_xv7B7dK6wLhgmOyHz-KDb0IIr6JQxg_aem_diIDSRdiy1HeCUSWvHJ2Lg"
              desc_serti=""
              from_sertifikat="Dicoding"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Tab;
