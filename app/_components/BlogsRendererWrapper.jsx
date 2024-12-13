'use client';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import React from 'react';

const BlocksRendererWrapper = ({ content }) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        heading: ({ children, level }) => {
          const HeadingTag = `h${level}`;
          const headingStyles = {
            1: 'text-3xl font-extrabold',
            2: 'text-xl font-bold',
            3: 'text-l font-semibold',
            4: 'text-l font-medium',
          };
          return (
            <HeadingTag className={headingStyles[level] || 'text-xl font-medium'}>
              {children}
            </HeadingTag>
          );
        },
        paragraph: ({ children }) => (
          <p className="text-lg text-gray-700 leading-relaxed">{children}</p>
        ),
      }}
      modifiers={{
        bold: ({ children }) => <strong className="font-bold text-black">{children}</strong>,
        italic: ({ children }) => <em className="italic text-gray-600">{children}</em>,
      }}
    />
  );
};

export default BlocksRendererWrapper;
