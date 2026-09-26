import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de Uso da Bel Lar Empreendimentos.',
};

export default function TermsOfUsePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#0b1e3e] pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Termos de Uso</h1>
          <div className="w-20 h-1.5 bg-[#f2521c]"></div>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
        <p>
          Bem-vindo ao site da <strong>Bel Lar Empreendimentos</strong>. Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com algum dos termos, recomendamos que não utilize este site.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">1. Uso do Site</h2>
        <p>
          Este site tem caráter informativo e institucional, com o objetivo de apresentar os serviços, obras e novidades da Bel Lar Empreendimentos. O conteúdo aqui disponibilizado não constitui proposta comercial vinculativa, salvo menção expressa.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">2. Propriedade Intelectual</h2>
        <p>
          Todos os direitos autorais, marcas, imagens, logotipos, textos, vídeos e demais conteúdos apresentados neste site são de propriedade exclusiva da Bel Lar Empreendimentos ou de terceiros que licenciaram seu uso. É proibida a reprodução, cópia, distribuição ou modificação sem autorização prévia por escrito.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">3. Limitação de Responsabilidade</h2>
        <p>
          Nos esforçamos para manter as informações do site atualizadas e corretas, mas não garantimos a exatidão, integridade ou atualidade dos conteúdos. A Bel Lar Empreendimentos não se responsabiliza por eventuais danos decorrentes do uso das informações contidas neste site.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">4. Links para Terceiros</h2>
        <p>
          Nosso site pode conter links para sites de terceiros. Esses links são fornecidos apenas para sua conveniência, e a Bel Lar Empreendimentos não endossa nem se responsabiliza pelo conteúdo ou políticas de privacidade desses sites.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">5. Modificações dos Termos</h2>
        <p>
          A Bel Lar Empreendimentos reserva-se o direito de alterar estes Termos de Uso a qualquer momento, sem aviso prévio. Recomendamos que consulte esta página regularmente para estar ciente de quaisquer atualizações.
        </p>
        </div>
      </div>
    </main>
  );
}
