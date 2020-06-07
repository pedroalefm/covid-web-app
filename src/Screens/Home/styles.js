import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
	margin: ${px2vw(32)};
	max-width: 100%;
	justify-content: center;
`;

export const TitleContainer = styled.div`
	align-items: center;
	justify-content: flex-start;
	background-color: #121212;
	padding: ${px2vw(1)};
`;
export const Title = styled.h2`
	color: #bb86fc;
	font-size: 8px;
	margin-left: 10px;
`;

export const TopContainer = styled.div`
	display: flex;
	max-width: 100%;
	flex-wrap: wrap;
	justify-content: center;
	margin: ${px2vw(32)};
	align-items: center;
	@media (min-width: 1024px) {
		flex-wrap: nowrap;
	}
`;

export const TopCard = styled.div`
	flex-direction: column;
	background-color: #121212;
	height: 200px;
	border-radius: 8px;
	box-shadow: 0 2px 2px 0 rgba(48, 48, 48, 0.16), 0 0 0 1px rgba(48, 48, 48, 0.08);

	@media (max-width: 768px) {
		height: 150px;
	}
	@media (max-width: 425px) {
		height: 100px;
	}
/* 
	@media (min-width: 1024px) {
		width: ${px2vw(350)};
		min-height: ${px2vw(200)};
		height: 30px;
	}
	@media (min-width: 1440px) {
		width: ${px2vw(300)};
		min-height: ${px2vw(150)};
		height: 30px;
	}
	@media (min-width: 1920px) {
		width: ${px2vw(250)};
		min-height: ${px2vw(100)};
		height: 30px;
	} */
`;

export const TopCardTitle = styled.h2`
	font-size: 20px;
	color: #28ba62;
	align-self: 'center';
	padding: 10px;
	/* transition-property: transform;
	transition-duration: 0.3s;
	transition-timing-function: linear;
	&:hover {
		transform: rotate(-20deg);
	} */

	@media (max-width: 768px) {
		font-size: 14px;
	}

	@media (min-width: 1024px) {
		font-size: 20px;
	}
	@media (min-width: 1440px) {
		font-size: 20px;
	}
	@media (min-width: 1920px) {
		font-size: 20px;
	}
`;

export const DataContainer = styled.div`
	display: flex;
	max-width: 100%;
	flex-wrap: wrap;
	justify-content: center;
`;

export const DataDescriptionContainer = styled.div`
	margin: ${px2vw(10)};
	@media (max-width: 425px) {
		margin-right: ${px2vw(80)};
	}
`;

export const TextDescription = styled.p`
	margin: 0;
	font-size: 12px;
	color: #bb86fc;
	@media (max-width: 375px) {
		font-size: 10px;
	}
	@media (min-width: 425px) {
		font-size: 12px;
	}

	@media (min-width: 768px) {
		font-size: 14px;
	}
	@media (min-width: 1024px) {
		font-size: 14px;
	}
	@media (min-width: 1920px) {
		font-size: 16px;
	}
`;

export const Text = styled.p`
	margin: 0;
	font-size: 16px;
	color: #ffffff;
	@media (max-width: 375px) {
		font-size: 12px;
	}
	@media (min-width: 768px) {
		font-size: 14px;
	}
	@media (min-width: 1024px) {
		font-size: 16px;
	}
	@media (min-width: 1920px) {
		font-size: 18px;
	}
`;

export const StatesContainer = styled.div`
	display: flex;
	max-width: 100%;
	flex-wrap: wrap;
	justify-content: center;
	margin: ${px2vw(32)};
	align-items: center;
	@media (min-width: 1024px) {
		margin-left: ${px2vw(400)};
		margin-right: ${px2vw(400)};
	}
`;

export const StatesCard = styled.div`
	width: ${px2vw(100)};
	min-height: ${px2vw(80, 220)};
	min-width: ${px2vw(200)};
	flex-direction: column;
	padding: ${px2vw(0)};
	margin: ${px2vw(20)};
	background-color: #121212;
	height: 30px;
	border-radius: 20px;
	@media (min-width: 320px) {
		width: 250px;
		min-height: ${px2vw(250, 320)};
		height: 30px;
	}
	@media (min-width: 768px) {
		width: ${px2vw(250, 768)};
		min-height: ${px2vw(160, 768)};
		height: 30px;
	}

	@media (min-width: 1024px) {
		width: ${px2vw(100)};
		min-height: ${px2vw(200)};
		height: 30px;
	}
	@media (min-width: 1440px) {
		width: ${px2vw(150)};
		min-height: ${px2vw(200)};
		height: 60px;
	}
	@media (min-width: 1920px) {
		width: ${px2vw(250)};
		min-height: ${px2vw(200)};
		height: 30px;
	}
`;
