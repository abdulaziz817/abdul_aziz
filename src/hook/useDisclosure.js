import { useState } from "react";

let useDisclosure = () => {
  const [disclosure, setDisclosure] = useState(false);

  let popup = () => {
    setDisclosure(!disclosure);
  };

  return {
    disclosure,
    popup,
  };
};

export default useDisclosure;
