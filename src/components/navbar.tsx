import Image from "next/image";
import Link from "next/link";
import technoCastLogo from "~/assets/Technocast_logo-01f-1-1.png";

function Navbar() {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-lg rounded-2xl">
      {/* Logo on the left */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center">
          <Image
            src={technoCastLogo}
            alt="Technocast Logo"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Navigation links on the right */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <Link
              href="/"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              href="/etude"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              Étude
            </Link>
          </li>
          <li>
            <Link
              href="/produits"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              Produits
            </Link>
          </li>
          <li>
            <Link
              href="/actualite"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              Actualité
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-base-content hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
