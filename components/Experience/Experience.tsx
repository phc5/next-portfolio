import React, { useState } from 'react';
import ExperienceContent from './ExperienceContent/ExperienceContent';

export default function Experience() {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  return (
    <div className="space-y-6 lg:col-start-1 lg:col-span-3">
      <ExperienceContent
        selectedExperienceIndex={selectedExperienceIndex}
        setSelectedExperienceIndex={setSelectedExperienceIndex}
      />
    </div>
  );
}
