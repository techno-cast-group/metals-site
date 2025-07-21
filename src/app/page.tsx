/* eslint-disable react/no-unescaped-entities */
function Home() {
  return (
    <>
      {/* Hero Section with Background Carousel */}
      <div className="hero min-h-screen relative">
        {/* Background Carousel */}
        <div className="carousel w-full h-full absolute inset-0">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://picsum.photos/1920/1080?random=1"
              className="w-full object-cover"
              alt="Industrial machinery"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide2" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://picsum.photos/1920/1080?random=2"
              className="w-full object-cover"
              alt="Metal casting process"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide3" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://picsum.photos/1920/1080?random=3"
              className="w-full object-cover"
              alt="Quality control"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-ghost text-white">❮</a>
              <a href="#slide1" className="btn btn-circle btn-ghost text-white">❯</a>
            </div>
          </div>
        </div>

        {/* Hero Overlay with Dark Backdrop */}
        <div className="hero-overlay bg-black bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="hero-content text-center text-white z-10">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              FILIALE DE TECHNO CAST GROUP
            </h1>
            <p className="mb-8 text-lg md:text-xl lg:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              "TECHNO CAST METALS AND ALLOYS : INNOVATION, EXCELLENCE, DURABILITÉ POUR L'INDUSTRIE DE DEMAIN."
            </p>
            <button className="btn btn-primary btn-lg">
              En savoir plus
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          <a href="#slide1" className="btn btn-xs btn-circle btn-ghost text-white">1</a>
          <a href="#slide2" className="btn btn-xs btn-circle btn-ghost text-white">2</a>
          <a href="#slide3" className="btn btn-xs btn-circle btn-ghost text-white">3</a>
        </div>
      </div>

      {/* Additional Content Sections */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Innovation</h3>
                <p>Technologies de pointe pour l'industrie métallurgique moderne.</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Excellence</h3>
                <p>Qualité supérieure dans tous nos processus de fabrication.</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Durabilité</h3>
                <p>Solutions respectueuses de l'environnement pour l'avenir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
