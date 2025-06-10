
// src/utils/constants.js
export const API_BASE_URL = 'http://localhost:8080/api/houses';

export const MOCK_DATA = [
  { id: 12, numberDoors: 9, color: "White", code: "0XD556", available: 1 },
  { id: 13, numberDoors: 4, color: "Red", code: "CC001", available: 1 },
  { id: 14, numberDoors: 8, color: "Gray", code: "SS001", available: 0 },
  { id: 15, numberDoors: 1, color: "Yellow-grayish", code: "Tiba", available: 1 }
];

export const COLOR_MAP = {
  'white': '#ffffff',
  'red': '#dc2626',
  'gray': '#6b7280',
  'grey': '#6b7280',
  'yellow': '#eab308'
};

export const DEFAULT_COLOR = '#94a3b8';