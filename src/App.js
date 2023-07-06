import Navigation from './components/Navigation/Navigation';
import RightPanel from './components/RightPanel/RightPanel';
import css from './styles/app.module.scss';

function App() {
  return (
    <div className={css.container}>
      <Navigation/>
      <RightPanel/>
    </div>
  );
}

export default App;
