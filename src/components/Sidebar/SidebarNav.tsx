import { Stack } from '@chakra-ui/react';
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NevSection';

export function SidebarNav(){
    return(
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
                <NavLink href="/users" icon={RiContactsLine}>Usuário</NavLink> 
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <NavLink href="/" icon={RiInputMethodLine}>Formulários</NavLink>
                <NavLink href="/" icon={RiGitMergeLine}>Automação</NavLink>
            </NavSection>                
        </Stack>
    );
}