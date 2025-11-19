import React, { useEffect, useState } from 'react';

export default function ReportList() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/reports')
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Submitted Reports</h2>
      {reports.map((r) => (
        <div key={r._id} className="border p-4 mb-2 rounded bg-white shadow">
          <p><strong>Location:</strong> {r.location}</p>
          <p><strong>Description:</strong> {r.description}</p>
          <p><strong>Status:</strong> {r.status}</p>
          <p className="text-sm text-gray-500">{new Date(r.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}