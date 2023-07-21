import './App.css';


const userProfile = {
  name: "Carlos",
  phone: "123456789",
  zona: "Centro",
  email: "carlos.sierra.at@usa.edu.co",
  address: "St. Evergreen 456"
};

function Header() {
  let message = "";
  if(userProfile.name !== ""){
    // TODO message = <h1>Hola {userProfile.name}</h1><br /><div><ViewProfile /></div>;
    message = <h1>Hola {userProfile.name}</h1>
  }
  else
    message = <h1>Hola Usuario desconocido</h1>
  
  return (
    {message}
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Hola mundo!
      </header>
    </div>
  );
}



export {App};