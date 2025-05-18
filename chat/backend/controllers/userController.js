const { getAllUsersFromDB, createUserInDB } = require('../dal/userDal');

async function getUsers(req, res) {
  const users = await getAllUsersFromDB();
  res.send(users);
}

const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const newUser = await createUserInDB(userName, email, password);
    res.status(201).json(newUser);
  }
  catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

module.exports = { getUsers, createUser };