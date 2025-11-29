import React, { useState, useEffect } from 'react';
import { GithubConfig } from '../types';
import { X, Github, Database } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  config: GithubConfig | null;
  onSave: (config: GithubConfig | null) => void;
}

const SettingsModal: React.FC<Props> = ({ isOpen, onClose, config, onSave }) => {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [path, setPath] = useState('posts');
  const [useDemo, setUseDemo] = useState(true);

  useEffect(() => {
    if (config) {
      setOwner(config.owner);
      setRepo(config.repo);
      setPath(config.path || 'posts');
      setUseDemo(false);
    } else {
      setUseDemo(true);
    }
  }, [config, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (useDemo) {
      onSave(null);
    } else {
      onSave({ owner, repo, path });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
          <h2 className="text-xl font-serif font-bold text-golf-900">Data Source Settings</h2>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-sm text-stone-500">
            Configure where the blog posts are loaded from. You can use the built-in demo data or connect a public GitHub repository.
          </p>

          <div className="flex flex-col space-y-3">
            <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors hover:bg-stone-50">
              <input 
                type="radio" 
                name="source" 
                checked={useDemo} 
                onChange={() => setUseDemo(true)}
                className="text-golf-600 focus:ring-golf-500"
              />
              <div className="flex items-center space-x-2">
                <Database size={18} className="text-stone-400" />
                <span className="font-medium text-stone-700">Use Demo Data</span>
              </div>
            </label>

            <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors hover:bg-stone-50">
              <input 
                type="radio" 
                name="source" 
                checked={!useDemo} 
                onChange={() => setUseDemo(false)}
                className="text-golf-600 focus:ring-golf-500"
              />
              <div className="flex items-center space-x-2">
                <Github size={18} className="text-stone-400" />
                <span className="font-medium text-stone-700">Use GitHub Repository</span>
              </div>
            </label>
          </div>

          {!useDemo && (
            <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">GitHub Username</label>
                <input
                  type="text"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  placeholder="e.g., fastegg"
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golf-500 focus:border-golf-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Repository Name</label>
                <input
                  type="text"
                  value={repo}
                  onChange={(e) => setRepo(e.target.value)}
                  placeholder="e.g., backyard-golf-blog"
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golf-500 focus:border-golf-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Path to Posts</label>
                <input
                  type="text"
                  value={path}
                  onChange={(e) => setPath(e.target.value)}
                  placeholder="e.g., posts"
                  className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golf-500 focus:border-golf-500"
                />
                <p className="text-xs text-stone-400 mt-1">Directory containing your .md files</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-stone-100 bg-stone-50 flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-golf-600 text-white font-medium rounded-lg hover:bg-golf-700 transition-colors shadow-sm"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;