import { useContext } from 'react';
import Header from './Header';
import Play from './Play';
import Rules from './Rules';
import { MyContext } from './MyContext';
import Playing from './Playing';
function App() {
  const { closeRules, setCloseRules,playing } = useContext(MyContext);
  return (
    <article className="App">
      <Header />
      {playing?<Playing />: <Play />}
      {closeRules && <Rules />}
    </article>
  );
}

export default App;
