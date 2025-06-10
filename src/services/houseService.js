// src/services/houseService.js
import { API_BASE_URL, MOCK_DATA } from '../utils/constants.js';

export const fetchHouses = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Erreur lors du chargement des maisons:', err);
    // Retourner les données de simulation en cas d'erreur
    return MOCK_DATA;
  }
};

export const getHouseStats = (houses) => {
  const availableHouses = houses.filter(house => house.available === 1);
  const occupiedHouses = houses.filter(house => house.available === 0);
  const totalDoors = houses.reduce((sum, house) => sum + house.numberDoors, 0);

  return {
    total: houses.length,
    available: availableHouses.length,
    occupied: occupiedHouses.length,
    totalDoors
  };
};