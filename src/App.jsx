"use client";
import Headers from "./components/header";
import styled from "@emotion/styled";
import Hello from "./images/hello.png";
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
  height: 600px;
  width: 600px;
  background-image: url('${Hello}');
  background-size: cover;
  background-size: 430px 450px;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 678px) {
    background-size: 300px 310px;
    height: 310px;
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
  margin-top:5%;
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
      <main>
        <SectionContainer>
          <Gift />
          <ContentContainer>
            <h1 className="text-5xl font-semibold">Hello, World!</h1>
            <p>
            My name is Abdul Aziz, a graduate of SMP Pondok Pesantren Hamalatul Qur'an Karawang.
            I have solid experience as a Graphic Designer with significant achievements,
            including improving work efficiency by 25% using Adobe, Coreldraw, and Figma software.
            </p>
            <p>
            I have a strong interest in advancing my career as a Graphic Designer and am proficient in using various software such as Adobe,
            Coreldraw, and Figma to create innovative and high-quality designs.
            </p>
            <section className="space-x-4">
              <ButtonLink
                link="belumpunya"
                after="Aziz"
                font={<FontAwesomeIcon icon={faLinkedin} />}
              />
              <ButtonLink
                link="https://github.com/abdulaziz817"
                after="abdulaziz817"
                font={<FontAwesomeIcon icon={faGithub} />}
              />
              <ButtonLink
                link="vueziend.vs"
                after="#zizzzzdul"
                font={<FontAwesomeIcon icon={faDiscord} />}
              />
            </section>
          </ContentContainer>
        </SectionContainer>
        <Tab/>
      </main>
      <Footer />
    </>
  );
}

export default App;
