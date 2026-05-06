/**
 * Single source-of-truth for category metadata.
 * Used by StandardCard (left-border color) and Header (search dropdown).
 */
export const CATEGORIES = [
  {
    id: 'terminology',
    label: 'Terminologies & Classifications',
    color: '#0C12FF',
  },
  {
    id: 'exchange',
    label: 'Technical Exchange Standards',
    color: '#FFDA00',
  },
  {
    id: 'security',
    label: 'Security & Infrastructure',
    color: '#FF0000',
  },
  {
    id: 'legal',
    label: 'Legal & Regulatory',
    color: '#0CFF27',
  },
];

/** Quick lookup: category label → hex color */
export const CATEGORY_COLOR = Object.fromEntries(
  CATEGORIES.map((c) => [c.label, c.color])
);
