
import React from 'react';
import { Hotel } from '../types';
import { formatCurrency } from '../utils/formatter';

const mockHotels: Hotel[] = [
  { id: 1, name: 'EPIC SANA Luanda Hotel', rating: 5, pricePerNight: 185000, imageUrl: 'https://picsum.photos/400/300?random=10', description: 'Um hotel de luxo com vistas deslumbrantes para a Baía de Luanda.' },
  { id: 2, name: 'Hotel Trópico', rating: 4, pricePerNight: 95000, imageUrl: 'https://picsum.photos/400/300?random=11', description: 'Localização central, ideal para negócios e lazer.' },
  { id: 3, name: 'InterContinental Luanda Miramar', rating: 5, pricePerNight: 210000, imageUrl: 'https://picsum.photos/400/300?random=12', description: 'Serviço de classe mundial e instalações modernas.' },
  { id: 4, name: 'Hotel Alvalade', rating: 4, pricePerNight: 78000, imageUrl: 'https://picsum.photos/400/300?random=13', description: 'Conforto e conveniência perto do centro da cidade.' },
];

const HotelBooking: React.FC = () => {
    
  const SERVICE_FEE_PERCENTAGE = 0.10;

  const calculateTotalPrice = (price: number) => {
    const serviceFee = price * SERVICE_FEE_PERCENTAGE;
    return price + serviceFee;
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Reservas Hoteleiras em Luanda</h2>
            <p className="mt-2 text-md text-gray-600">Encontre a estadia perfeita para sua viagem.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockHotels.map(hotel => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-56 object-cover" />
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start">
                             <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                             <div className="flex items-center ml-4">
                                <span className="text-yellow-500">★</span>
                                <span className="ml-1 text-gray-600 font-bold">{hotel.rating.toFixed(1)}</span>
                            </div>
                        </div>
                        <p className="mt-2 text-gray-600 flex-grow">{hotel.description}</p>
                        <div className="mt-6 flex justify-between items-center">
                            <div>
                                <p className="text-sm text-gray-500">A partir de</p>
                                <p className="text-2xl font-bold text-gray-900">{formatCurrency(calculateTotalPrice(hotel.pricePerNight))}</p>
                                <p className="text-xs text-gray-500">inclui taxa de serviço</p>
                            </div>
                            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
                                Ver Detalhes
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <p className="text-center mt-8 text-sm text-gray-500">
          Nota: Uma taxa de serviço de {SERVICE_FEE_PERCENTAGE * 100}% é adicionada a todas as reservas hoteleiras.
        </p>
      </div>
    </div>
  );
};

export default HotelBooking;
