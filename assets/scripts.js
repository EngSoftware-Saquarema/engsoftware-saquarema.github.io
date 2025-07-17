const cardsDiv = document.body.querySelector("#cards-container");

if (cardsDiv) {
    const cards = [
        {
          title: "Análise curricular",
          description: "Acesse o sistema de análise curricular",
          icon: "📊",
          link: "/analise_curricular",
        },
        {
          title: "Plano de estudos",
          description: "Consulte o plano de estudos",
          icon: "📚",
          link: "/plano-de-estudos/",
        },
        {
          title: "Univassouras",
          description: "Portal da universidade",
          icon: "🌐",
          link: "https://univassouras.edu.br/graduacao-saquarema/engenharia-de-software/",
        },
    ];
      
    cards.forEach((card) => {
        cardsDiv.innerHTML += `
            <a
            href=${card.link}
            class="group bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-rose-950 transition-all duration-300 hover:shadow-lg hover:shadow-rose-950/20 cursor-pointer"
          >
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-rose-950 rounded-lg flex items-center justify-center">
                <span class="text-white text-xl font-bold">
                  ${card.icon}
                </span>
              </div>
              <ExternalLink class="w-5 h-5 text-neutral-400 group-hover:text-rose-950 transition-colors" />
            </div>
            <h3 class="text-white text-lg font-semibold mb-2">
              ${card.title}
            </h3>
            <p class="text-neutral-400 text-sm mb-4">${card.description}</p>
            <div class="flex items-center text-rose-950 text-sm font-medium">
              <span>Ir para ${card.title}</span>
              <ExternalLink class="w-4 h-4 ml-1" />
            </div>
          </a>
        `
    })
}
