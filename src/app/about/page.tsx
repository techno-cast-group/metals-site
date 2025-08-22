import React from "react";
import Image from "next/image";
import techLogo from "~/assets/Technocast_logo-01f-1-1.png";
import hqImg from "~/assets/3-1024x683.png";
import { Metadata } from "next";
import AnimatedContent from "~/components/blocks/Animations/AnimatedContent/AnimatedContent";
import SpotlightCard from "~/components/blocks/Components/SpotlightCard/SpotlightCard";
import { Icon } from "~/components/icon";
import History from "~/components/history";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Propos",
};

function AboutPage() {
  return (
    <>
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 transition-opacity duration-1000 opacity-100`}
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&h=200)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold uppercase text-white">A Propos</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            VOTRE PARTENAIRE POUR DES SOLUTIONS DE MAINTENANCE EFFICACES.
          </h2>
          <div className="h-1 w-24 bg-red-600 mb-6"></div>
          <p className="mb-4">
            Fondée en 2008, <span className="font-bold">TECHNOCAST</span> s’est
            rapidement imposée comme un partenaire de confiance sur le marché
            algérien, en offrant des solutions de maintenance industrielle à la
            fois efficaces, durables et adaptées aux besoins spécifiques de
            chaque client. Grâce à notre expertise approfondie, nous sommes en
            mesure de réduire les temps d’arrêt de vos équipements, optimiser la
            rentabilité de vos opérations, améliorer la sécurité de vos
            installations et prolonger la durée de vie de vos actifs les plus
            critiques.
          </p>
          <p>
            Notre approche repose sur des solutions sur mesure qui allient
            technologie de pointe et savoir-faire éprouvé. Nous nous engageons à
            obtenir des résultats tangibles et mesurables, contribuant à
            l’atteinte de vos objectifs d’efficacité opérationnelle et à la
            pérennité de vos infrastructures. En travaillant avec{" "}
            <span className="font-bold">TECHNOCAST</span>, vous bénéficiez non
            seulement de l’excellence technique, mais aussi de l’assurance d’une
            gestion proactive de la maintenance, qui vous permettra de faire
            face aux défis industriels de demain avec sérénité.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={techLogo}
            alt="Technocast Group Logo"
            width={180}
            height={60}
            className="mb-6"
            priority
          />
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={hqImg}
              alt="Technocast Building"
              width={500}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      <br />
      <br />

      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={true}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="bg-primary rounded-3xl p-8 shadow-lg text-white max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            TECHNO CAST METALS & ALLOYS
          </h2>
          <div className="flex justify-center mb-6">
            <Image
              width={300}
              height={500}
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=600"
              alt="Techno Cast Metals & Alloys"
              className="rounded-2xl shadow-md w-full max-w-xl h-64 object-cover"
            />
          </div>
          <p className="mb-4">
            <span className="font-bold">TECHNOCAST Metals and Alloys</span>,
            filiale du <span className="font-bold">TECHNOCAST Group</span>, est
            un acteur majeur dans le secteur de la sidérurgie, offrant des
            solutions globales <span className="font-bold">et</span> innovantes
            dans le domaine de l’anti-usure. Spécialisée dans la fabrication et
            le traitement des alliages métalliques,{" "}
            <span className="font-bold">TECHNOCAST Metals and Alloys</span> met
            à la disposition de ses clients son expertise pointue pour répondre
            aux défis techniques de l’industrie sidérurgique, tout en
            contribuant à l’amélioration continue de la performance des
            équipements.
          </p>
          <p>
            Notre mission principale est d’atteindre l’excellence opérationnelle
            à travers une gestion rigoureuse, une innovation constante et une
            écoute attentive des besoins de nos partenaires industriels.
          </p>
        </div>
      </AnimatedContent>

      <br />
      <br />
      <br />

      <h1 className="font-bold text-3xl text-center mb-10">
        Mission, Vision et Valeurs
      </h1>

      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={true}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <SpotlightCard
              className="custom-spotlight-card text-white flex flex-col items-center justify-start h-[400px] w-full max-w-xs mx-auto"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Icon
                icon="streamline-sharp-color:notebook"
                width="32"
                height="32"
              />
              <h2 className="text-4xl font-bold mt-4 mb-2 text-center">
                Mission
              </h2>
              <p className="text-center">
                Chez TECHNOCAST Metals and Alloys, notre mission est d’offrir
                des solutions innovantes et durables pour l’industrie
                sidérurgique, en optimisant les équipements et en réduisant
                l’usure, tout en garantissant la qualité et la performance de
                nos produits et services
              </p>
            </SpotlightCard>

            <SpotlightCard
              className="custom-spotlight-card text-white flex flex-col items-center justify-start h-[400px] w-full max-w-xs mx-auto"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Icon icon="flat-color-icons:binoculars" width="48" height="48" />
              <h2 className="text-4xl font-bold mt-4 mb-2 text-center">
                Vision
              </h2>
              <p className="text-center">
                Devenir le leader mondial des solutions anti-usure et des
                alliages métalliques, reconnu pour notre expertise, notre
                capacité à anticiper les besoins de nos clients et notre
                engagement envers la durabilité.
              </p>
            </SpotlightCard>

            <SpotlightCard
              className="custom-spotlight-card text-white flex flex-col items-center justify-start h-[400px] w-full max-w-xs mx-auto"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Icon
                icon="streamline-stickies-color:plant-1-duo"
                width="40"
                height="40"
              />
              <h2 className="text-4xl font-bold mt-4 mb-2 text-center">
                Valeurs
              </h2>
              <p className="text-center">
                Nos valeurs : Excellence, Innovation, Durabilité, Collaboration,
                Réactivité et Responsabilité. Nous nous engageons à offrir des
                solutions de qualité, innovantes, durables et réactives, tout en
                favorisant la collaboration et en assumant notre responsabilité
                environnementale et sociale.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </AnimatedContent>

      <br />
      <br />
      <br />

      <History />

      <br />
      <br />

      {/* Qualité, Environnement, Certification Section */}
      <div className="flex items-center mb-8 mt-12">
        <div className="bg-gradient-to-r from-primary to-black px-8 py-4 rounded-lg text-white text-2xl font-bold uppercase shadow tracking-wide">
          QUALITÉ, ENVIRONNEMENT, CERTIFICATION
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Qualité Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[320px]">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4 uppercase">
              QUALITÉ
            </h2>
            <p className="text-primary mb-6">
              Techno Cast Groupe est fier d’annoncer l’obtention de la
              certification ISO 9001:2015 pour…..
            </p>
          </div>
          <div className="flex justify-start">
            <Link
              href="#"
              className="inline-flex items-center px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-[#16313F] transition"
            >
              En savoir plus
              <Icon icon="typcn:chevron-right" width="24" height="24" />
            </Link>
          </div>
        </div>

        {/* Environnement Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[320px]">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4 uppercase">
              ENVIRONNEMENT
            </h2>
            <p className="text-primary mb-6">
              Chez Techno Cast, nous sommes résolument engagés envers la
              protection de l’environnement……
            </p>
          </div>
          <div className="flex justify-start">
            <Link
              href="#"
              className="inline-flex items-center px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-[#16313F] transition"
            >
              En savoir plus
              <Icon icon="typcn:chevron-right" width="24" height="24" />
            </Link>
          </div>
        </div>

        {/* Certification Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[320px]">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4 uppercase">
              CERTIFICATION
            </h2>
            <p className="text-primary mb-2">
              ISO 9001 : 2005 Management System
            </p>
            <p className="font-semibold text-primary mb-6">
              <Link href="#" className="underline hover:text-[#16313F]">
                Download Certificate (325 kb)
              </Link>
            </p>
          </div>
          <div className="flex justify-start">
            <Link
              href="#"
              className="inline-flex items-center px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-[#16313F] transition"
            >
              En savoir plus
              <Icon icon="typcn:chevron-right" width="24" height="24" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
