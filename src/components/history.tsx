/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Icon } from "@iconify-icon/react";
import AnimatedContent from "./blocks/Animations/AnimatedContent/AnimatedContent";

function History() {
  // Define company milestones at the top for clarity
  const milestones = [
    {
      year: "2008",
      icon: <Icon icon="mdi:rocket-launch" width={40} height={40} />,
      title: "Le début",
      desc: "Fondation de TECHNOCAST, début de notre aventure dans la maintenance industrielle.",
    },
    {
      year: "2016",
      icon: <Icon icon="mdi:view-grid" width={40} height={40} />,
      title: "Expansion",
      desc: "Ouverture de nouveaux secteurs d'activité et élargissement de notre équipe.",
    },
    {
      year: "2018",
      icon: <Icon icon="mdi:chart-line" width={40} height={40} />,
      title: "Croissance",
      desc: "Atteinte de nouveaux marchés et augmentation significative de notre clientèle.",
    },
    {
      year: "2021",
      icon: <Icon icon="mdi:account-group" width={40} height={40} />,
      title: "Innovation",
      desc: "Lancement de solutions innovantes pour l'industrie sidérurgique.",
    },
    {
      year: "2022",
      icon: <Icon icon="mdi:target-variant" width={40} height={40} />,
      title: "Certification",
      desc: "Obtention de certifications qualité et reconnaissance sectorielle.",
    },
    {
      year: "2023",
      icon: <Icon icon="mdi:trophy" width={40} height={40} />,
      title: "Récompenses",
      desc: "Récompenses pour l'excellence et l'innovation dans notre domaine.",
    },
    {
      year: "2024-2025",
      icon: <Icon icon="mdi:account-group-outline" width={40} height={40} />,
      title: "Avenir",
      desc: "Projets de développement et expansion internationale.",
    },
  ];

  // activeIndex determines which card is visible; default to the first milestone
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-4 text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Notre Histoire
      </h2>
      <div className="flex justify-center mb-8">
        <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
      </div>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        Découvrez le parcours extraordinaire de Techno Cast à travers les
        moments clés qui ont façonné notre entreprise.
      </p>

      {/* Timeline (DaisyUI Steps) */}
      <div className="flex justify-center">
        <div className="steps steps-horizontal gap-6">
          {milestones.map((step, idx) => (
            <div
              key={step.year}
              // mark active step
              className={`step ${
                idx === activeIndex ? "step-primary" : ""
              } cursor-pointer`}
              aria-label={step.title}
              role="button"
              tabIndex={0}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveIndex(idx);
              }}
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-500/80 p-3 text-white mb-2 shadow-lg">
                  {React.isValidElement(step.icon)
                    ? React.cloneElement(
                        step.icon as React.ReactElement,
                        { width: 24, height: 24 } as any
                      )
                    : step.icon}
                </div>
                <div className="text-sm text-black font-semibold">
                  {step.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10">
        {milestones.map((step, idx) =>
          idx === activeIndex ? (
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
              key={step.year}
            >
              <div className="bg-primary rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-500/20">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-blue-400">
                  {step.title}
                </h3>
                <span className="text-sm text-black mb-2">{step.year}</span>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            </AnimatedContent>
          ) : null
        )}
      </div>
    </section>
  );
}

export default History;
