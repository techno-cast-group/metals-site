"use client";

function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium mb-2">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder="Nom"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="prenom"
            className="block text-sm font-medium mb-2"
          >
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            placeholder="Prénom"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="telephone"
            className="block text-sm font-medium mb-2"
          >
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Numéro de téléphone"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Message"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
        ></textarea>
      </div>

      <div className="flex justify-start">
        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
