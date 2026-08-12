import { CONFIG } from "../data/config";
import { linkWhatsapp, linkEmail } from "../utils/links";
import Eyebrow from "../components/ui/Eyebrow";
import Seta from "../components/ui/Seta";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="sec sec-cta">
      <div className="cta-glow" aria-hidden="true" />

      <div className="wrap cta-in">
        <div>
          <Eyebrow>VAMOS TRABALHAR JUNTOS?</Eyebrow>
          <h2 className="h1-cta">
            TEM UM PROJETO
            <br />
            EM MENTE?
          </h2>
          <p className="p">Me chama e vamos criar algo incrível juntos.</p>
        </div>

        <div className="cta-btns">
          <a className="btn btn-solid" href={linkWhatsapp()} target="_blank" rel="noreferrer">
            CHAMAR NO WHATSAPP <Seta />
          </a>
          <a className="btn btn-ghost" href={CONFIG.instagram} target="_blank" rel="noreferrer">
            INSTAGRAM {CONFIG.instagramHandle} <Seta />
          </a>
          <a className="cta-mail mono" href={linkEmail()}>
            ou escreva para {CONFIG.email}
          </a>
        </div>
      </div>
    </section>
  );
}
