import Image from "next/image";
import techLogo from "~/assets/Technocast_logo-01f-1-1.png";
import hqImg from "~/assets/3-1024x683.png";

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
    </>
  );
}

export default AboutPage;
