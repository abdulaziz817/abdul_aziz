import React from "react";

function List(props) {
  const { link, names } = props;

  return (
    <li>
      <a href={link}>{names}</a>
    </li>
  );
}

export default List;
