import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AnimalPage from './pages/AnimalPage/AnimalPage';
import EditAnimal from './pages/AnimalPage/EditAnimal';
import CreateAnimal from './pages/AnimalPage/CreateAnimal';
import CurralPage from './pages/CurralPage/CurralPage'; // Nova página para Curral
import LotePage from './pages/LotePage/LotePage'; // Nova página para Lote
import MedicacaoPage from './pages/MedicacaoPage/MedicacaoPage'; // Nova página para Medicação
import CreateCurral from './pages/CurralPage/CreateCurral'; // Nova página para criar curral
import CreateLote from './pages/LotePage/CreateLote'; // Nova página para criar lote
import CreateMedicacao from './pages/MedicacaoPage/CreateMedicacao'; // Nova página para criar medicação
import EditCurral from './pages/CurralPage/EditCurralPage'; // Página para editar curral
import EditLote from './pages/LotePage/EditLotePage'; // Página para editar lote
import EditMedicacao from './pages/MedicacaoPage/EditMedicacao.Page'; // Página para editar medicação

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rota para a página de listagem de animais */}
        <Route path="/animal" element={<AnimalPage />} />

        {/* Rota para a página de edição de um animal específico */}
        <Route path="/editar-animal/:id" element={<EditAnimal />} />

        {/* Rota para a página de criação de um novo animal */}
        <Route path="/criar-animal" element={<CreateAnimal />} />

        {/* Rota para a página de listagem de currais */}
        <Route path="/curral" element={<CurralPage />} />

        {/* Rota para criar novo curral */}
        <Route path="/criar-curral" element={<CreateCurral />} />

        {/* Rota para editar um curral específico */}
        <Route path="/editar-curral/:id" element={<EditCurral />} /> {/* Rota adicionada */}

        {/* Rota para a página de listagem de lotes */}
        <Route path="/lote" element={<LotePage />} />

        {/* Rota para criar novo lote */}
        <Route path="/criar-lote" element={<CreateLote />} />

        {/* Rota para editar um lote específico */}
        <Route path="/editar-lote/:id" element={<EditLote />} /> {/* Rota adicionada */}

        {/* Rota para a página de listagem de medicação */}
        <Route path="/medicacao" element={<MedicacaoPage />} />

        {/* Rota para criar nova medicação */}
        <Route path="/criar-medicacao" element={<CreateMedicacao />} />

        {/* Rota para editar uma medicação específica */}
        <Route path="/editar-medicacao/:id" element={<EditMedicacao />} /> {/* Rota adicionada */}
      </Routes>
    </Router>
  );
}

export default App;


