import styled from "styled-components";

export const StyledBannerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10%;
	width: 80%;
	margin-top: 20px;
	padding-bottom: 10px;
	position: relative;
`;

export const StyledBannerImg = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

export const AppContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: safe flex-start;
	max-width: 100vw;
	// height: 100vh;
	// width: 100vw;
`;
