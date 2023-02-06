import React, { FC } from "react";
import { Navbar, NavBarItem, NavBarMenu } from "./StyledComic";
import navBack from "./assets/nav/navBack.png";
import navFirst from "./assets/nav/navFirst.png";
import navForward from "./assets/nav/navForward.png";
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
				<ComicNavBarItem control="Back" img={navBack} />
				<DynamicComicNavBarItem
					control="Random"
					img={navRandom}
					imgRed={navRandomRed}
				/>
				<ComicNavBarItem control="Forward" img={navForward} />
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
				<SiteNavBarItem control="Comic" img={navOther} />
				<SiteNavBarItem control="Blog" img={navOther} />
				<SiteNavBarItem control="About" img={navOther} />
			</NavBarMenu>
		</Navbar>
	);
};
