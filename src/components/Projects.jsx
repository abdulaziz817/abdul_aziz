const Projects = (props) => {
  const { link, images, names, des } = props;
  return (
    <>
      <a
        class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href={link}
      >
        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
          <img
            class="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
            src={images}
            alt=""
          />
        </div>

        <div class="mt-7">
          <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
            {names}
          </h3>
          <p class="mt-3 text-gray-800 dark:text-gray-200">{des}</p>
          <p class="mt-5 inline-flex items-center gap-x-1 text-slate-900 dark:text-gray-300 decoration-2 font-medium">
            See Web
            <svg
              class="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </a>
    </>
  );
};

export default Projects;
