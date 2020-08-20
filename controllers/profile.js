const handleProfileGet = (req, res, db) => {
	const { id } = req.params;
	db.select('*').from('users').where({
		id: id
	})
	.then(user => {
		if (user.lenght) {
			res.json(user[0])
		} else {
			res.status(400).json('NOT FOUND');
		}
	})
	.catch(err => res.status(400).json('NOT FOUND'))
}

module.exports = {
	handleProfileGet: handleProfileGet
}