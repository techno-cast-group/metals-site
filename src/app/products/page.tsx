import Image from "next/image";
import FadeContent from "~/components/blocks/Animations/FadeContent/FadeContent";
import SpotlightCard from "~/components/blocks/Components/SpotlightCard/SpotlightCard";
import { Icon } from "~/components/icon";

function Products() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen border border-base-300 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <Image
              src="https://images.unsplash.com/photo-1676065701768-17185472200c?q=80&w=428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Box Office News"
              width={500}
              height={500}
            />
          </FadeContent>
          <div>
            <h1 className="text-7xl font-bold">
              Excellence en métallurgie depuis 2016
            </h1>
            <p className="py-6">
              Techno Cast Metals s'est imposé comme un leader dans la production
              d'alliages métalliques de haute qualité et la fabrication de
              composants sur mesure. Notre maîtrise des techniques de fonderie
              et notre innovation constante nous permettent de fournir des
              solutions métallurgiques avancées pour les industries les plus
              exigeantes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <SpotlightCard
                className="glass"
                spotlightColor={"rgba(56, 189, 248, 0.24)"}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-neutral-800 flex items-center justify-center">
                    <Icon
                      icon="mdi:shield-check"
                      width={24}
                      height={24}
                      className="text-sky-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Qualité Supérieure
                    </h3>
                    <p className="text-sm text-neutral-300">
                      Des alliages de haute qualité répondant aux normes
                      industrielles les plus exigeantes.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="glass"
                spotlightColor={"rgba(56, 189, 248, 0.22)"}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-neutral-800 flex items-center justify-center">
                    <Icon
                      icon="mdi:crop-free"
                      width={24}
                      height={24}
                      className="text-sky-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Solutions Personnalisées
                    </h3>
                    <p className="text-sm text-neutral-300">
                      Des produits métalliques sur mesure adaptés à vos besoins
                      spécifiques.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="glass"
                spotlightColor={"rgba(56, 189, 248, 0.24)"}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-neutral-800 flex items-center justify-center">
                    <Icon
                      icon="mdi:tools"
                      width={24}
                      height={24}
                      className="text-sky-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Expertise Technique
                    </h3>
                    <p className="text-sm text-neutral-300">
                      Une équipe d'ingénieurs métallurgistes hautement qualifiés
                      à votre service.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="glass"
                spotlightColor={"rgba(56, 189, 248, 0.22)"}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-neutral-800 flex items-center justify-center">
                    <Icon
                      icon="mdi:recycle"
                      width={24}
                      height={24}
                      className="text-sky-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Engagement Durable
                    </h3>
                    <p className="text-sm text-neutral-300">
                      Des procédés de fabrication respectueux de l'environnement
                      et matériaux recyclables.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
