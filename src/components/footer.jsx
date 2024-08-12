/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "@emotion/styled";
import React from "react";
import IconLink from "./iconlink";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
  faWhatsapp,
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
    <footer className="py-32 border-t mt-5 md:mt-0 flex justify-center flex-col dark:border-gray-100 border-slate-950">
      <div className=" md:justify-between md:flex px-10">
        <div className="md:w-1/3">
          <span>
            <h1 className="font-bold text-xl md:text-2xl">Abdul Aziz</h1>
            <p className="font-regular text-sm mt-3 ">
            Designing for me is not just a job, but an unexpected adventure in the world of pixels and bits.
             With a cup of coffee in one hand and a tablet in the other, 
             I'm always ready to dive into the sea of creativity.
              Each project is a new canvas waiting for a magical touch, 
              where wild and innovative ideas can come to life. Every detail, 
              from colors to typography, is carefully chosen to ensure the final result is not 
              only aesthetic but also intuitive and functional. <p className="font-extrabold">   #GraphicDesign #UXDesign #DesignLife #Inspiration</p>
            </p>
          </span>
          <Iconspan id="iconcontact">
            <IconLink
              link="https://x.com/zizzzdul_"
              svg={<FontAwesomeIcon icon={faTwitter} />}
            />
            <IconLink
              link="https://www.instagram.com/zizzz.dul_/"
              svg={<FontAwesomeIcon icon={faInstagram} />}
            />
            <IconLink
              link="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrlFXwCdTHBRhHJhFTHlLZbpPpnRCLQgPdsJgJWDmpFthFkSnTsgLqwJdPmGnhxRjDBNpL"
              svg={<FontAwesomeIcon icon={faGoogle} />}
            />
            <IconLink
              link="https://web.facebook.com/profile.php?id=100051580637450"
              svg={<FontAwesomeIcon icon={faFacebook} />}
            />
             <IconLink
              link="https://api.whatsapp.com/send/?phone=6287782535212&text&type=phone_number&app_absent=0"
              svg={<FontAwesomeIcon icon={faWhatsapp} />}
            />
          </Iconspan>
        </div>
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
