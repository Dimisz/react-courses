import { useEffect, useState } from 'react';
import './App.css'
import SelectField from './components/SelectField';

const currencies = ['USD', 'EUR', 'CAD', 'BP'];

const App = () => {
  const [initialCurrency, setInitialCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [amount, setAmount] = useState<number | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    // `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
    const controller = new AbortController();
    const convertCurrency = async () => {
      try {
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${initialCurrency}&to=${targetCurrency}`, { signal: controller.signal});
        if(!res.ok) throw new Error('Unable to reach the API');
        const data = await res.json();
        setConvertedAmount(data.rates[targetCurrency]);
        setErrorMessage('');
      }
      catch(err: any){
        if(err.name !== 'AbortError') setErrorMessage(err.message);
      }
    }

    convertCurrency();
    return () => {
      controller.abort();
    }
  }, [amount, initialCurrency, targetCurrency]);

  return (
    <>
      <div>
        <input 
          type="text" 
          value={amount || ''}
          onChange={(e: any) => setAmount(Number(e.target.value)|| 0)}
        />
        <SelectField
          options={currencies}
          selectedOption={initialCurrency}
          setSelectedOption={setInitialCurrency}
        />
        <SelectField
          options={currencies}
          selectedOption={targetCurrency}
          setSelectedOption={setTargetCurrency}
        />
      </div>
      <div>
        {
          convertedAmount &&
          <p>{amount} {initialCurrency} converts to {convertedAmount} {targetCurrency}</p>
        }
      </div>
    </>
  )
}

export default App
