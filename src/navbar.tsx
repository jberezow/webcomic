import React, { FC } from "react";
import { Navbar, NavBarItem, NavBarMenu } from "./StyledComic";

// Site navigation
import navComics from "./assets/nav/navComics.png";
import navComicsRed from "./assets/nav/navComicsRed.png";
import navArchive from "./assets/nav/navArchive.png";
import navArchiveRed from "./assets/nav/navArchiveRed.png";
import navAbout from "./assets/nav/navAbout.png";
import navAboutRed from "./assets/nav/navAboutRed.png";

// Comic navigation
import navFirst from "./assets/nav/navFirst.png";
import navFirstRed from "./assets/nav/navFirstRed.png";
import navBack from "./assets/nav/navBack.png";
import navBackRed from "./assets/nav/navBackRed.png";
import navForward from "./assets/nav/navForward.png";
import navForwardRed from "./assets/nav/navForwardRed.png";
import navLast from "./assets/nav/navLast.png";
import navLastRed from "./assets/nav/navLastRed.png";
import navRandom from "./assets/nav/navRandom.png";
import navRandomRed from "./assets/nav/navRandomRed.png";

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
				<DynamicComicNavBarItem
					control="First"
					img={navFirst}
					imgRed={navFirstRed}
				/>
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
				<DynamicComicNavBarItem
					control="Latest"
					img={navLast}
					imgRed={navLastRed}
				/>
			</NavBarMenu>
		</Navbar>
	);
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
				<DynamicComicNavBarItem
					control="Archive"
					img={navArchive}
					imgRed={navArchiveRed}
				/>
				<DynamicComicNavBarItem
					control="About"
					img={navAbout}
					imgRed={navAboutRed}
				/>
			</NavBarMenu>
		</Navbar>
	);
};
