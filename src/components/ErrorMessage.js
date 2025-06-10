// src/components/ErrorMessage.js
import React from 'react';
import { XCircle } from 'lucide-react';

const styles = {
  error: {
    backgroundColor: '#fff5f5',
    border: '1px solid #feb2b2',
    borderRadius: '8px',
    padding: '1.5rem',
    textAlign: 'center'
  },
  errorTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#742a2a',
    marginBottom: '0.5rem'
  },
  errorMessage: {
    color: '#c53030',
    marginBottom: '1rem'
  },
  errorButton: {
    backgroundColor: '#e53e3e',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  }
};

const ErrorMessage = ({ message, onRetry }) => (
  <div style={styles.error}>
    <XCircle size={48} color="#e53e3e" style={{margin: '0 auto 1rem'}} />
    <h3 style={styles.errorTitle}>Erreur de chargement</h3>
    <p style={styles.errorMessage}>{message}</p>
    <button 
      style={styles.errorButton} 
      onClick={onRetry}
      onMouseOver={(e) => e.target.style.backgroundColor = '#c53030'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#e53e3e'}
    >
      Réessayer
    </button>
  </div>
);

export default ErrorMessage;