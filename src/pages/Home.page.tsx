import NavBar from '../components/NavBar/NavBar';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { useDisclosure } from '@mantine/hooks';
import { AppShell} from '@mantine/core';


export function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        header={{ height: { base:"120", md: "120", lg: "120" } }}
        navbar={{
          width: { base: 200, md: 300, lg: 400 },
          breakpoint: 'sm',
          collapsed: { desktop: true, mobile: !opened },
        }}
        withBorder={false}
      >
        <NavBar opened={opened} toggle={toggle} />

        <AppShell.Main>
          <ColorSchemeToggle />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
