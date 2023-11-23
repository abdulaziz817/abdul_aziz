/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "@emotion/styled";
import React from "react";
import IconLink from "./iconlink";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./contacs.fromspree";

const Iconspan = styled.span`
  display: flex;
  gap: 1rem;
  padding: 3rem 0 2rem 0;
`;

const Footer = () => {
  return (
    <footer className="py-32 border-t flex justify-center flex-col dark:border-gray-100 border-slate-950">
      <div className=" md:justify-between md:flex px-10">
        <div className="md:w-1/3">
          <span>
            <h1 className="font-bold text-xl md:text-2xl">Ariiq.Maazin.com</h1>
            <p className="font-regular text-sm mt-3 ">
              Coding for me is not just a job, but more like an unexpected
              journey in the world of pixels and bits. With a cup of coffee in
              one hand and a keyboard in the other, I try to weave fun into each
              project, creating something that is not only functional, but also
              full of life. <p className="font-extrabold">#OpenAI</p>
            </p>
          </span>
          <Iconspan>
            <IconLink
              link="https://twitter.com/Kingostyl"
              svg={<FontAwesomeIcon icon={faTwitter} />}
            />
            <IconLink
              link="https://www.instagram.com/arqzin/"
              svg={<FontAwesomeIcon icon={faInstagram} />}
            />
            <IconLink
              link="mailto:ariiqmaazin@gmail.com"
              svg={<FontAwesomeIcon icon={faGoogle} />}
            />
            <IconLink
              link="https://www.facebook.com/profile.php?id=100091630306434"
              svg={<FontAwesomeIcon icon={faFacebook} />}
            />
          </Iconspan>
        </div>
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
