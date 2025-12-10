
import React, { useState } from 'react';
import { Flight } from '../types';
import { formatCurrency } from '../utils/formatter';

const mockFlights: Flight[] = [
    { id: 'TAAG01', airline: 'TAAG Angola Airlines', logoUrl: 'https://flytaag.com/images/logo.png', origin: 'Luanda (LAD)', destination: 'Lisboa (LIS)', departureTime: '22:30', arrivalTime: '06:00', duration: '7h 30m', price: 450000 },
    { id: 'TAP02', airline: 'TAP Air Portugal', logoUrl: 'https://flytaag.com/images/logo.png', origin: 'Luanda (LAD)', destination: 'Lisboa (LIS)', departureTime: '23:15', arrivalTime: '06:45', duration: '7h 30m', price: 485000 },
    { id: 'TAAG03', airline: 'TAAG Angola Airlines', logoUrl: 'https://flytaag.com/images/logo.png', origin: 'Luanda (LAD)', destination: 'São Paulo (GRU)', departureTime: '21:00', arrivalTime: '04:00', duration: '8h 00m', price: 620000 },
];


const FlightBooking: React.FC = () => {
    const [tripType, setTripType] = useState('round-trip');
    const [showResults, setShowResults] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setShowResults(true);
    };
    
    const SERVICE_FEE_PERCENTAGE = 0.10;

    const renderPrice = (price: number) => {
        const serviceFee = price * SERVICE_FEE_PERCENTAGE;
        const totalPrice = price + serviceFee;
        return (
            <div className="text-right">
                <p className="text-xl font-bold text-gray-800">{formatCurrency(totalPrice)}</p>
                <p className="text-xs text-gray-500">Taxa de serviço ({SERVICE_FEE_PERCENTAGE * 100}%): {formatCurrency(serviceFee)}</p>
            </div>
        )
    }

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Encontre o seu próximo voo</h2>
                    
                    <form onSubmit={handleSearch}>
                        <div className="mb-6 border-b border-gray-200">
                            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                                <button type="button" onClick={() => setTripType('round-trip')} className={`${tripType === 'round-trip' ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Ida e volta</button>
                                <button type="button" onClick={() => setTripType('one-way')} className={`${tripType === 'one-way' ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Só ida</button>
                                <button type="button" onClick={() => setTripType('multi-city')} className={`${tripType === 'multi-city' ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Multi-Destino</button>
                            </nav>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origem</label>
                                <input type="text" id="origin" defaultValue="Luanda (LAD)" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm p-2" />
                            </div>
                             <div>
                                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destino</label>
                                <input type="text" id="destination" placeholder="Para onde?" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm p-2" />
                            </div>
                            <div>
                                <label htmlFor="departure-date" className="block text-sm font-medium text-gray-700">Data de ida</label>
                                <input type="date" id="departure-date" defaultValue="2025-12-10" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm p-2" />
                            </div>
                            <div>
                                <label htmlFor="return-date" className="block text-sm font-medium text-gray-700">Data de volta</label>
                                <input type="date" id="return-date" defaultValue="2025-12-20" disabled={tripType === 'one-way'} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm p-2 disabled:bg-gray-100" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            <div>
                                <label htmlFor="class" className="block text-sm font-medium text-gray-700">Classe</label>
                                <select id="class" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm p-2">
                                    <option>Económica</option>
                                    <option>Executiva</option>
                                    <option>1ª Classe</option>
                                </select>
                            </div>
                             <div className="grid grid-cols-3 gap-2">
                                <div>
                                    <label htmlFor="adults" className="block text-sm font-medium text-gray-700">Adultos</label>
                                    <input type="number" id="adults" min="1" defaultValue="1" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm p-2" />
                                </div>
                                <div>
                                    <label htmlFor="children" className="block text-sm font-medium text-gray-700">Crianças</label>
                                    <input type="number" id="children" min="0" defaultValue="0" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm p-2" />
                                </div>
                                <div>
                                    <label htmlFor="infants" className="block text-sm font-medium text-gray-700">Bebés</label>
                                    <input type="number" id="infants" min="0" defaultValue="0" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm p-2" />
                                </div>
                            </div>
                            <div className="lg:col-span-2 flex items-end">
                                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-md shadow-md transition-transform transform hover:scale-105 duration-300">
                                    Procurar Voos
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {showResults && (
                    <div className="mt-12">
                         <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados da pesquisa</h3>
                         <div className="space-y-4">
                            {mockFlights.map((flight) => (
                                <div key={flight.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <img src={flight.logoUrl} alt={flight.airline} className="h-10 w-auto object-contain" />
                                        <div>
                                            <p className="font-semibold text-gray-800">{flight.airline}</p>
                                            <p className="text-sm text-gray-500">{flight.origin} &rarr; {flight.destination}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-center">
                                        <div>
                                            <p className="font-semibold text-lg">{flight.departureTime}</p>
                                            <p className="text-sm text-gray-600">{flight.origin.split(' ')[1].replace('(', '').replace(')', '')}</p>
                                        </div>
                                        <div className="w-24 text-center">
                                            <p className="text-sm text-gray-500">{flight.duration}</p>
                                            <div className="h-px bg-gray-300 my-1"></div>
                                            <p className="text-xs text-gray-500">Direto</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lg">{flight.arrivalTime}</p>
                                            <p className="text-sm text-gray-600">{flight.destination.split(' ')[1].replace('(', '').replace(')', '')}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-4">
                                        {renderPrice(flight.price)}
                                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md whitespace-nowrap">
                                            Selecionar
                                        </button>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FlightBooking;
