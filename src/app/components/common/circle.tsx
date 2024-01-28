import React from 'react';
import styles from './circle.module.css';

interface CircularComponentProps {
  backgroundColor: string;
  value: number;
  textColor: string;
}

const CircularComponent: React.FC<CircularComponentProps> = ({ backgroundColor, value, textColor }) => {
  const containerStyle = {
    backgroundColor,
    color: textColor,
  };

  return (
    <div className={styles.circularContainer} style={containerStyle}>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default CircularComponent;