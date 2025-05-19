import '../TabSwitcher.css';
import { useState } from 'react';

const TabSwitcher = () => {
    const [activeTab, setActiveTab] = useState('home');

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <div>🏠 Welcome to the Home tab!</div>;
            case 'profile':
                return <div>👤 This is your Profile.</div>;
            case 'settings':
                return <div>⚙️ Adjust your Settings here.</div>;
            default:
                return null;
        }
    }
    return (
        <div className="tab-container">
            <div className="tab-header">
                <button onClick={() => setActiveTab('home')}>Home</button>
                <button onClick={() => setActiveTab('profile')}>Profile</button>
                <button onClick={() => setActiveTab('settings')}>Settings</button>
            </div>
            <div className="tab-content">{renderContent()}</div>
        </div>
      );
}

export default TabSwitcher