import logo from './logo.svg';
import AppRoutes from './router/routes';
import { AuthProvider } from './config';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
