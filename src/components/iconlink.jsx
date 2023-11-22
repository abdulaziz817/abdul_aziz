import React from "react";
const IconLink = (props) => {
  const { svg, link } = props;

  return (
    <a
      class="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent dark:text-gray-100 dark:hover:bg-white/10 text-slate-950 hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-gray-600"
      href={link}
    >
      {svg}
    </a>
  );
};

export default IconLink;
