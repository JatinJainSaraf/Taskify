// src/app/components/layouts/AuthLayout.tsx
import React, { ReactNode } from 'react';

type AuthLayoutProps = {
    children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
};

export default AuthLayout;
