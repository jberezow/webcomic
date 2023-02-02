import React, { FC } from "react";
import { ComicContainer, ComicImage } from "./StyledComic";
import { Navbar } from "./navbar";

interface ComicProps {
	image: string;
	alt: string;
	caption: string;
}

export const Comic: FC<ComicProps> = ({ image, alt, caption }) => {
	return (
		<ComicContainer>
			<ComicImage src={image} alt={alt} />
			<Navbar />
		</ComicContainer>
	);
};
