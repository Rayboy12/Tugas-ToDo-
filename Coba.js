// function lingkaran(radius) {
//     if (typeof radius !== 'number' || radius <= 0) {
//       return 'Invalid radius';
//     }
    
//     const area = Math.PI * Math.pow(radius, 2);
//     return area.toFixed(2);
//   }
  
//   // Contoh penggunaan:
//   const radius = 5;
//   const area = lingkaran(radius);
//   console.log(`Luas lingkaran dengan jari-jari ${radius} adalah ${area}`);
  

// function luaslingkaran(r) {
//     const phi = 3.4
//     return phi * r ** 2;
// }

// console.log ('hasil jari-jari', luaslingkaran(10));



// function getUser() {
//     const user = [
//         {'name': 'agus' },
//         {'nama' : 'yahya'}
//     ]

//     return user;

// }

// const ecommerceUser = getUser();
// console.log('fisrt user' , ecommerceUser[0].name)


// let add = (a, b) => a + b;
// console.log(add(2, 4));

// function perkalian (firt, seconf) {
//     return firt * seconf;
// }
// console.log('hasil = ', perkalian(2, 4));


// Arrow Function
// let multi = (firs, second) => firs*second;
// console.log('hasil', multi(2,4));



// IIFE
// ((first, second) => {
//         console.log (first, second);
// })(2,4);


// import './App.css';

// import ButtonClass from './components/ButtonClass';
// import ButtonFunction from './components/ButtonFunction';

// const App = () => {
//     return (
//     <div style={{margin: "20px", padding: "20px", backgroundColor: 'lightblue'}}>
//         <ButtonClass/>
//         <br/>
//         <ButtonFunction/>
//     </div>
//     );
// }

// export default App;

import React, { useState } from 'react';

const Coba = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Coba;
