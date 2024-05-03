'use client'
import React, { useState, useEffect } from 'react';

import Hero from "./components/Home/Hero";
import Intro from "./components/Home/Intro";
import Experience from "./components/Home/Experience";
import Certifications from "./components/Home/Certifications";

export default function Home() {
  return (
    <div className="p-5">
      <Hero />
      <Intro />
      <Experience />
      <Certifications />
    </div>
  );
}
