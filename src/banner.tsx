import React, { FC } from "react";
import { StyledBannerContainer, StyledBannerImg } from "./StyledDivs";

interface BannerProps {
	image: string;
	alt: string;
}

export const Banner: FC<BannerProps> = ({ image, alt }) => {
	return (
		<StyledBannerContainer>
			<StyledBannerImg src={image} alt={alt} />
		</StyledBannerContainer>
	);
};
