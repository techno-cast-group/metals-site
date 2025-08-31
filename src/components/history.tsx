"use client";

import { JSX } from "react";
import { Icon } from "@iconify-icon/react";

type Milestone = {
  icon: JSX.Element;
  title: string;
  desc: string;
  id: string;
};

import React, { useState } from "react";

function History() {
  // Define company milestones at the top for clarity
  const milestones: Milestone[] = [
    {
      id: "2008",
      icon: <Icon icon="mdi:rocket-launch" width={40} height={40} />,
      title: "Le début",
      desc: "En 2008, à Damous, Tipaza, une équipe déterminée se lance dans l'aventure entrepreneuriale. Avec des moyens modestes mais une passion profonde, elle se spécialise dans la maintenance des convoyeurs, l'anti-usure et les pièces de fonderie.",
    },
    {
      id: "2016",
      icon: <Icon icon="mdi:view-grid" width={40} height={40} />,
      title: "Expansion",
      desc: "Ouverture de nouveaux secteurs d'activité et élargissement de notre équipe.",
    },
    {
      id: "2018",
      icon: <Icon icon="mdi:chart-line" width={40} height={40} />,
      title: "Croissance",
      desc: "Atteinte de nouveaux marchés et augmentation significative de notre clientèle.",
    },
    {
      id: "2021",
      icon: <Icon icon="mdi:account-group" width={40} height={40} />,
      title: "Innovation",
      desc: "Lancement de solutions innovantes pour l'industrie sidérurgique.",
    },
    {
      id: "2022",
      icon: <Icon icon="mdi:target-variant" width={40} height={40} />,
      title: "Certification",
      desc: "Obtention de certifications qualité et reconnaissance sectorielle.",
    },
    {
      id: "2023",
      icon: <Icon icon="mdi:trophy" width={40} height={40} />,
      title: "Récompenses",
      desc: "Récompenses pour l'excellence et l'innovation dans notre domaine.",
    },
    {
      id: "2024-2025",
      icon: <Icon icon="mdi:account-group-outline" width={40} height={40} />,
      title: "Avenir",
      desc: "Projets de développement et expansion internationale.",
    },
  ];

  // State to track selected milestone
  const [selectedId, setSelectedId] = useState(milestones[0].id);
  const selectedMilestone = milestones.find((m) => m.id === selectedId);

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

      {/* Timeline navigation */}
      <ul className="flex items-center justify-between mb-12 px-2">
        {milestones.map((milestone) => (
          <li
            key={milestone.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedId(milestone.id)}
          >
            <div
              className={`rounded-full p-2 transition-all duration-300 ${
                selectedId === milestone.id
                  ? "bg-secondary shadow-lg"
                  : "bg-primary"
              }`}
            >
              {milestone.icon}
            </div>
            <span
              className={`mt-2 text-sm font-semibold ${
                selectedId === milestone.id
                  ? "text-purple-400"
                  : "text-gray-400"
              }`}
            >
              {milestone.id}
            </span>
            <span
              className={`text-xs ${
                selectedId === milestone.id
                  ? "font-bold text-white"
                  : "text-gray-500"
              }`}
            >
              {milestone.title}
            </span>
          </li>
        ))}
      </ul>

      {/* Selected milestone card */}
      {selectedMilestone && (
        <div className="mx-auto mb-8 max-w-2xl bg-primary rounded-xl shadow-lg p-8 border border-purple-700">
          <div className="flex items-center mb-4">
            <div className="bg-secondary rounded-lg p-3 mr-4">
              {selectedMilestone.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-200 mb-1">
                {selectedMilestone.title}
              </h3>
              <span className="text-lg text-purple-400 font-semibold">
                {selectedMilestone.id}
              </span>
            </div>
          </div>
          <p className="text-gray-200 text-base">{selectedMilestone.desc}</p>
        </div>
      )}
    </section>
  );
}

export default History;
