"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import hqImg from "~/assets/3-1024x683.png";
import { Icon } from "~/components/icon";
import z from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prodCategorySchema = z.object({
  id: z.uuid(),
  name: z.string().min(2).max(100),
  image: z.url(),
});

type ProductCategory = z.infer<typeof prodCategorySchema>;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for the carousel
  const backgroundImages = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076", // Metal pipes/tubes
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070", // Industrial steel
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2074", // Metal manufacturing
  ];

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const productCategories: ProductCategory[] = [
    {
      id: crypto.randomUUID(),
      name: "Tôles",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800",
    },
    {
      id: crypto.randomUUID(),
      name: "Barres",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=800",
    },
    {
      id: crypto.randomUUID(),
      name: "Profilés",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
    },
    {
      id: crypto.randomUUID(),
      name: "Fonds",
      image:
        "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=800",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 z-30 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition"
          onClick={() =>
            setCurrentSlide(
              (prev) =>
                (prev - 1 + backgroundImages.length) % backgroundImages.length
            )
          }
          aria-label="Previous Slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 z-30 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition"
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
          }
          aria-label="Next Slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Hero Content */}
        <div className="relative z-10 hero min-h-screen">
          <div className="hero-content text-center text-white">
            <div className="max-w-4xl">
              <h1 className="mb-5 text-5xl font-bold tracking-wide">
                FILIALE DE TECHNO CAST GROUP
              </h1>
              <p className="mb-8 text-xl font-light max-w-3xl mx-auto leading-relaxed">
                "TECHNO CAST METALS AND ALLOYS : INNOVATION, EXCELLENCE,
                DURABILITÉ POUR L'INDUSTRIE DE DEMAIN."
              </p>
              <Link
                href="/about"
                className="btn btn-primary btn-lg px-8 py-3 text-white font-semibold hover:scale-105 transition-transform duration-200"
              >
                En savoir plus
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 px-4">
        <div className="bg-primary rounded-xl shadow-lg p-8 max-w-xl text-white">
          <h2 className="text-lg font-bold mb-2">
            TECHNOCAST Metals and Alloys
          </h2>
          <span className="font-semibold">
            , filiale du <span className="font-bold">TECHNOCAST Group</span>
          </span>
          <span>
            , est un acteur clé dans le secteur de la sidérurgie. Notre ambition
            est d’atteindre l’excellence opérationnelle, de promouvoir une
            innovation continue et de contribuer au développement durable de
            l’industrie. Nous offrons des solutions de pointe et relevons les
            défis complexes du marché avec professionnalisme et expertise.
          </span>
          <p className="mt-4">
            En complément,{" "}
            <span className="font-bold">TECHNOCAST Metals and Alloys</span>{" "}
            propose à ses clients un accompagnement sur mesure, en fournissant
            des conseils stratégiques, de l’assistance technique et un support
            spécialisé, en collaboration avec des partenaires et des entreprises
            de renommée internationale.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center mt-6 px-6 py-2 bg-[#16313F] text-white rounded-full font-medium hover:bg-[#1d3e4f] transition"
          >
            En savoir plus
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg max-w-lg w-full">
          <Image
            src={hqImg}
            alt="Technocast Group Building"
            className="w-full h-auto object-cover"
            width={500}
            height={300}
          />
        </div>
      </div>

      <br />
      <br />

      {/* Company Logos Carousel */}
      <div className="w-full bg-primary py-8 flex justify-center items-center">
        <div className="flex gap-12 flex-wrap justify-center items-center">
          {/* Replace these with your actual company logo images */}
          <Image src="/sarpi-logo.png" alt="Sarpi" width={80} height={60} />
          <Image
            src="/sonatrach-logo.png"
            alt="Sonatrach"
            width={80}
            height={60}
          />
          <Image src="/gcb-logo.png" alt="GCB" width={80} height={60} />
          <Image src="/cosider-logo.png" alt="Cosider" width={80} height={60} />
          <Image src="/eni-logo.png" alt="Eni" width={80} height={60} />
        </div>
      </div>

      {/* Engineering & Diagnostic Section */}
      <div
        className="relative min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white text-center px-4 py-16 max-w-2xl">
          <h1 className="mb-4 text-3xl md:text-5xl font-bold">
            ETUDES ENGINEERING ET DIAGNOSTIC
          </h1>
          <p className="mb-4 text-lg">
            Chez TECHNO CAST, nous offrons des solutions adaptées à chaque
            problématique grâce à notre équipe d’ingénieurs spécialisés en
            innovation et qualité. Nous proposons des produits sidérurgiques de
            haute qualité, en partenariat avec des entreprises renommées.
          </p>
          <p className="mb-6 text-lg">
            Nous offrons également des formations continues pour garantir une
            maintenance optimale des équipements. Notre réactivité, flexibilité
            et expertise sont nos atouts pour un service de qualité.
          </p>
          <Link href="/services">
            <span className="inline-flex items-center px-6 py-2 bg-primary rounded-full font-semibold hover:bg-primary/80 transition">
              En savoir plus
              <Icon icon="typcn:chevron-right" width="24" height="24" />
            </span>
          </Link>
        </div>
      </div>

      {/* Produits Sidérurgiques Section */}
      <div className="w-full py-12 px-4 bg-white">
        <div className="flex items-center mb-8">
          <div className="bg-primary px-8 py-3 rounded-r-lg text-white text-xl font-bold uppercase shadow">
            PRODUITS SIDÉRURGIQUES
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {productCategories.map((category) => (
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center"
              key={category.id}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="w-full px-6 py-4 flex flex-col items-center">
                <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
                <Link
                  href={`/products/${category.id}`}
                  className="inline-flex items-center px-4 py-1 bg-primary text-white rounded-full font-medium hover:bg-[#16313F] transition"
                >
                  En savoir plus
                  <Icon icon="typcn:chevron-right" width="24" height="24" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center content-center">
        <button className="bg-primary px-6 py-2 rounded-full text-white font-semibold hover:bg-[#16313F] transition">
          En savoir plus
        </button>
      </div>

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
