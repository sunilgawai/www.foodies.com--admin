import { FC } from "react";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container h-screen bg-gray-800 px-40 py-4">
            {children}
        </div>
    )
}

export default Layout;