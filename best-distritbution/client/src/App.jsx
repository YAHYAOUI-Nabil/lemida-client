import Navbar from './home/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './home/Home'
import Devis from './Devis';
import ContactForm from './ContactForm';
import Footer from './home/Footer';
import About from './home/About'
import ItemDetails from './home/ItemDetails';
import LoginAdmin from './home/Dashbord/LoginAdmin';
import {DashbordAdmin} from './home/Dashbord/DashbordAdmin';
import Cards from './home/Cards';
import SignupAdmin from './home/Dashbord/SignupAdmin';
import AddArticle from './home/AddArticle';
import ProduitAdmin from './home/Dashbord/ProduitAdmin';
import EditArticle from './home/Dashbord/EditArticle';
import Commandes from './home/Dashbord/Commandes';
import Message from './home/Dashbord/Message';
import ListeDevis from './home/Dashbord/ListeDevis';
import { AuthProvider } from './context/AuthContext'; // Assure-toi d'importer ton contexte
import ProtectedRoute from './ProtectedRoute'; // Assure-toi d'importer ton composant ProtectedRoute

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Devis" element={<div>
            <Navbar />
            <Devis />
            <Footer />
          </div>} />

          <Route path="/details" element={<div>
            <Navbar />
            <ItemDetails />
            <Footer />
          </div>} />

          <Route path="/apropos" element={<div>
            <Navbar />
            <About />
            <Footer />
          </div>} />

          <Route path="/Contacter-Nous" element={<>
            <Navbar />
            <ContactForm />
            <Footer />
          </>} />

          <Route path="/Catalogue" element={<>
            <Navbar />
            <Cards />
            <Footer />
          </>} />

          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/SignupAdmin" element={<SignupAdmin />} />

          {/* Routes protégées */}
          <Route path="/adminDashboard" element={
            <ProtectedRoute>
              <DashbordAdmin />
            </ProtectedRoute>
          } />

          <Route path="/add-article" element={
            <ProtectedRoute>
              <AddArticle />
            </ProtectedRoute>
          } />

          <Route path="/Article" element={
            <ProtectedRoute>
              <ProduitAdmin />
            </ProtectedRoute>
          } />

          <Route path="/edit" element={
            <ProtectedRoute>
              <EditArticle />
            </ProtectedRoute>
          } />

          <Route path="/commande" element={
            <ProtectedRoute>
              <Commandes />
            </ProtectedRoute>
          } />

          <Route path="/Message" element={
            <ProtectedRoute>
              <Message />
            </ProtectedRoute>
          } />

          <Route path="/liste-devis" element={
            <ProtectedRoute>
              <ListeDevis />
            </ProtectedRoute>
          } />

          <Route path="/*" element={<Navigate to="/Home" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
