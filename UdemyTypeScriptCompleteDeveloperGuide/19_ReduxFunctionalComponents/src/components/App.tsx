import '../App.css'
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

export default function App() {
  return (
    <Provider store={store}>
      <main>
        <div>
          <h2>Search for a Package</h2>
          <RepositoriesList />
        </div>
      </main>
    </Provider>
  );
}