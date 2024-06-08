import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { HuddleProvider, HuddleClient } from '@huddle01/react';

const apiKey = import.meta.env.VITE_API_KEY || 'default-api-key';
const projectId = import.meta.env.VITE_PROJECT_ID || 'default-project-id';

const huddleClient = new HuddleClient({
  projectId: projectId,
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HuddleProvider client={huddleClient}>
      <App />
    </HuddleProvider>
  </React.StrictMode>,
);
