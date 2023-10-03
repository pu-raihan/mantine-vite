import { NavBar } from '../components/NavBar/NavBar';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Loader } from '@mantine/core';
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <Burger size="sm" opened={opened} onClick={toggle} aria-label="Toggle navigation" />
      {opened&&<NavBar />}
      <ColorSchemeToggle />
    </>
  );
}
