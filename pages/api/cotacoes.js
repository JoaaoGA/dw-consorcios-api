// pages/api/cotacoes.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://app.dwconsorcios.com.br/api/v1/contemplados');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar cotas:', error.message);
    res.status(500).json({ erro: 'Não foi possível obter os dados.' });
  }
}