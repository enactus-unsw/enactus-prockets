import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

//Import wherever you need a dropdown (Example ussage in header.tsx)
export type DropdownItem = {
  label: string;
  to: string;
};

type DropdownProps = {
  label?: string;
  items: DropdownItem[];
};


const Dropdown: React.FC<DropdownProps> = ({ label = 'Dropdown', items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div style={styles.dropdown} ref={dropdownRef}>
      <button onClick={toggleDropdown} style={styles.button}>{label}</button>
      <div style={{
        ...styles.content,
        ...(isOpen ? styles.contentVisible : {})
      }}>
        {items.map((item, idx) => (
          <Link key={idx} to={item.to} style={styles.link}>{item.label}</Link>
        ))}
      </div>
    </div>
  );
};


const styles = {
  dropdown: {
    position: 'relative' as const,
  },
  button: {
    cursor: 'pointer',
  },
  content: {
    display: 'none',
    position: 'absolute' as const,
    backgroundColor: 'white',
    minWidth: '160px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
    zIndex: 1,
    marginTop: '5px',
  },
  contentVisible: {
    display: 'block',
  },
  link: {
    color: 'black',
    padding: '10px 14px',
    textDecoration: 'none',
    display: 'block',
  },
};

export default Dropdown;




