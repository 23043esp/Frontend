// src/components/EmptyState.js
import React from 'react';
import { Home } from 'lucide-react';

const styles = {
  empty: {
    textAlign: 'center',
    padding: '3rem'
  },
  emptyTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#718096',
    marginBottom: '0.5rem'
  },
  emptyMessage: {
    color: '#a0aec0'
  }
};

const EmptyState = () => (
  <div style={styles.empty}>
    <Home size={64} color="#a0aec0" style={{margin: '0 auto 1rem', display: 'block'}} />
    <h3 style={styles.emptyTitle}>Aucune maison trouvée</h3>
    <p style={styles.emptyMessage}>Il n'y a actuellement aucune maison dans le système.</p>
  </div>
);

export default EmptyState;