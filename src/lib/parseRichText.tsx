import React from 'react';

export function parseRichText(input: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const anchorRegex = /<a\s+href="([^"]*)">(.*?)<\/a>/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  // Find each <a href="...">...</a> occurrence
  while ((match = anchorRegex.exec(input)) !== null) {
    const [matchText, url, linkText] = match;
    const startIndex = match.index;

    // Push text before the anchor (if any)
    if (startIndex > lastIndex) {
      nodes.push(input.slice(lastIndex, startIndex));
    }
    // Push the anchor element as a React node
    nodes.push(
      <a href={url} key={startIndex}>
        {linkText}
      </a>,
    );

    lastIndex = startIndex + matchText.length;
  }

  // Push any remaining text after the last anchor
  if (lastIndex < input.length) {
    nodes.push(input.slice(lastIndex));
  }

  return nodes;
}
