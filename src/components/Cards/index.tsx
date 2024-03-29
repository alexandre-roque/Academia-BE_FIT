import React from "react";
import { Card } from "./Card";
import { planos } from "../../auxiliarDadosCliente/planos";

export interface PriceTabel {
    amount: string;
    price: string;
}

export interface CardProps {
    label: string;
    prices: PriceTabel[];
}

export interface plano {
    name: string;
    options: CardProps[];
}

export const Cards = () => {
    return (
        <>
            {(planos as plano[]).map((plano) => {
                return (
                    <div
                        key={plano.name}
                        className="w-full py-[4rem] px-4 bg-white"
                    >
                        <div className="py-5 text-center text-4xl font-black uppercase underline decoration-lgreen">
                            {plano.name}
                        </div>
                        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                            {plano.options.map((option) => {
                                return (
                                    <Card
                                        key={option.label}
                                        label={option.label}
                                        prices={option.prices}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </>
    );
};
