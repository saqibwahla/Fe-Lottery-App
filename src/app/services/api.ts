import axios from 'axios';
import{API_ENDPOINTS} from '../config/endpoints'

const API_BASE_URL = 'https://testing-luckito-backend.rnssol.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCosmicLottery = async () => {
  try {
    const response = await api.get(API_ENDPOINTS.getCosmicLottery);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching ');
  }
};
export const getClassicLottery = async () => {
  try {
    const response = await api.get(API_ENDPOINTS.getClassicLottery);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching ');
  }
};
export const getAtomicLottery = async () => {
  try {
    const response = await api.get(API_ENDPOINTS.getAtomicLottery);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching ');
  }
};