"use client";

import { useEffect } from 'react';

export default function TranslationToggle() {
  useEffect(() => {
    const toggleButtons = document.querySelectorAll('.show-translation');

    toggleButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const parent = button.closest('div');
        const targetParagraph = parent ? parent.querySelector('p') : null;

        if (targetParagraph) {
          const isHidden =
            targetParagraph.style.display === 'none' ||
            getComputedStyle(targetParagraph).display === 'none';

          if (isHidden) {
            targetParagraph.style.display = 'block';
            const hideText = button.getAttribute('data-text-hide');
            if (hideText) {
              (button as HTMLElement).innerText = hideText;
            }
          } else {
            targetParagraph.style.display = 'none';
            const showText = button.getAttribute('data-text-show');
            if (showText) {
              (button as HTMLElement).innerText = showText;
            }
          }
        }
      });
    });

    // Optional cleanup (if elements are dynamically removed later)
    return () => {
      toggleButtons.forEach((button) => {
        button.replaceWith(button.cloneNode(true));
      });
    };
  }, []);

  return null; // this component is for side effects only
}
