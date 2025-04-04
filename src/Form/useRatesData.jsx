import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_qXN07bLlepha9QC4ldlOPInxwnphA7l1YCgWmgtD&currencies=&base_currency=PLN");
            
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