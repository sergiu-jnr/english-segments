"use client";

import { useEffect } from 'react';

export default function MobileToggle() {
  useEffect(() => {
    const toggleButton = document.getElementById('toggle-button');
    const mobileSection = document.getElementById('mobile-section');

    if (toggleButton && mobileSection) {
      const toggle = () => {
        const isVisible = window.getComputedStyle(mobileSection).display !== 'none';

        mobileSection.style.display = isVisible ? 'none' : 'block';
      };

      toggleButton.addEventListener('click', toggle);

      // Cleanup on unmount
      return () => {
        toggleButton.removeEventListener('click', toggle);
      };
    }
  }, []);

  return null;
}