import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { ExchangeRate, Button, ButtonWrapper, Amount, AmountWrapper, Converter, Currency } from "./styled";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].name);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <Converter onSubmit={onSubmit}>
            Wybierz walutę:
            <Currency
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
            >
                {currencies.map((currency => (
                    <option
                        key={currency.name}
                        value={currency.name}
                    >
                        {currency.name}
                    </option>
                )))}
            </Currency>
            <AmountWrapper>
                <label>
                    Kwota w walucie:
                    <Amount
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        name="value"
                        step="0.01"
                        min="0.01"
                        required
                    />
                </label>
            </AmountWrapper>
            <ButtonWrapper>
                <Button>Przelicz!</Button>
            </ButtonWrapper>
            <ExchangeRate>
                Kursy walut na dzień 11.02.2025:
                <div>1 dolar to 4,04 złoty</div>
                <div>1 euro to 4,18 złoty</div>
                <div>1 funt to 5,00 złoty</div>
            </ExchangeRate>
            <Result result={result} />
        </Converter>
    )
};