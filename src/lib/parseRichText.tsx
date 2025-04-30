import React from 'react';

/**
 * Parses a string with <a href="..." class="...">text</a> and returns an array of React nodes.
 * Supports href and class attributes in any order.
 */
export function parseRichText(paragraph: string): React.ReactNode[] {
  // Match <a ...>text</a> with href and optional class in any order
  const regex = /<a\s+([^>]+)>(.*?)<\/a>/gi;
  const result: React.ReactNode[] = [];

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(paragraph)) !== null) {
    const fullMatch = match[0];
    const attrString = match[1];
    const linkText = match[2];
    const index = match.index;

    // Extract href and class from the attribute string
    const hrefMatch = /href=["']([^"']+)["']/.exec(attrString);
    const classMatch = /class=["']([^"']+)["']/.exec(attrString);

    const href = hrefMatch?.[1] || '#';
    const className = classMatch?.[1] || 'underline text-link hover:text-linkHover';

    // Add plain text before the <a> tag
    if (index > lastIndex) {
      result.push(paragraph.slice(lastIndex, index));
    }

    result.push(
      <a key={`${href}-${index}`} href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {linkText}
      </a>,
    );

    lastIndex = index + fullMatch.length;
  }

  // Add any remaining text
  if (lastIndex < paragraph.length) {
    result.push(paragraph.slice(lastIndex));
  }

  return result.length > 0 ? result : [paragraph];
}
