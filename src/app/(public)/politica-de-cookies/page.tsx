import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de Cookies da Bel Lar Empreendimentos.',
};

export default function CookiesPolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#0b1e3e] pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Política de Cookies</h1>
          <div className="w-20 h-1.5 bg-[#f2521c]"></div>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
        <p>
          A <strong>Bel Lar Empreendimentos</strong> utiliza cookies em seu site para aprimorar o desempenho e a sua experiência como usuário. Ao continuar navegando, você concorda com nossa política.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">O que são Cookies?</h2>
        <p>
          Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, smartphone, tablet) através do navegador, que retêm informações relacionadas às suas preferências, não incluindo dados pessoais detalhados.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">Para que servem os Cookies?</h2>
        <p>
          Os cookies servem para ajudar a determinar a utilidade, interesse e o número de utilizações do site, permitindo uma navegação mais rápida e eficiente, eliminando a necessidade de introduzir repetidamente as mesmas informações.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">Que tipos de Cookies utilizamos?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cookies Estritamente Necessários:</strong> Essenciais para o funcionamento do site, permitindo que você navegue e utilize as suas funcionalidades.</li>
          <li><strong>Cookies de Desempenho:</strong> Coletam informações anônimas sobre como os usuários utilizam o site, ajudando-nos a melhorar o funcionamento.</li>
          <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site memorize as escolhas feitas por você, proporcionando uma experiência mais personalizada.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">Como gerenciar os Cookies?</h2>
        <p>
          Todos os navegadores permitem ao usuário aceitar, recusar ou apagar cookies, nomeadamente através da seleção das definições apropriadas no respectivo navegador. No entanto, desativar os cookies pode impedir que alguns serviços da web funcionem corretamente, afetando parcial ou totalmente a navegação no site.
        </p>
        </div>
      </div>
    </main>
  );
}
