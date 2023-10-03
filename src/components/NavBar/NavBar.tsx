import { useState } from 'react';
import { Box, NavLink } from '@mantine/core';
const data = [
  { label: 'Dashboard', description: 'Item with description' },
  {
    label: 'Security',
  },
  { label: 'Activity' },
];

export function NavBar() {
  const [active, setActive] = useState(0);

  return (
    <>
      {data.map((item, index) => (
        <NavLink
          key={item.label}
          active={index === active}
          label={item.label}
          description={item.description}
          onClick={() => setActive(index)}
        />
      ))}
    </>
  );
}
