"use client";
import hello from "./images/hello.png";
import Headers from "./components/header";
import styled from "@emotion/styled";
import ButtonLink from "./components/buttonlink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Tab from "./components/tab";
import Footer from "./components/footer";

const Gift = styled.figure`
  padding: 32px;
  height: 500px;
  width: 600px;
  background-image: url(${hello});
  background-size: cover;
  background-size: 550px 350px;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 678px) {
    background-size: 300px 220px;
    height: 220px;
    width: 300px;
  }
`;

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 28px;
  justify-content: center;

  @media (max-width: 980px) {
    flex-direction: column;
    margin-bottom: 5rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 50%;
  @media (min-width: 1800px) {
    width: auto;
  }
  @media (max-width: 980px) {
    width: auto;
    text-align: center;
    padding: 0 10px 0 10px !important;
  }
`;

function App() {
  return (
    <>
      <Headers />
      <main className="py-32">
        <SectionContainer className="mb-10">
          <Gift />
          <ContentContainer>
            <h1 className="text-5xl font-semibold">Hello, World!</h1>
            <p>
              My name is Ariiq Maazin, I'm a front-end developer based in
              Bekasi, Indonesia. I am a programmer specializing in JavaScript
              Frameworks and UI Frameworks.
            </p>
            <p>
              I am very interested in front-end development, including enhancing
              the user interface and improving the overall user experience.
            </p>
            <section className="space-x-4">
              <ButtonLink
                link="belumpunya"
                after="Ariiq"
                font={<FontAwesomeIcon icon={faLinkedin} />}
              />
              <ButtonLink
                link="https://github.com/Kingostyl"
                after="Kingostyl"
                font={<FontAwesomeIcon icon={faGithub} />}
              />
              <ButtonLink
                link="vueziend.vs"
                after="#VUE"
                font={<FontAwesomeIcon icon={faDiscord} />}
              />
            </section>
          </ContentContainer>
        </SectionContainer>
        <Tab />
      </main>
      <Footer />
    </>
  );
}

export default App;
