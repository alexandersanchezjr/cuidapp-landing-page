import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Switch, Route } from 'react-dom/client'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Form from './components/Form.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
