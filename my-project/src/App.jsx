import { useState,useRef } from "react";
export default function App() {
  const [UserValue,setUserValue]=useState({
    poid:'',
    taille:'',
  });
  const [result,SetResult]=useState({
    result:'',
    comment:'',
    color:'',
  });
 const Poid=useRef();
 const Taille=useRef();

 const handleCalculateBMI=()=>{
  
   const PoidsValue=Poid.current.value;
   const TailleValue=Taille.current.value;
   const result=(PoidsValue*10000)/(TailleValue*TailleValue);
   let  comment='';
   let  color='';
   if(result>=19 && result <=25){
     comment='normal';
     color='text-green-500';
   }else if(result<19){
       comment='sous-poids';
       color='text-red-500';
   }else{
    comment='surPoids';
    color='text-orange-500';
   };
   setUserValue({...UserValue,
    poid:PoidsValue,
    taille:TailleValue,
   })
   SetResult({...result,
    result:result.toFixed(2),
    comment:comment,
    color:color,
   })
 }
 console.log(result);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Calcul de lIMC
          </h2>

          <div className="mb-4">
            <label
              htmlFor="poid"
              className="block text-sm font-medium text-gray-700" 
            >
              Poids (kg)
            </label>
            <input
              ref={Poid}
              type="number"
              id="poid"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Entrez votre poids"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="taille"
              className="block text-sm font-medium text-gray-700"
            >
              Taille (cm)
            </label>
            <input
              ref={Taille}
              type="number"
              id="taille"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Entrez votre taille"
            />
          </div>

          <div className="mb-4 text-center">
            <button
             onClick= {handleCalculateBMI}
              id="calculer"
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
            >
              Calculer
            </button>
          </div>

          <div
            id="resultat"
            className="mt-4 text-center text-lg font-medium text-gray-800"
          >
            <b>BMI:</b>{result.result} <span className= {`${result.color} `}>{result.comment}</span>
          
          </div>
         
        </div>
      </div>
    </>
  );
}
