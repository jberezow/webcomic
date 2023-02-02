import styled from "styled-components";

export const ComicContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80%;
	width: 80%;
	flex-direction: column;
`;

export const ComicImage = styled.img`
	max-width: 100%;
	max-height: 100%;
	border: 10px solid black;
`;

export const ComicNavbar = styled.nav`
	background: #fff;
	height: 50px;
	display: flex;
	justify-content: space-between;
	padding: 0.2rem calc((100vw - 1000px) / 2);
	border: 10px solid black;
`;

export const ComicNavBarMenu = styled.div`
	display: flex;
	align-items: center;
`;

export const ComicNavBarItem = styled.nav`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #000000;
	}
`;
