import React, { FC } from "react";
import { Navbar, NavBarItem, NavBarMenu } from "./StyledComic";

import navComics from "./assets/nav/navComics.png";
import navComicsRed from "./assets/nav/navComicsRed.png";
import navAbout from "./assets/nav/navAbout.png";
import navAboutRed from "./assets/nav/navAboutRed.png";

import navFirst from "./assets/nav/navFirst.png";
import navBack from "./assets/nav/navBack.png";
import navBackRed from "./assets/nav/navBackRed.png";
import navForward from "./assets/nav/navForward.png";
import navForwardRed from "./assets/nav/navForwardRed.png";
import navLast from "./assets/nav/navLast.png";
import navOther from "./assets/nav/navOther.png";
import navRandom from "./assets/nav/navRandom.png";
import navRandomRed from "./assets/nav/navRandomRed.png";

interface NavBarItemProps {
	control: string;
	img: string;
}

const ComicNavBarItem: FC<NavBarItemProps> = ({ control, img }) => {
	return <NavBarItem src={img} alt={control} />;
};

interface DynamicNavBarItemProps {
	control: string;
	img: string;
	imgRed: string;
}

const DynamicComicNavBarItem: FC<DynamicNavBarItemProps> = ({
	control,
	img,
	imgRed,
}) => {
	return (
		<NavBarItem
			src={img}
			alt={control}
			onMouseOver={(e) => (e.currentTarget.src = imgRed)}
			onMouseOut={(e) => (e.currentTarget.src = img)}
		/>
	);
};

export const ComicNavbar: FC = () => {
	return (
		<Navbar>
			<NavBarMenu>
				<ComicNavBarItem control="First" img={navFirst} />
				<DynamicComicNavBarItem
					control="Back"
					img={navBack}
					imgRed={navBackRed}
				/>
				<DynamicComicNavBarItem
					control="Random"
					img={navRandom}
					imgRed={navRandomRed}
				/>
				<DynamicComicNavBarItem
					control="Forward"
					img={navForward}
					imgRed={navForwardRed}
				/>
				<ComicNavBarItem control="Game Winner" img={navLast} />
			</NavBarMenu>
		</Navbar>
	);
};

const SiteNavBarItem: FC<NavBarItemProps> = ({ control, img }) => {
	return <NavBarItem src={img} alt={control} />;
};

export const SiteNavbar: FC = () => {
	return (
		<Navbar>
			<NavBarMenu>
				<DynamicComicNavBarItem
					control="Comics"
					img={navComics}
					imgRed={navComicsRed}
				/>
				<SiteNavBarItem control="Blog" img={navOther} />
				<DynamicComicNavBarItem
					control="About"
					img={navAbout}
					imgRed={navAboutRed}
				/>
			</NavBarMenu>
		</Navbar>
	);
};
