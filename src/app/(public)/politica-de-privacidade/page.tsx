import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade da Bel Lar Empreendimentos.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#0b1e3e] pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Política de Privacidade</h1>
          <div className="w-20 h-1.5 bg-[#f2521c]"></div>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
        <p>
          A <strong>Bel Lar Empreendimentos</strong> tem o compromisso de proteger a privacidade e os dados pessoais de seus clientes e usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD) - Lei nº 13.709/2018.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">1. Coleta de Dados</h2>
        <p>
          Coletamos as informações que você nos fornece diretamente ao preencher formulários em nosso site, como nome, e-mail e telefone, para responder às suas solicitações de contato ou enviar newsletters.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">2. Uso das Informações</h2>
        <p>
          As informações coletadas são utilizadas exclusivamente para fornecer os serviços solicitados, melhorar sua experiência de navegação e, quando autorizado, enviar comunicações de marketing.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">3. Compartilhamento de Dados</h2>
        <p>
          Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para a prestação de serviços, cumprimento de obrigações legais ou mediante sua autorização prévia.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">4. Seus Direitos</h2>
        <p>
          De acordo com a LGPD, você tem o direito de solicitar acesso, correção, atualização ou exclusão de seus dados pessoais armazenados em nossa base. Para exercer esses direitos, entre em contato conosco através do e-mail: <strong>contato@bellarempreendimento.com.br</strong>.
        </p>

        <h2 className="text-2xl font-semibold text-[#0b1e3e] mt-8 mb-4">5. Alterações nesta Política</h2>
        <p>
          Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos a leitura frequente para manter-se informado sobre como protegemos suas informações.
        </p>
        </div>
      </div>
    </main>
  );
}
