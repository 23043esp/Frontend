// src/components/StatCard.js
import React from 'react';

const styles = {
  statCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    borderLeft: '4px solid'
  },
  statCardContent: {
    display: 'flex',
    alignItems: 'center'
  },
  statIcon: {
    width: '2rem',
    height: '2rem',
    marginRight: '1rem'
  },
  statTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#718096'
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1a202c'
  }
};

const StatCard = ({ icon: Icon, title, value, color }) => (
  <div style={{...styles.statCard, borderLeftColor: color}}>
    <div style={styles.statCardContent}>
      <Icon style={{...styles.statIcon, color}} />
      <div>
        <p style={styles.statTitle}>{title}</p>
        <p style={styles.statValue}>{value}</p>
      </div>
    </div>
  </div>
);

export default StatCard;