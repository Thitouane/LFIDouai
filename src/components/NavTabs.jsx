import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/NavTabs.css';

const tabs = [
  { id: 'tab1', icon: <HomeIcon sx={{ fontSize: 28 }} />, color: '#757575ff' },
  { id: 'tab2', label: 'Theme1', color: '#E51B23' },
  { id: 'tab3', label: 'Theme2', color: '#009FE3' },
  { id: 'tab4', label: 'Theme3', color: '#F6A800' },
];

const NavTabs = ({ activeTab, onTabClick, shrink }) => (
  <nav className={`navtabs ${shrink ? 'shrink' : ''}`}>
    {tabs.map(tab => (
      <button
        key={tab.id}
        className={activeTab === tab.id ? 'active' : ''}
        style={{ backgroundColor: tab.color }}
        onClick={() => onTabClick(tab.id)}
      >
        <span className={`tab-label ${shrink ? 'shrink' : ''}`}>
          {tab.icon || tab.label}
        </span>
      </button>
    ))}
  </nav>
);
export default NavTabs;
