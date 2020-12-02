import './App.css';

const getResource = async(url) =>{
  const res = await fetch(url);
  const body = await res.json();
  return body.results;
};

getResource('http://localhost:8080/category')
   .then((category) =>{
     category.forEach((c) =>{
     console.log(c.name);
    })
   });


function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
