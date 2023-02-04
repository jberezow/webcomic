import React, { FC } from "react";
import { Navbar, NavBarItem, NavBarMenu } from "./StyledComic";
// import { navAbout } from "./assets/nav/navAbout.png";
import navBack from "./assets/nav/navBack.png";
import navFirst from "./assets/nav/navFirst.png";
import navForward from "./assets/nav/navForward.png";
import navLast from "./assets/nav/navLast.png";
import navOther from "./assets/nav/navOther.png";

interface NavBarItemProps {
	control: string;
	img: string;
}

const ComicNavBarItem: FC<NavBarItemProps> = ({ control, img }) => {
	return <NavBarItem src={img} alt={control}></NavBarItem>;
};

export const ComicNavbar: FC = () => {
	return (
		<Navbar>
			<NavBarMenu>
				<ComicNavBarItem control="First" img={navFirst} />
				<ComicNavBarItem control="Back" img={navBack} />
				<ComicNavBarItem control="RANDOM" img={navOther} />
				<ComicNavBarItem control="Forward" img={navForward} />
				<ComicNavBarItem control="Game Winner" img={navLast} />
			</NavBarMenu>
		</Navbar>
	);
};

// const SiteNavBarItem: FC<NavBarItemProps> = ({ control }) => {
// 	return <NavBarItem>{control}</NavBarItem>;
// };

// export const SiteNavbar: FC = () => {
// 	return (
// 		<Navbar>
// 			<NavBarMenu>
// 				<SiteNavBarItem control="Comic" />
// 				<SiteNavBarItem control="Blog" />
// 				<SiteNavBarItem control="About" />
// 			</NavBarMenu>
// 		</Navbar>
// 	);
// };
