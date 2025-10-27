import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';
import '../styles/ContentArea.css';
import TabContent1 from './TabContent1';
import TabContent2 from './TabContent2';
import TabContent3 from './TabContent3';
import TabContent4 from './TabContent4';

const ContentArea = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [headerShrink, setHeaderShrink] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'tab1': return <TabContent1 />;
      case 'tab2': return <TabContent2 />;
      case 'tab3': return <TabContent3 />;
      case 'tab4': return <TabContent4 />;
      default: return <TabContent1 />;
    }
  };

  return (
    <div>
      <Header onShrinkChange={setHeaderShrink} />
      <NavTabs activeTab={activeTab} onTabClick={setActiveTab} shrink={headerShrink} />
      <main className="content-area">{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default ContentArea;
