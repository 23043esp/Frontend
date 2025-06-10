// src/components/HouseCard.js
import React from 'react';
import { Home, CheckCircle, XCircle, MapPin, Palette, Hash } from 'lucide-react';
import { COLOR_MAP, DEFAULT_COLOR } from '../utils/constants.js';

const styles = {
  houseCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    borderLeft: '4px solid',
    transition: 'box-shadow 0.2s'
  },
  houseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  houseTitle: {
    display: 'flex',
    alignItems: 'center'
  },
  houseTitleText: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#2d3748',
    marginLeft: '0.5rem'
  },
  statusBadge: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500'
  },
  statusAvailable: {
    backgroundColor: '#f0fff4',
    color: '#22543d'
  },
  statusOccupied: {
    backgroundColor: '#fff5f5',
    color: '#742a2a'
  },
  houseDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  detailRow: {
    display: 'flex',
    alignItems: 'center'
  },
  detailIcon: {
    width: '1rem',
    height: '1rem',
    color: '#718096',
    marginRight: '0.5rem'
  },
  detailLabel: {
    fontSize: '0.875rem',
    color: '#718096'
  },
  detailValue: {
    marginLeft: '0.5rem',
    fontWeight: '500',
    color: '#2d3748'
  },
  colorIndicator: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0.5rem'
  },
  colorDot: {
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    border: '1px solid #e2e8f0',
    marginRight: '0.5rem'
  },
  codeValue: {
    marginLeft: '0.5rem',
    fontFamily: 'monospace',
    backgroundColor: '#f7fafc',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.875rem'
  }
};

const getColorCode = (colorName) => {
  const lowerColor = colorName.toLowerCase();
  
  for (const [key, value] of Object.entries(COLOR_MAP)) {
    if (lowerColor.includes(key)) {
      return value;
    }
  }
  
  return DEFAULT_COLOR;
};

const HouseCard = ({ house }) => {
  const isAvailable = house.available === 1;
  
  return (
    <div 
      style={{
        ...styles.houseCard, 
        borderLeftColor: isAvailable ? '#10b981' : '#ef4444'
      }}
    >
      <div style={styles.houseHeader}>
        <div style={styles.houseTitle}>
          <Home color="#3182ce" size={24} />
          <h3 style={styles.houseTitleText}>Maison #{house.id}</h3>
        </div>
        <div style={{
          ...styles.statusBadge,
          ...(isAvailable ? styles.statusAvailable : styles.statusOccupied)
        }}>
          {isAvailable ? (
            <>
              <CheckCircle size={16} style={{marginRight: '0.25rem'}} />
              Disponible
            </>
          ) : (
            <>
              <XCircle size={16} style={{marginRight: '0.25rem'}} />
              Occupée
            </>
          )}
        </div>
      </div>
      
      <div style={styles.houseDetails}>
        <div style={styles.detailRow}>
          <MapPin style={styles.detailIcon} />
          <span style={styles.detailLabel}>Nombre de portes:</span>
          <span style={styles.detailValue}>{house.numberDoors}</span>
        </div>
        
        <div style={styles.detailRow}>
          <Palette style={styles.detailIcon} />
          <span style={styles.detailLabel}>Couleur:</span>
          <div style={styles.colorIndicator}>
            <div 
              style={{
                ...styles.colorDot,
                backgroundColor: getColorCode(house.color)
              }}
            ></div>
            <span style={styles.detailValue}>{house.color}</span>
          </div>
        </div>
        
        <div style={styles.detailRow}>
          <Hash style={styles.detailIcon} />
          <span style={styles.detailLabel}>Code:</span>
          <span style={styles.codeValue}>{house.code}</span>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;