import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import AppRouter from "./AppRouter";

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
    <AppRouter tab="home" />
);

