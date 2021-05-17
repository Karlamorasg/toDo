import { Layout as MainLayout } from "./Layout";

export const Layout = ({ children, ...props }) => {
	return <MainLayout {...props}>{children}</MainLayout>;
};
