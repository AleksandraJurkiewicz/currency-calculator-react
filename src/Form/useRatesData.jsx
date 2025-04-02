import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("currency-calculator-react/currencies.json");
            
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
            
                const { data, meta } = await response.json();

                setRatesData({
                    state: "success",
                    rates: data,
                    date: meta,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};