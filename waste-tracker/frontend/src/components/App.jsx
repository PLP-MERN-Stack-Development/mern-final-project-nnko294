import React from 'react';
import ReportForm from './components/ReportForm';
import ReportList from './components/ReportList';

function App() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Waste Collection Tracker</h1>
      <ReportForm />
      <ReportList />
    </div>
  );
}

export default App;