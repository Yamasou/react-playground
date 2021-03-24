import './App.css';
import Characters from "./playgroundComponents/8_2/Characters"

function App() {
  return (
    <div className="App">
      <p>React を勉強するために検証用で作成したコンポーネントをここに並べていく</p>
      <div className="section">
        <h2 className="title">8-2 コンポーネントと Props </h2>
        <Characters />
      </div>
      <div className="section">
        <h2 className="title">8-3 クラスコンポーネントで学ぶ State </h2>
        <Characters />
      </div>
    </div>
  );
}

export default App;