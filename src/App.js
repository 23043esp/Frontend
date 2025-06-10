// src/App.js
import React, { useState, useEffect } from 'react';
import { Home, CheckCircle, XCircle, MapPin, RefreshCw } from 'lucide-react';
import './App.css';

// Components
import StatCard from './components/StatCard.js';
import HouseCard from './components/HouseCard.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import ErrorMessage from './components/ErrorMessage.js';
import EmptyState from './components/EmptyState.js';

// Services
import { fetchHouses, getHouseStats } from './services/houseService.js';

const HouseManagementApp = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadHouses = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await fetchHouses();
      setHouses(data);
    } catch (err) {
      console.error('Erreur lors du chargement des maisons:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHouses();
  }, []);

  const stats = getHouseStats(houses);

  if (loading) {
    return (
      <div className="app">
        <div className="container">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1 className="title">Gestion des Maisons</h1>
          <p className="subtitle">Gérez et visualisez vos propriétés immobilières</p>
        </div>

        {/* Statistics */}
        <div className="stats-grid">
          <StatCard
            icon={Home}
            title="Total Maisons"
            value={stats.total}
            color="#3b82f6"
          />
          <StatCard
            icon={CheckCircle}
            title="Disponibles"
            value={stats.available}
            color="#10b981"
          />
          <StatCard
            icon={XCircle}
            title="Occupées"
            value={stats.occupied}
            color="#ef4444"
          />
          <StatCard
            icon={MapPin}
            title="Total Portes"
            value={stats.totalDoors}
            color="#8b5cf6"
          />
        </div>

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Liste des Maisons</h2>
          <button className="refresh-button" onClick={loadHouses}>
            <RefreshCw size={16} style={{marginRight: '0.5rem'}} />
            Actualiser
          </button>
        </div>

        {/* Content */}
        {error && !houses.length ? (
          <ErrorMessage message={error} onRetry={loadHouses} />
        ) : houses.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="houses-grid">
            {houses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="footer">
          <p>© 2025 Système de Gestion des Maisons - Développé avec React</p>
        </div>
      </div>
    </div>
  );
};

export default HouseManagementApp;