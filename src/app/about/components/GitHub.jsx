"use client"
import React, { useEffect } from 'react';

import GithubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar-responsive.css';
import 'github-calendar/dist/github-calendar.min.js';

import './ContributionsGraph.scss';

const ContributionsGraph = () => {
  useEffect(() => {
    GithubCalendar('.calendar', 'kakuPandeyy', {
    });
  }, []);

  return (

      <div className="contributions-graph ">
        <h2 className=' sm:text-center text-cyan-400 text-xl font-semibold'> Day i Code</h2>
        <div className="calendar" />
      </div>
  
  );
};

export default ContributionsGraph;