import Image from "next/image";
import FadeContent from "~/components/blocks/Animations/FadeContent/FadeContent";
import SpotlightCard from "~/components/blocks/Components/SpotlightCard/SpotlightCard";
import { Icon } from "~/components/icon";
import z from "zod";
import { For } from "react-haiku";
import TiltedCard from "~/components/blocks/Components/TiltedCard/TiltedCard";
import { Fragment } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const productSchema = z.object({
  id: z.uuid(),
  name: z.string().min(2).max(100),
  image: z.url(),
});

type Product = z.infer<typeof productSchema>;

const categorySchema = z.object({
  id: z.uuid(),
  name: z.string().min(2).max(100),
  desc: z.string().min(10).max(500),
});

type Category = z.infer<typeof categorySchema> & {
  products: Product[];
};

function Products() {
  const categories: Category[] = [
    {
      id: crypto.randomUUID(),
      name: "Acier au carbone",
      desc: "Acier au carbone, résistant et économique, utilisé dans la construction, l’automobile et les outils.",
      products: [
        {
          id: crypto.randomUUID(),
          name: "Tôles d’acier au carbone",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/1-prod-carbon.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Tube rond en acier au carbone",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/2-prod-carbon.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Bobine d’acier au carbone",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/3-prod-carbon.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Fil d’acier au carbone",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/4-prod-carbon.png",
        },
        {
          id: crypto.randomUUID(),
          name: "Tube carré en acier au carbone",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/5-prod-carbon.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Fer carré en acier au carbone",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/6-prod-carbon.webp",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Acier galvanisé",
      desc: "Acier galvanisé (PPGI/PPGL) avec excellente protection anticorrosion pour usage extérieur ou industriel.",
      products: [
        {
          id: crypto.randomUUID(),
          name: "Bobines en acier galvanisé prélaqué PPGI/PPGL",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/1-galvanise.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Tôles en acier galvanisé",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/2-galvanise.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Bobines en acier galvanisé",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/3-galvanise.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Fil en acier galvanisé",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/4-galvanise.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Tôle ondulée galvanisé",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/5-galvanise.webp",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Acier inoxydable",
      desc: "Acier inoxydable durable, résistant à la corrosion, adapté aux environnements exigeants et esthétiques.",
      products: [
        {
          id: crypto.randomUUID(),
          name: "Tôle en acier inoxydable",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/1-INOXYDABLE.jpg",
        },
        {
          id: crypto.randomUUID(),
          name: "Bobines en acier inoxydable",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/3-INOXYDABLE.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Tube rectangulaire en acier inoxydable",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/3-prod-carbon.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Barre d’acier inoxydable",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/4-INOXYDABLE.jpg",
        },
        {
          id: crypto.randomUUID(),
          name: "Tube en acier inoxydable",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/5-INOXYDABLE.jpg",
        },
        {
          id: crypto.randomUUID(),
          name: "Tube carré en acier inoxydable",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/6-INOXYDABLE.jpg",
        },
        {
          id: crypto.randomUUID(),
          name: "Fil d’acier inoxydable",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/7-INOXYDABLE.jpg",
        },
        {
          id: crypto.randomUUID(),
          name: "Fer carré, Plat en acier inoxydable",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/8-INOXYDABLE.jpg",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Produits aluminium",
      desc: "Aluminium léger, résistant et recyclable, utilisé dans l’aéronautique, la construction et l’électronique.",
      products: [
        {
          id: crypto.randomUUID(),
          name: "Tôles en aluminium",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/1-alu.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Aluminium en lingots",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/2-alu.jpg",
        },
        {
          id: crypto.randomUUID(),
          name: "Tiges en aluminium",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/4-alu.jpg",
        },
        {
          id: crypto.randomUUID(),
          name: "Tubes/Pipe en aluminium",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/5-alu.jpg",
        },
        {
          id: crypto.randomUUID(),
          name: "Bobine en aluminium",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/6-alu.jpg",
        },
        {
          id: crypto.randomUUID(),
          name: "Fer carré, plat en aluminium",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/7-alu.jpg",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Produits en cuivre",
      desc: "Produits en cuivre, connus pour leur conductivité électrique/thermique et résistance à la corrosion.",
      products: [
        {
          id: crypto.randomUUID(),
          name: "Tôles en cuivre",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/1-cuivre.webp", // copper sheets
        },
        {
          id: crypto.randomUUID(),
          name: "Cuivre en lingots",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/2-cuivre.jpg", // copper ingots
        },
        {
          id: crypto.randomUUID(),
          name: "Tiges en cuivre",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/3-cuivre.png", // copper rods
        },
        {
          id: crypto.randomUUID(),
          name: "Tubes/Pipes en cuivre",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/4-cuivre.jpg", // copper tubes
        },
        {
          id: crypto.randomUUID(),
          name: "Bobine en cuivre",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/5-cuivre.jpg", // copper coil/wire
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Produits au zinc",
      desc: "Zinc en lingots, résistant à la corrosion, utilisé dans les revêtements et batteries.",
      products: [
        {
          id: crypto.randomUUID(),
          name: "Zinc en lingots",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/pure-zinc-ingots-99-99-500x500-1-300x269.jpeg",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "Profilés laminés",
      desc: "Profilés laminés en acier robustes, tels que I-peines, H, U, cornières et T pour structures solides.",
      products: [
        {
          id: crypto.randomUUID(),
          name: "Poutres en I",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/I-beams.png",
        },
        {
          id: crypto.randomUUID(),
          name: "Poutrelles en H",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/H-beams.jpg",
        },
        {
          id: crypto.randomUUID(),
          name: "Poutre en U",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/U-shaped-beam.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Cornières",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/Cornieres.webp",
        },
        {
          id: crypto.randomUUID(),
          name: "Poutre en T",
          image:
            "https://metal-alloys.technocast.dz/wp-content/uploads/2024/11/T-beam.webp",
        },
      ],
    },
  ];

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

      <br />
      <br />
      <br />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <For
          each={categories}
          render={(category: Category) => (
            <Fragment key={category.id}>
              <input
                type="radio"
                name="my_tab"
                className="tab"
                id={category.id}
                aria-label={category.name}
              />

              <div className="tab-content border-base-300 bg-base-100 p-10">
                <article className="prose lg:prose-xl">
                  <h1 className="uppercase">{category.name}</h1>

                  <p>{category.desc}</p>
                </article>

                <div className="grid grid-cols-3 gap-4">
                  <For
                    each={category.products}
                    render={(product: Product) => (
                      <TiltedCard
                        key={product.id}
                        imageSrc={product.image}
                        altText={product.name}
                        captionText={product.name}
                        containerHeight="300px"
                        containerWidth="300px"
                        imageHeight="300px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                          <p className="tilted-card-demo-text">
                            {product.name}
                          </p>
                        }
                      />
                    )}
                  />
                </div>
              </div>
            </Fragment>
          )}
        />
      </div>
    </>
  );
}

export default Products;
