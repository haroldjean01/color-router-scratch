import React from 'react';

export default function useParams() {
  const { r, g, b } = useParams();
  const color = `rbg($(r), $(g), $(b))`;
  return (
    <div style={{ backgroundColor: color }}>
      <h2>{(r, g, b)}</h2>
    </div>
  );
}
