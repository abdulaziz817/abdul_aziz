const Skill = (props) => {
  const {
    link,
    title,
    images,
    desc,
    arial_progress,
    style_porgress,
    progress,
  } = props;
  return (
    <a
      className="md:order-1 mx-3 md:mx-0 relative before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 dark:before:border-gray-500 before:rounded-xl before:transition before:hover:border-2 before:hover:border-slate-900 dark:before:hover:border-gray-100"
      href={link}
    >
      <div className="relative overflow-hidden w-full h-full rounded-xl">
        <div className="p-6 flex flex-col justify-center items-center md:min-h-[150px] text-center rounded-xl ">
          <picture>
            <img src={images} alt="" className="h-20 pb-5" />
          </picture>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 ">
            {title}
          </h3>
          <p className="mt-2 text-gray-500 dark:text-gray-300">{desc}</p>
          <div className="flex w-full mt-5  lg:w-[350px] h-4 bg-gray-200 dark:bg-slate-500 rounded-full overflow-hidden ">
            <div
              className="flex flex-col justify-center overflow-hidden bg-slate-900 dark:bg-slate-100 text-xs dark:text-slate-950 text-white text-center"
              role="progressbar"
              style={{ width: style_porgress }}
              aria-valuenow={arial_progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Skill;
