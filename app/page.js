'use client'
import React, { useState, useEffect } from 'react';

import Hero from "./components/Home/Hero";
import Intro from "./components/Home/Intro";
import Experience from "./components/Home/Experience";
import Certificates from "./components/Home/Certificates";
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="p-5 overflow-x-hidden">
      <Hero />
      <Intro />
      <Experience />
      <Certificates />
      <Footer />
    </div>
  );
}
