
import React from 'react';
import { View } from '../types';
import PlaneIcon from './icons/PlaneIcon';
import HotelIcon from './icons/HotelIcon';
import PassportIcon from './icons/PassportIcon';

interface HomeProps {
  setView: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => {
  const services = [
    {
      view: View.FLIGHTS,
      icon: <PlaneIcon className="h-10 w-10 text-white" />,
      title: 'Reservar Voos',
      description: 'Encontre as melhores tarifas para destinos nacionais e internacionais.'
    },
    {
      view: View.HOTELS,
      icon: <HotelIcon className="h-10 w-10 text-white" />,
      title: 'Reservar Hotéis',
      description: 'Acomodações de luxo e económicas em Luanda e arredores.'
    },
    {
      view: View.PASSPORT,
      icon: <PassportIcon className="h-10 w-10 text-white" />,
      title: 'Tratar Passaporte',
      description: 'Serviços de agendamento e emissão de passaportes de forma rápida.'
    }
  ];

  return (
    <div>
      <div className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=1')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Sua Janela para o Mundo a partir de Luanda
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Planeje sua próxima aventura com VICTÓRIA EXPRESS, seu parceiro de confiança para viagens a partir do novo Aeroporto Internacional Dr. António Agostinho Neto (AIAAN).
            </p>
            <button
              onClick={() => setView(View.FLIGHTS)}
              className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              Começar a Planejar
            </button>
          </div>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Nossos Serviços</h2>
            <p className="mt-2 text-md text-gray-600">Oferecemos tudo que você precisa para uma viagem perfeita.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.view} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-amber-500 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">{service.title}</h3>
                  <p className="mt-2 text-gray-600 text-center">{service.description}</p>
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setView(service.view)}
                      className="text-amber-600 hover:text-amber-800 font-semibold"
                    >
                      Saber mais &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
