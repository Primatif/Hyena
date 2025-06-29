import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/molecules/Navigation/Navigation.jsx';
import StyleGuide from './pages/style-guide/StyleGuide.jsx';
import ServiceSheet from './pages/collateral/ServiceSheet/ServiceSheet.jsx';
import LayoutsPage from './pages/layouts/LayoutsPage.jsx';
import { brandColors } from './data/colors.js';

const App = () => {
    const appStyle = {
        backgroundColor: brandColors.PrimaryBackground,
        minHeight: '100vh'
    };

    return (
        <Router>
            <div style={appStyle}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<StyleGuide />} />
                    <Route path="/service-sheet" element={<ServiceSheet />} />
                    <Route path="/layouts" element={<LayoutsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
