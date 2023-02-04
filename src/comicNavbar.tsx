import React, { FC } from "react";
import { Navbar, NavBarItem, NavBarMenu } from "./StyledComic";

interface NavBarItemProps {
	control: string;
}

const ComicNavBarItem: FC<NavBarItemProps> = ({ control }) => {
	return <NavBarItem>{control}</NavBarItem>;
};

export const ComicNavbar: FC = () => {
	return (
		<Navbar>
			<NavBarMenu>
				<ComicNavBarItem control="First" />
				<ComicNavBarItem control="Back" />
				<ComicNavBarItem control="RANDOM" />
				<ComicNavBarItem control="Forward" />
				<ComicNavBarItem control="Game Winner" />
			</NavBarMenu>
		</Navbar>
	);
};

const SiteNavBarItem: FC<NavBarItemProps> = ({ control }) => {
	return <NavBarItem>{control}</NavBarItem>;
};

export const SiteNavbar: FC = () => {
	return (
		<Navbar>
			<NavBarMenu>
				<SiteNavBarItem control="First" />
				<SiteNavBarItem control="Back" />
				<SiteNavBarItem control="RANDOM" />
				<SiteNavBarItem control="Forward" />
				<SiteNavBarItem control="Game Winner" />
			</NavBarMenu>
		</Navbar>
	);
};
