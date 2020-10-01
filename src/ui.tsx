import './styles.css';
import { h, render } from 'preact';

const App = () => {
  return <h1>Hello, Figma</h1>;
};

render(<App />, document.querySelector('#app'));
