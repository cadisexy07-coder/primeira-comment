
import React from 'react';
import { formatCurrency } from '../utils/formatter';

const PassportServices: React.FC = () => {
  const servicePrice = 175500;

  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Serviços de Emissão de Passaporte
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Obtenha seu passaporte nacional ou estrangeiro com a conveniência e fiabilidade da VICTÓRIA EXPRESS.
          </p>
        </div>
        
        <div className="mt-10 bg-gray-50 rounded-lg shadow-xl p-8">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Pacote Completo de Emissão
                    </h3>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                     <p className="text-3xl font-bold text-amber-600">{formatCurrency(servicePrice)}</p>
                </div>
            </div>

            <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800">O que está incluído:</h4>
                <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                    <li>Agendamento nos órgãos competentes.</li>
                    <li>Assessoria no preenchimento de formulários.</li>
                    <li>Acompanhamento do processo de emissão.</li>
                    <li>Notificação sobre prazos de entrega e validade.</li>
                    <li>Garantia de aprovação com a documentação correta.</li>
                </ul>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
                 <h4 className="text-lg font-semibold text-gray-800">Como funciona:</h4>
                 <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-600">
                    <li>Entre em contacto para iniciar o processo.</li>
                    <li>Envie a documentação necessária.</li>
                    <li>Realize o pagamento do serviço.</li>
                    <li>Nós cuidamos de toda a burocracia para você.</li>
                    <li>Receba seu passaporte no prazo estipulado.</li>
                 </ol>
            </div>
             <div className="mt-8 text-center">
                <button className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md shadow-md transition-transform transform hover:scale-105 duration-300">
                    Solicitar Serviço Agora
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PassportServices;
