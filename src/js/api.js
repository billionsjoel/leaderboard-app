const uniqueID = 'AIzaSyClzfrOzB818x55FASHvX4JuGQciR9lv';

const postScores = async (score) => {
	const response = await fetch(
		`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${uniqueID}/scores`,
		{
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(score),
		}
	);

	const { result } = await response.json();

	return result;
};

const getScores = async () => {
	const response = await fetch(
		`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${uniqueID}/scores`
	);

	const { result } = await response.json();

	return result;
};

export { postScores, getScores };
