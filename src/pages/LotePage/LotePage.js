import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx'; // Importa a biblioteca xlsx
import './LotePage.css';
import downloadIcon from '../../Assets/download-icon.png'; // Ícone de download

function LotePage() {
  const [selectedLote, setSelectedLote] = useState(null); // Estado para armazenar o lote selecionado
  const navigate = useNavigate();

  // Função para capturar a seleção de um checkbox
  const handleCheckboxChange = (event, lote) => {
    if (event.target.checked) {
      setSelectedLote(lote); // Armazena o lote selecionado
    } else {
      setSelectedLote(null); // Desmarca o lote selecionado
    }
  };

  // Função para redirecionar para a página de edição
  const handleEditClick = () => {
    if (selectedLote) {
      navigate(`/editar-lote/${selectedLote.id}`); // Redireciona para a página de edição do lote
    } else {
      alert('Por favor, selecione um lote para editar.');
    }
  };

  // Função para criar um novo lote (redireciona para a página de criação)
  const handleCreateClick = () => {
    navigate('/criar-lote'); // Redireciona para a página de criação de lote
  };

  // Função para excluir um lote
  const handleDeleteClick = () => {
    if (selectedLote) {
      // Aqui você pode adicionar a lógica para excluir o lote selecionado
      alert(`Lote ${selectedLote.nome} excluído com sucesso.`);
      setSelectedLote(null); // Desmarca o lote após exclusão
    } else {
      alert('Por favor, selecione um lote para excluir.');
    }
  };

  // Função para fazer o download dos dados da tabela como Excel
  const handleDownloadClick = () => {
    const data = lotes.map(lote => ({
      Nome: lote.nome,
      Tamanho: lote.tamanho,
      Descrição: lote.descricao,
    }));

    // Cria uma nova planilha
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Cria uma nova pasta de trabalho
    const workbook = XLSX.utils.book_new();

    // Adiciona a planilha à pasta de trabalho
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Lotes');

    // Gera o arquivo Excel e faz o download
    XLSX.writeFile(workbook, 'lotes.xlsx');
  };

  const lotes = [
    {
      id: '1',
      nome: 'Lote A',
      tamanho: '20 hectares',
      descricao: 'Área de pastagem.',
    },
    {
      id: '2',
      nome: 'Lote B',
      tamanho: '30 hectares',
      descricao: 'Área de confinamento.',
    },
    // Adicione mais lotes conforme necessário
  ];

  return (
    <div className="container-pagina-lote">
      <h1>Lote</h1>
      <div className="acoes-lote">
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
      <table className="tabela-lote">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Tamanho</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {lotes.map((lote) => (
            <tr key={lote.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, lote)}
                />
              </td>
              <td>{lote.nome}</td>
              <td>{lote.tamanho}</td>
              <td>{lote.descricao}</td>
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

export default LotePage;
