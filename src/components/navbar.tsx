import Image from "next/image";

function Navbar() {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-lg rounded-2xl">
      {/* Logo on the left */}
      <div className="navbar-start">
        <div className="flex items-center">
          <Image
            src="/assets/Technocast_logo-01f-1-1.png"
            alt="Technocast Logo"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Navigation links on the right */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <a
              href="#about"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#study"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              Étude
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              Produits
            </a>
          </li>
          <li>
            <a
              href="#news"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              Actualité
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
