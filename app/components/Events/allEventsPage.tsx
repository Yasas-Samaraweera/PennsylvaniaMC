// app/events/page.tsx
"use client";

import React from 'react';
import EventsPage from './EventsPage';
export default function AllEventsPage() {
  return <EventsPage showAllEvents={true} />;
}