import styled from "styled-components";

export const ComicContainer = styled.div`
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	max-height: 80%;
	max-width: 80%;
	flex-direction: column;
	// border: 10px solid blue;
`;

export const ComicImage = styled.img`
	max-width: 100%;
	max-height: 100%;
	// border: 10px solid black;
`;

export const Navbar = styled.div`
	background: #000;
	border-radius: 200px;
	padding: 5px;
	width: 100%;
	max-height: 5%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	// border: 10px solid black;
`;

export const NavBarMenu = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	height: 50px;
	// border: 10px solid black;
`;

export const NavBarItem = styled.nav`
	display: flex;
	color: #ffffff;
	align-items: center;
	text-decoration: none;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #000000;
	}
`;
