import { useState } from 'react';
import {
  AppShell,
  Autocomplete,
  Avatar,
  Burger,
  Button,
  Group,
  Image,
  NavLink,
  useMantineColorScheme,
} from '@mantine/core';

import classes from './NavBar.module.css';

const data = [
  { label: 'Dashboard', description: 'Item with description' },
  {
    label: 'Security',
  },
  { label: 'Activity' },
  { label: 'Activity' },
];
interface NavBarProps {
  opened: boolean;
  toggle: () => void;
}
const NavBar: React.FC<NavBarProps> = ({ opened, toggle }) => {
  const { colorScheme } = useMantineColorScheme();
  const [active, setActive] = useState(0);
  return (
    <>
      <AppShell.Header>
        <Group p="xl">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group style={{ flex: 1 }} h="50">
            <Group gap={10} style={{ flex: 2 }} wrap="nowrap">
              <Image
                src={
                  colorScheme === 'light'
                    ? 'https://cambuzz.netlify.app/dark.png'
                    : 'https://cambuzz.netlify.app/lightLogo.png'
                }
                alt="Icon"
                radius="0"
                h="60"
                w="70"
              />
              <Autocomplete
                label="Search"
                radius="xl"
                placeholder="Search anything"
                size="sm"
                //data={data}
                maxDropdownHeight={200}
              />
            </Group>
            <Group
              className={classes.navbanner}
              style={{ flex: 4 }}
              gap={5}
              grow
              mx={{ base: '2rem', md: '0rem', lg: '3rem' }}
              visibleFrom="sm"
            >
              {data.map((item, index) => (
                <Button
                  className={
                    active == index
                      ? colorScheme == 'dark'
                        ? classes.seldark
                        : classes.sellight
                      : classes.navbarbtn
                  }
                  radius="xl"
                  key={item.label}
                  fz={{ base: 'xs', md: 'xs', lg: 'sm' }}
                  fw={500}
                  h={60}
                  onClick={() => setActive(index)}
                >
                  {item.label}
                </Button>
              ))}
            </Group>
            <Group
              className={classes.navbanner}
              justify="space-between"
              style={{md:{ flex: 1 }}}
            >
              <Avatar
                alt="Profile"
                src="https://cambuzz.netlify.app/profile/1680863627938994433.jpg"
                size="lg"
                radius="xl"
              />
              <Avatar alt="Profile" size="lg" radius="xl" visibleFrom="md" />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4} h="100%">
        {data.map((item, index) => (
          <NavLink
            key={item.label}
            active={index === active}
            label={item.label}
            description={item.description}
            onClick={() => setActive(index)}
          />
        ))}
      </AppShell.Navbar>
    </>
  );
};
export default NavBar;
