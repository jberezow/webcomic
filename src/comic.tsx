import React, { FC } from "react";
import { StyledComic } from "./StyledComic";

interface Props {
	image: string;
	alt: string;
	caption: string;
}

export const Comic: FC<Props> = ({ image, alt, caption }) => {
	return (
		<StyledComic>
			<img src={image} alt={alt} />
			<p>{caption}</p>
		</StyledComic>
	);
};
