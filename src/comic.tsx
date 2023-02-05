import React, { FC } from "react";
import { ComicContainer, ComicImage } from "./StyledComic";
import { ComicNavbar, SiteNavbar } from "./navbar";

interface ComicProps {
	image: string;
	alt: string;
	caption: string;
}

export const Comic: FC<ComicProps> = ({ image, alt, caption }) => {
	return (
		<ComicContainer>
			<SiteNavbar />
			<ComicImage src={image} alt={alt} />
			<ComicNavbar />
		</ComicContainer>
	);
};
