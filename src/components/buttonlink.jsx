import styled from "@emotion/styled";

const IgButton = styled.button`
  position: relative;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent; 
  overflow: hidden;

  &:hover::after {
    content: "${(props) => props.after}";
    position: absolute;
    left: 100%;
    right: -70%;
    white-space: nowrap;
    font-weight: 600;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
  }
`;

const ButtonLink = (props) => {
  const { link, font, after } = props;

  return (
    <IgButton
      className="w-[45px] h-[45px] dark:after:text-white after:text-black hover:pr-20 border rounded-full dark:border-gray-100 border-gray-900 hover:w-40 overflow-hidden"
      after={after}
    >
      <a href={link} className="">
        {font}
      </a>
    </IgButton>
  );
};

export default ButtonLink;
