import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            Wybierz walutę:
            <select
                className="form__field--first"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
            >
                {currencies.map((currency => (
                    <option
                        key={currency.short}
                        value={currency.short}
                    >
                        {currency.name}
                    </option>
                )))}
            </select>
            <div className="form__field--second">
                <label>
                    Kwota w walucie:
                    <input 
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        className="form__input"
                        name="value"
                        step="0.01"
                        min="0.01"
                        required
                    />
                </label>
            </div>
            <div className="form__field--third">
                <button className="form__button">Przelicz!</button>
            </div>
            <div className="form__exchangeRate">Kursy walut na dzień 11.02.2025:
                <div>1 dolar to 4,04 złoty</div>
                <div>1 euro to 4,18 złoty</div>
                <div>1 funt to 5,00 złoty</div>
            </div>

            <Result result={result} />
        </form>
    )
};