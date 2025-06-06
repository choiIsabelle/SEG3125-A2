import React from 'react'
import './App.css'
import { LandingPage } from './pages/LandingPage'
import enTranslations from '@shopify/polaris/locales/en.json';
import { Navbar } from './components/Navbar'
import { AppProvider } from '@shopify/polaris';
import { PatientPortal } from './pages/PatientPortal';

function App() {
  
  const [currentPage, setCurrentPage] = React.useState('home');
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <AppProvider i18n={enTranslations}>
    <Navbar handlePageChange={handlePageChange}/>
    {currentPage === 'home' && <PatientPortal />}
    {currentPage === 'services' && <PatientPortal />}
    {currentPage === 'patientPortal' && <PatientPortal />}
  
    <LandingPage/>
    </AppProvider>
  )
}

export default App
