
import React, { useEffect, useState } from 'react';
import './fundingHistory.css'; // Make sure to create and link your CSS file
import apiRequest from '../../lib/apiRequest';
const FundingHistory = () => {
const[funding,setFunding]=useState([])

  useEffect(()=>{ 
    const fetchFunding=async()=>{
      try {
        const res=await apiRequest.get("/auth/fetchFunding")  
        setFunding(res.data)
      } catch (error) {
        console.error(error)
      }

    }
    fetchFunding()

  } ,[])

  const [filteredData, setFilteredData] = useState(funding);

  const filterDataByDate = (filterType) => {
    const now = new Date();
    let filtered;

    switch (filterType) {
      case 'today':
        filtered = funding.filter(item => new Date(item.createdAt).toDateString() === now.toDateString());
        break;
      case 'yesterday':
        const yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);
        filtered = funding.filter(item => new Date(item.createdAt).toDateString() === yesterday.toDateString());
        break;
      case 'lastweek':
        const lastWeek = new Date();
        lastWeek.setDate(now.getDate() - 7);
        filtered = funding.filter(item => new Date(item.createdAt) > lastWeek);
        break;
      case 'lastmonth':
        const lastMonth = new Date();
        lastMonth.setMonth(now.getMonth() - 1);
        filtered = funding.filter(item => new Date(item.createdAt) > lastMonth);
        break;
      default:
        filtered = funding;
        break;
    }
    setFilteredData(filtered);
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const filtered = funding.filter(item => new Date(item.createdAt).toDateString() === selectedDate.toDateString());
    setFilteredData(filtered);
  };

  return (
    <div className="funding-history-container">
      <h2>Funding History</h2>
      <div className="filter-bar">
        <button onClick={() => filterDataByDate('today')}>Today</button>
        <button onClick={() => filterDataByDate('yesterday')}>Yesterday</button>
        <button onClick={() => filterDataByDate('lastweek')}>Last Week</button>
        <button onClick={() => filterDataByDate('lastmonth')}>Last Month</button>
        <input type="date" onChange={handleDateChange} />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Time</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.username}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                  <td>{item.Amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No data available for the selected filter.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundingHistory;