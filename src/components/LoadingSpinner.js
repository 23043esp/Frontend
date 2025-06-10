// src/components/LoadingSpinner.js
import React from 'react';
import { RefreshCw } from 'lucide-react';

const styles = {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem'
  },
  loadingText: {
    marginLeft: '0.5rem',
    color: '#718096'
  }
};

const LoadingSpinner = () => (
  <div style={styles.loading}>
    <RefreshCw size={32} color="#3182ce" className="animate-spin" />
    <span style={styles.loadingText}>Chargement des maisons...</span>
  </div>
);

export default LoadingSpinner;