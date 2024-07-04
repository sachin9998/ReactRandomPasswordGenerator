import { useEffect, useState } from 'react';
// import './App.css'

function App() {

  const [length, setLength] = useState(15);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharactersAllowed, setIsCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () => {

    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (isNumberAllowed) {
      str += "1234567890";
    }

    if (isCharactersAllowed) {
      str += "!@#$%^&*(){}[]_-+=";
    }

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    console.log(pass);
    setPassword(pass);

  }

  function copyHandler() {
    navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberAllowed, isCharactersAllowed, setPassword]);


  return (

    <div className='flex items-center justify-center h-screen'>

      <div className='w-full max-w-lg shadow-md rounded-lg px-4 text-orange-500 bg-gray-700 flex flex-col gap-2'>

        <h1 className='text-white text-xl text-center my-5'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />

          <button
            onClick={copyHandler}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>

        <div className='flex justify-around text-sm gap-x-1'>

          <div className='flex items-center gap-x-1'>

            <input
              className='cursor-pointer '
              type='range'
              min={8}
              max={100}
              value={length}
              name='passwordRange'
              id='passwordRange'
              onChange={(event) => { setLength(event.target.value) }}
            />

            <label htmlFor='passwordRange'>Length: {length}</label>
          </div>

          <div className='flex gap-2'>
            <div className='flex items-center gap-x-1'>

              <input
                type='checkbox'
                defaultChecked={isNumberAllowed}
                id='numberInput'
                onChange={() => {
                  setIsNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor='numberInput'>Numbers</label>

            </div>

            <div className='flex items-center gap-x-1'>

              <input
                type='checkbox'
                defaultChecked={isCharactersAllowed}
                id='charactersInputInput'
                onChange={() => {
                  setIsCharactersAllowed((prev) => !prev);
                }}
              />

              <label htmlFor='charactersInput'>Characters</label>
            </div>
          </div>

        </div>

        <div className='flex items-center justify-center gap-x-1 mb-5 mt-4'>

          <button
            onClick={passwordGenerator}
            type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Generate Random Password</button>

        </div>

      </div >
    </div>

  )
}

export default App;
