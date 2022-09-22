// O export default, improtamos sem a chave e podemos dar o nome que quisermos
import SideBar from "./SideBar";
// O export sem default, precisamos saber o nome do componente e importar entre chaves
import { ContentWrapper } from "./ContentWrapper";


import '../assets/css/app.css'

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <ContentWrapper />
    </div>
  );
}

export default App;
