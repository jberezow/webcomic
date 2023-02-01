import React, { FC } from "react";
import { ComicContainer, ComicImage } from "./StyledComic";

interface Props {
	image: string;
	alt: string;
	caption: string;
}

export const Comic: FC<Props> = ({ image, alt, caption }) => {
	return (
		<ComicContainer>
			<ComicImage src={image} alt="Weber smash" />
		</ComicContainer>
	);
};
