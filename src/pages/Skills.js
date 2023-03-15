import React from 'react';
import BarChart from 'Components/BarChart.js'

const programmingLanguageData = [
    { language: 'C#', hours: 100 },
    { language: 'Java', hours: 40 },
  ];

function Skills() {
    return (
        <div>
            <h1>Skills</h1>
            <BarChart data={programmingLanguageData} title='Programming Languages' xAxisName='language' yAxisName ='hours'/>
        </div>
    );
}

export default Skills;