import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SectionPage from './pages/SectionPage';
import Contact from './pages/Contact';
import PostDetail from './pages/PostDetail';
import SettingsModal from './components/SettingsModal';
import { GithubConfig } from './types';
import { getStoredConfig, setStoredConfig } from './services/githubService';

const App: React.FC = () => {
  const [config, setConfig] = useState<GithubConfig | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    // Load config on startup
    const stored = getStoredConfig();
    setConfig(stored);
  }, []);

  const handleSaveConfig = (newConfig: GithubConfig | null) => {
    setConfig(newConfig);
    if (newConfig) {
      setStoredConfig(newConfig);
    } else {
      localStorage.removeItem('backyard9_config');
    }
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout onOpenSettings={() => setIsSettingsOpen(true)} />}>
          <Route index element={<Home />} />
          
          <Route 
            path="goals" 
            element={
              <SectionPage 
                title="Project Goals" 
                subtitle="The vision, requirements, and dreams for the course."
                category="goals" 
                mode="single" 
                config={config} 
              />
            } 
          />
          
          <Route 
            path="planning" 
            element={
              <SectionPage 
                title="The Planning Phase" 
                subtitle="Blueprints, sketches, and logistical nightmares."
                category="planning" 
                mode="list" 
                config={config} 
              />
            } 
          />
          
          <Route 
            path="building" 
            element={
              <SectionPage 
                title="Under Construction" 
                subtitle="Moving dirt, shaping greens, and growing grass."
                category="building" 
                mode="list" 
                config={config} 
              />
            } 
          />
          
          <Route 
            path="playing" 
            element={
              <SectionPage 
                title="Playing the Course" 
                subtitle="The scorecard, rules, and course record."
                category="playing" 
                mode="single" 
                config={config} 
              />
            } 
          />
          
          <Route path="contact" element={<Contact />} />
          <Route path="post/:category/:slug" element={<PostDetail config={config} />} />
        </Route>
      </Routes>

      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        config={config}
        onSave={handleSaveConfig}
      />
    </HashRouter>
  );
};

export default App;