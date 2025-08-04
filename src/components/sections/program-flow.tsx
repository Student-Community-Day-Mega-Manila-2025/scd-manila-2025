'use client';

import React, { useState, useEffect, useRef } from 'react';
import plus from '@/public/plus.svg'
import Image from 'next/image';

// You can replace this with your actual event data fetched from an API
const programData = [
  {
    id: 'track-1',
    trackName: 'Morning Plenary',
    activities: [
      { time: '8:00 AM - 9:30 AM', title: 'Registration and Check-in of Attendees' },
      { time: '9:30 AM - 10:00 AM', title: 'Opening Remarks & Welcome Address' },
      { time: '10:00 AM - 10:30 AM', title: 'Keynote: The Dawn of a New Era' },
      { time: '10:30 AM - 11:00 AM', title: 'Networking Break' },
    ],
  },
  {
    id: 'track-2',
    trackName: 'Technical Track A',
    activities: [
      { time: '11:30 AM - 12:30 PM', title: 'Deep Dive into Quantum Computing' },
      { time: '12:30 PM - 1:30 PM', title: 'Architecting Scalable Microservices' },
      { time: '1:30 PM - 2:30 PM', title: 'Lunch Break' },
      { time: '2:30 PM - 3:30 PM', title: 'Advanced State Management Patterns' },
      { time: '3:30 PM - 4:30 PM', title: 'Real-time Data with WebSockets' },
    ],
  },
  {
    id: 'track-3',
    trackName: 'Business & Strategy Track',
    activities: [
      { time: '11:30 AM - 12:30 PM', title: 'Market Disruption and Innovation' },
      { time: '12:30 PM - 1:30 PM', title: 'Leading High-Performance Teams' },
      { time: '1:30 PM - 2:30 PM', title: 'Lunch Break' },
      { time: '2:30 PM - 3:30 PM', title: 'Data-Driven Decision Making' },
      { time: '3:30 PM - 4:30 PM', title: 'Future-Proofing Your Business Model' },
    ],
  },
  {
    id: 'track-4',
    trackName: 'Closing Remarks',
    activities: [
      { time: '4:30 PM - 5:30 PM', title: 'Panel Discussion: What\'s Next?' },
      { time: '5:30 PM - 6:00 PM', title: 'Awards and Closing Ceremony' },
      { time: '6:00 PM - 7:00 PM', title: 'Cocktail & Networking Hour' },
    ],
  },
];


const ProgramFlow = () => {
  const [activeTrack, setActiveTrack] = useState(programData[0]?.id || '');

  const handleTrackClick = (trackId: string) => {
    setActiveTrack(trackId);
  };

  return (
    <section
      id="program-flow"
      className="relative overflow-hidden bg-[var(--background)] px-4 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 text-left sm:mb-8">
          <h3 className="venue-subtitle">Mark Your Moments</h3>
          <h2 className="venue-title">Program Flow</h2>
        </div>
        <div className='flex flex-col md:flex-row gap-8'>

          {/* --- Left Sticky Sidebar --- */}
          <aside className="w-full">
            <ul className="flex flex-col gap-[22px]">
              {programData.map((track) => (
                <div
                  key={track.id}
                  onClick={() => handleTrackClick(track.id)}
                  className={`flex justify-between items-center border border-white/20 bg-transparent hover:border-white/40 lg:w-md h-auto w-full py-[20px] px-[50px] rounded-3xl cursor-pointer transition-all duration-300
                    ${activeTrack === track.id
                      ? 'bg-gradient-to-r from-[#01D5A5] via-[#4395AD] to-[#C7DFE6] shadow-lg'
                      : 'bg-transparent hover:bg-gradient-to-r hover:from-[rgba(1,213,165,0.50)] hover:via-[rgba(67,149,173,0.50)] hover:to-[rgba(199,223,230,0.50)] hover:shadow-lg'
                    }`}
                >
                  <h4 className="text-white text-lg font-semibold">
                    {track.trackName}
                  </h4>
                  <div className="text-white text-lg font-bold">
                    {track.activities.length}
                  </div>
                </div>
              ))}
            </ul>
          </aside>

          {/* --- Right Content Area --- */}
          <main className="lg:min-w-2xl lg:max-w-2xl">
            {programData.map((track) => (
              <div key={track.id} className='border border-white/20 rounded-3xl px-9 py-3 w-full mb-4'>
                <div className='flex justify-between items-center px-4 py-4 border-b border-white'>
                  <h4 className='text-white text-lg font-bold'>
                    {track.trackName}
                  </h4>
                  <div className='text-white text-sm font-medium border-b-2 border-white'>Open All</div>
                </div>
                <div className='flex flex-col'>
                  {track.activities.map((activity, index) => (
                    <div key={`${activity.title}-${index}`} className='flex justify-between items-center gap-4 py-4 border-b border-white text-white text-sm font-bold'>
                      <div className='min-w-[140px] border-r border-white'>
                        {activity.time}
                      </div>
                      <div className='flex-1'>
                        {activity.title}
                      </div>
                      <div>
                        <Image src={plus} alt='plus' width={24} height={24} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ProgramFlow;