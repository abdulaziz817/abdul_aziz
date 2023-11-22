/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";
import { useScroll } from "../hook/useScroll";
import Swith from "./darkmode.switch";
import styled from "@emotion/styled";
import useDisclosure from "../hook/useDisclosure";
const { default: List } = require("./List");

const DivToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  justify-content: center;

  ul {
    opacity: ${({ disclosure }) => (disclosure ? 1 : 0)};
    transition: opacity 0.4s ease-in all;
  }
`;

const DivMd = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
`;

const Headers = () => {
  const { scrollDirection } = useScroll();
  const { disclosure, popup } = useDisclosure();
  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
  };
  return (
    <header
      style={scrollDirection === "up" ? styles.hidden : styles.active}
      class="mx-auto w-full fixed top-0 z-50 dark:bg-slate-dark bg-white"
    >
      <nav>
        <div
          className={
            disclosure
              ? "flex justify-between  z-40 pt-3 pb-40 relative px-2 xl:px-0 max-w-5xl items-center mx-auto"
              : "flex justify-between z-40 pt-3 pb-3 px-2 relative xl:px-0 max-w-5xl items-center mx-auto"
          }
        >
          <div>
            <span className="font-bold text-xl md:text-2xl">
              Ariiq.Maazin.com
            </span>
          </div>

          <DivMd>
            <ul class="nav-custom md:grid hidden justify-items-center gap-x-5">
              <List link="" names={"Skills"} />
              <List link="" names={"Projects"} />
              <List link="" names={"Contacts"} />
            </ul>
            <DivToggle disclosure={disclosure}>
              <Swith />
              <button
                onClick={popup}
                class=" p-2 md:hidden inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200  text-gray-800  dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                {disclosure ? (
                  <svg
                    class=" flex-shrink-0 w-4 h-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    class=" flex-shrink-0 w-4 h-4"
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
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                )}
              </button>

              <ul className="flex flex-col py-2 md:hidden fixed left-2 top-16 gap-y-3 px-2">
                <List link="" names={"Skills"} />
                <List link="" names={"Projects"} />
                <List link="" names={"Contacts"} />
              </ul>
            </DivToggle>
          </DivMd>
        </div>
      </nav>
    </header>
  );
};

export default Headers;
