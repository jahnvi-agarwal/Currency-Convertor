import { useState } from 'react'
import {InputBox} from './components'
import usecurrencyinfo from './Hooks/usecurrencyinfo'




function App() {
  const [amount, setamount] = useState(0)
  const [from , setfrom] = useState("usd")
  const [To , setTo] = useState("inr")
  const [convertedAmount , setconvertedAmount] = useState(0)

  const currencyInfo = usecurrencyinfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setfrom(To)
    setTo(from)
    setconvertedAmount(amount)
    setamount(convertedAmount)
  }

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[To])
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(/assets/Unknown.jpeg)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                CurrencyOptions={options}
                                onAmountChange={(value) => setamount(value)} 
                                onCurrencyChange={(currency) => setfrom(currency)}
                                selectCurrency={from}
                              />

                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                CurrencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={To}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert  {from.toUpperCase()} to {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
