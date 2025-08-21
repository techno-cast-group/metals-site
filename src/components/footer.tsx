import ContactForm from "./contact-form";
import TextType from "./blocks/TextAnimations/TextType/TextType";

function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          {/* <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Vous voulez en savoir plus, envoyez-nous
          </h2> */}

          <TextType
            text={["Vous voulez en savoir plus, envoyez un message"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-2xl md:text-3xl font-bold mb-6"
          />
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nous sommes à l'écoute de vos besoins et nous nous engageons à
            offrir des solutions sur mesure pour répondre à vos défis
            techniques. Contactez-nous dès aujourd'hui pour découvrir comment
            nos services peuvent améliorer la performance de vos équipements
            industriels et garantir leur longévité.
          </p>
        </div>

        <ContactForm />

        {/* Footer Content */}
        <div className="mt-16 pt-12 bg-white text-gray-800 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TC</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    TECHNO CAST
                  </h3>
                  <p className="text-sm text-gray-600">Metals & Alloys</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                TECHNO CAST offre des solutions innovantes, des produits
                sidérurgiques de haute qualité, et des formations continues
                adaptées aux besoins de nos clients. Grâce à notre expertise,
                réactivité et engagement envers la satisfaction client, nous
                garantissons un service flexible et performant.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Liens rapides
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Apropos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Etude
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Produits
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Actualités
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Coordonnées
              </h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Contact</h4>
                    <p className="text-gray-600 text-sm">
                      Fix : +213 20 89 92 54
                    </p>
                    <p className="text-gray-600 text-sm">
                      Fax : +213 20 89 95 93
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📧</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Mail</h4>
                    <p className="text-gray-600 text-sm">
                      metals.alloys@technocast.dz
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Addresse</h4>
                    <p className="text-gray-600 text-sm">
                      Zone Urbaine Lot n° 2 Ahmed Zabana,
                    </p>
                    <p className="text-gray-600 text-sm">
                      Douaouda 42015 , Tipaza, Algérie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200 px-8 pb-8">
            <div className="bg-gray-100 text-center py-4 px-6 rounded-lg">
              <p className="text-gray-600 text-sm">
                Techno Cast Groupe © 2024 All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
