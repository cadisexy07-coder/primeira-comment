
import React, { useState } from 'react';

const CheckIn: React.FC = () => {
    const [bookingRef, setBookingRef] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkedIn, setCheckedIn] = useState(false);
    const [error, setError] = useState('');

    const handleCheckIn = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (bookingRef.trim() === '' || lastName.trim() === '') {
            setError('Por favor, preencha todos os campos.');
            return;
        }
        setCheckedIn(true);
    };

    if (checkedIn) {
        return (
            <div className="py-12 bg-gray-50 flex items-center justify-center min-h-[70vh]">
                <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg text-center">
                    <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">Check-in Realizado com Sucesso!</h2>
                    <p className="mt-2 text-gray-600">
                        Seu check-in para a viagem a <span className="font-semibold">Lisboa (LIS)</span> foi concluído.
                    </p>
                    <p className="mt-1 text-gray-600">Por favor, verifique seu e-mail para o cartão de embarque.</p>
                    <button 
                        onClick={() => setCheckedIn(false)}
                        className="mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-md"
                    >
                        Fazer outro Check-in
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12 bg-gray-50 flex items-center justify-center min-h-[70vh]">
            <div className="max-w-lg w-full bg-white p-10 rounded-xl shadow-lg">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Check-in Online</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Fácil, rápido e cómodo.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleCheckIn}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="booking-ref" className="sr-only">Referência da Reserva</label>
                            <input
                                id="booking-ref"
                                name="booking-ref"
                                type="text"
                                value={bookingRef}
                                onChange={(e) => setBookingRef(e.target.value.toUpperCase())}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                placeholder="Referência da Reserva"
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="sr-only">Último Nome</label>
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                                placeholder="Último Nome do Passageiro"
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckIn;
