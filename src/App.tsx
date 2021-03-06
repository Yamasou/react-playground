import './App.css';
import Characters82 from "./playgroundComponents/8_2/Characters"
import Characters83 from "./playgroundComponents/8_3/Characters"
import Counter83 from "./playgroundComponents/8_3/Counter"
import CountDown from "./playgroundComponents/8_4/CountDown"
import Counter92 from "./playgroundComponents/9_2/Counter"
import Countdown from "./playgroundComponents/9_3/Countdown"

function App() {
  return (
    <div className="App">
      <p>React を勉強するために検証用で作成したコンポーネントをここに並べていく</p>
      <div className="section">
        <h2 className="title">8-2 コンポーネントと Props </h2>
        <Characters82 />
      </div>
      <div className="section">
        <h2 className="title">8-3 クラスコンポーネントで学ぶ State </h2>
        <Characters83 />
        <Counter83 />
      </div>
      <div className="section">
        <h2 className="title">8-4 コンポーネントのライフサイクル</h2>
        <CountDown />
      </div>
      <div className="section">
        <h2 className="title">9-2 Hooks、関数コンポーネントの合体強化パーツ</h2>
        <Counter92 />
      </div>
      <div className="section">
        <h2 className="title">9-3 Hooks で副作用を扱う</h2>
        <Countdown limit={100} />
      </div>
    </div>
  );
}

export default App;
