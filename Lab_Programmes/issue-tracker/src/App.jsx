import React from 'react';
import './App.css';
 const issues=[
  {
    id:1,
    title:"Bug in login page",
    description:"The login page throws an error when submitting invalid credentials.",
    status:"Open",
  },
  {
    id:2,
    title:"UI glitch on homepage",
    description:"There is a UI misalignment issue on the homepage for smaller screens.",
    status:"Closed",
  },
  {
    id:3,
    title:"Missing translation for settings page",
    description:"The settings page is missing translations for the Spanish language.",
    status:"Open",
  },
  {
    id:4,
    title:"Database connection error",
    description:"Intermittent database connection issue during peak hours.",
    status:"Open",
  },
 ];

 const Issue=({title,description,status})=>{
  return(
    <div className="issue">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={`status ${status.toLowerCase()}`}>{status}</span>
    </div>
  );
 };

 const App=()=>{
  return(
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="issue-list">
        {issues.map((issue)=>(
          <Issue
          key={issue.id}
          title={issue.title}
          description={issue.description}
          status={issue.status}
          />
        ))};
      </div>
    </div>
  );
 };

 export default App;