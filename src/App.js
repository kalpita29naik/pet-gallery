import './App.css';
import Nav from './components/Nav';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <div className='bg-[#EBD6FB] min-h-screen'>
      <Nav />

      <AppRoutes />
    </div>
  );
}

export default App;
