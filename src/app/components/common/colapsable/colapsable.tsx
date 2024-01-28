"use client";
import React, { useState } from 'react';
import styles from './colapsable.module.css';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleComponent: React.FC<CollapsibleProps> = ({ title,children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.collapsible}>
      <div className={styles.header} onClick={toggleCollapse}>
        <span className={isCollapsed ? styles.arrowDown : styles.arrowUp}></span>
        <span className='text-sm'>{title}</span>
      </div>
      {!isCollapsed && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default CollapsibleComponent;