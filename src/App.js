import mobile from './images/pattern-divider-mobile.svg';
import desktop from './images/pattern-divider-desktop.svg';
import dice from './images/icon-dice.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1></h1>

      <p></p>

      <picture>
        <source media='(min-width: 768px)' srcSet={desktop}></source>
        <img src={mobile} alt='' />
      </picture>

      <div>
        <button>
          <img src={dice} alt='' />
        </button>
      </div>
    </div>
  );
}

export default App;
