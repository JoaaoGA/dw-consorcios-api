// pages/api/cotacoes.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://app.dwconsorcios.com.br/api/v1/contemplados');

    // Se quiser, filtre ou transforme os dados aqui
    const cotas = response.data.map((cota) => ({
      categoria: cota.category,
      valorCarta: cota.value,
      entrada: cota.input,
      parcela: cota.installment,
      prazo: cota.term,
      status: cota.status,
      administradora: cota.administrator?.name || 'Desconhecida',
    }));

    res.status(200).json(cotas);
  } catch (error) {
    console.error('Erro ao buscar cotas:', error.message);
    res.status(500).json({ erro: 'Não foi possível obter os dados.' });
  }
}