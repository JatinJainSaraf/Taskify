// src/app/components/layouts/MainLayout.tsx
import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div>
            <header><Navbar /></header>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
