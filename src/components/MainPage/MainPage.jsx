import React from "react";
import { Button } from "../Button";
import { Page } from "../Page";
import { Section } from "../Section";
import "./style.css";

export const MainPage = ({ className, overlapClassName }) => {
  return (
    <div className={`main-page ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <Page className="page-instance" />
        <Section
          className="section-eligibility"
          text="Elegibilité"
          text1={
            <>
              Selon le dernier test, vous etes:
              <br />
              <br />
              Eligible !
            </>
          }
        />
        <Section
          className="section-schedule"
          text="Prochain RDV"
          text1={
            <>
              Votre prochain rendez-vous est prévu le
              <br />
              <br />
              26/01/2024 à 14h30
            </>
          }
        />
        <Section
          className="section-FAQ"
          text="FAQ"
          text1={
            <>
              La piqure fait elle mal ?<br />
              Y’a t’il du chocolat apres le don ?<br />
              Combien de personne vais-je aider ?
            </>
          }
        />
        <Button className="button-instance" text="Prendre Rendez-vous" />
      </div>
    </div>
  );
};
