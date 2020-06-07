import React, { useState, useEffect } from 'react';
import {
	TopContainer,
	TopCard,
	TitleContainer,
	Title,
	TextDescription,
	TopCardTitle,
	DataContainer,
	Text,
	DataDescriptionContainer,
	StatesContainer,
	StatesCard,
} from './styles';
import axios from 'axios';
import { Container, Grid, AppBar, Typography } from '@material-ui/core';
import { BugReport } from '@material-ui/icons';
import MaterialTable from 'material-table';

const Home = () => {
	const [brasil, setBrasil] = useState({});
	const [statesBr, setStates] = useState([]);

	useEffect(() => {
		fetchBrasilData();
	}, []);

	const fetchBrasilData = async () => {
		const urlData = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
		const dataBrasil = await axios.get(urlData).then((res) => {
			return res.data.data;
		});
		const urlDataState = 'https://covid19-brazil-api.now.sh/api/report/v1';
		const dataStates = await axios.get(urlDataState).then((res) => {
			return res.data.data;
		});

		setStates(dataStates);
		setBrasil(dataBrasil);
	};

	return (
		<Container maxWidth="xl">
			<AppBar style={style.appBar} position="static">
				<BugReport style={style.titleIcon} />
				<Typography style={style.appTitle}>CovidAppBr</Typography>
			</AppBar>
			<Grid style={style.topContainer} justify="center" container spacing={6}>
				<Grid item xs={8} sm={6} md={6} xl={3} lg={3}>
					<TopCard>
						<TopCardTitle>Brasil</TopCardTitle>
						<Grid style={{ justifyContent: 'center' }} container spacing={3}>
							<Grid item>
								<TextDescription>Casos</TextDescription>
								<Text>{brasil.cases}</Text>
							</Grid>
							<Grid item>
								<TextDescription>Mortes</TextDescription>
								<Text>{brasil.deaths}</Text>
							</Grid>
							<Grid item>
								<TextDescription>Confimados</TextDescription>
								<Text>{brasil.confirmed}</Text>
							</Grid>
						</Grid>
					</TopCard>
				</Grid>
				<Grid item xs={8} sm={6} md={6} xl={3} lg={3}>
					<TopCard>
						<TopCardTitle>{statesBr.length > 0 ? statesBr[0].state : null}</TopCardTitle>

						<Grid style={{ justifyContent: 'center' }} container spacing={3}>
							<Grid item>
								<TextDescription>Casos</TextDescription>
								<Text>{statesBr.length > 0 ? statesBr[0].cases : null}</Text>
							</Grid>
							<Grid item>
								<TextDescription>Mortes</TextDescription>
								<Text>{statesBr.length > 0 ? statesBr[0].deaths : null}</Text>
							</Grid>
							<Grid item>
								<TextDescription>Suspeitos</TextDescription>
								<Text>{statesBr.length > 0 ? statesBr[0].suspects : null}</Text>
							</Grid>
						</Grid>
					</TopCard>
				</Grid>
			</Grid>
			<MaterialTable
				title="Estados"
				style={{
					background: '#121212',
					color: '#28ba62',
					marginTop: 40,
					marginLeft: '10%',
					marginRight: '10%',
					padding: 10,
					boxShadow: '0px 2px 2px 0 rgba(48, 48, 48, 0.16), 0 0 0 1px rgba(48, 48, 48, 0.08)',
				}}
				hideFilterIcon={true}
				columns={[
					{
						title: 'Estado',
						field: 'state',

						cellStyle: { background: '#121212', color: '#fff' },
						headerStyle: { background: '#121212', color: '#bb86fc' },
						filtering: false,
						disableClick: true,
						sorting: false,
					},
					{
						title: 'Casos',
						field: 'cases',
						type: 'numeric',

						cellStyle: { background: '#121212', color: '#fff' },
						headerStyle: { background: '#121212', color: '#bb86fc' },
						filtering: false,
						disableClick: true,
						searchable: false,
						sorting: false,
					},
					{
						title: 'Mortes',
						field: 'deaths',
						type: 'numeric',
						cellStyle: { background: '#121212', color: '#fff' },
						headerStyle: { background: '#121212', color: '#bb86fc' },
						filtering: false,
						disableClick: true,
						searchable: false,
						sorting: false,
					},
					{
						title: 'Suspeitos',
						field: 'suspects',
						type: 'numeric',
						cellStyle: { background: '#121212', color: '#fff' },
						headerStyle: { background: '#121212', color: '#bb86fc' },
						filtering: false,
						disableClick: true,
						searchable: false,
						sorting: false,
					},
				]}
				data={statesBr}
				options={{
					filtering: true,
					actionsCellStyle: { background: '#121212' },
					searchFieldStyle: { background: 'white' },
					showFirstLastPageButtons: false,
				}}
			/>
		</Container>
	);
};

const style = {
	appBar: {
		background: '#121212',
		padding: 8,
		flexDirection: 'row',
		alignItems: 'center',
	},

	appTitle: {
		fontSize: 22,
	},
	titleIcon: {
		fontSize: 18,
		marginRight: 2,
	},
	topContainer: {
		marginTop: 1,
	},
	titleCont: {
		flexDirection: 'row',
	},
};
export default Home;
