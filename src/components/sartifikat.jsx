import sertifikat from "../images/sertifikat.png"
import user from "../images/userjinx.jpeg"


let Serti = (props) => {
  const { link, from_sertifikat, desc_serti } = props;
  return (
    <a
      class="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={link}
    >
      <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img
          class="w-full h-full absolute top-0 start-0 object-cover"
          src={sertifikat}
          alt=""
        />
      </div>

      <div class="absolute top-0 inset-x-0 z-10">
        <div class="p-4 flex flex-col h-full sm:p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-[2.875rem] object-cover w-[2.875rem] border-2 border-white rounded-full"
                src={user}
                alt=""
              />
            </div>
            <div class="ms-2.5 sm:ms-4">
              <h4 class="font-semibold text-white">Ariiq</h4>
              <p class="text-xs text-white/[.8]">Sep 16, 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 inset-x-0 z-10">
        <div class="flex flex-col h-full p-4 sm:p-6">
          <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
            {from_sertifikat}
          </h3>
          <p class="mt-2 text-white/[.8]">
           {desc_serti}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Serti;
