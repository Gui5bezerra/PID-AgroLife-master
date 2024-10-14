import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx'; // Importa a biblioteca xlsx
import './AnimalPage.css';
import downloadIcon from '../../Assets/download-icon.png'; // Ícone de download

function AnimalPage() {
  const [selectedAnimal, setSelectedAnimal] = useState(null); // Estado para armazenar o animal selecionado
  const navigate = useNavigate();

  // Função para capturar a seleção de um checkbox
  const handleCheckboxChange = (event, animal) => {
    if (event.target.checked) {
      setSelectedAnimal(animal); // Armazena o animal selecionado
    } else {
      setSelectedAnimal(null); // Desmarca o animal selecionado
    }
  };

  // Função para redirecionar para a página de edição
  const handleEditClick = () => {
    if (selectedAnimal) {
      navigate(`/editar-animal/${selectedAnimal.sisbov}`); // Redireciona para a página de edição
    } else {
      alert('Por favor, selecione um animal para editar.'); // Alerta caso nenhum animal esteja selecionado
    }
  };

  // Função para criar um novo animal (redireciona para a página de criação)
  const handleCreateClick = () => {
    navigate('/criar-animal'); // Redireciona para a página de criação de animal
  };

  // Função para excluir um animal
  const handleDeleteClick = () => {
    if (selectedAnimal) {
      // Aqui você pode adicionar a lógica para excluir o animal selecionado
      alert(`Animal com Sisbov ${selectedAnimal.sisbov} excluído com sucesso.`);
      setSelectedAnimal(null); // Desmarca o animal após exclusão
    } else {
      alert('Por favor, selecione um animal para excluir.');
    }
  };

  // Função para fazer o download dos dados da tabela como Excel
  const handleDownloadClick = () => {
    const data = animals.map(animal => ({
      Chip: animal.chip,
      Sisbov: animal.sisbov,
      Sexo: animal.sexo,
      Raça: animal.raca,
      Era: animal.era,
      Curral: animal.curral,
      Lote: animal.lote,
      Peso: animal.peso,
      Status: animal.status,
    }));

    // Cria uma nova planilha
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Cria uma nova pasta de trabalho
    const workbook = XLSX.utils.book_new();

    // Adiciona a planilha à pasta de trabalho
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Animais');

    // Gera o arquivo Excel e faz o download
    XLSX.writeFile(workbook, 'animais.xlsx');
  };

  const animals = [
    {
      chip: '982000366448014',
      sisbov: '105520419419885',
      sexo: 'Macho',
      raca: 'Nelore',
      era: '13 - 24 Meses',
      curral: 'A-01',
      lote: '11001',
      peso: 450,
      status: 'D',
    },
    // Adicione mais animais conforme necessário
  ];

  return (
    <div className="container-pagina-animal">
      <h1>Animal</h1>
      <div className="acoes-animal">
        <button className="botao-criar" onClick={handleCreateClick}>
          Criar
        </button>
        <button className="botao-editar" onClick={handleEditClick}>
          Editar
        </button>
        <button className="botao-excluir" onClick={handleDeleteClick}>
          Excluir
        </button>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="input-pesquisa"
        />
        <button className="botao-filtrar">🔍</button>
      </div>
      <table className="tabela-animal">
        <thead>
          <tr>
            <th></th>
            <th>Chip</th>
            <th>Sisbov</th>
            <th>Sexo</th>
            <th>Raça</th>
            <th>Era</th>
            <th>Curral</th>
            <th>Lote</th>
            <th>Peso</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.sisbov}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, animal)}
                />
              </td>
              <td>{animal.chip}</td>
              <td>{animal.sisbov}</td>
              <td>{animal.sexo}</td>
              <td>{animal.raca}</td>
              <td>{animal.era}</td>
              <td>{animal.curral}</td>
              <td>{animal.lote}</td>
              <td>{animal.peso}</td>
              <td>{animal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Ícone de download posicionado ao final da tabela */}
      <div className="botao-download-wrapper">
        <button className="botao-download" onClick={handleDownloadClick}>
          <img src={downloadIcon} alt="Download" className="download-icon" />
        </button>
      </div>
    </div>
  );
}

export default AnimalPage;
