import './App.css';

const res = fetch('http://localhost:8080/category').then((res)=> {
  return res.json();
})
.then((body => {
  return body;
}));

console.log(res);

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
