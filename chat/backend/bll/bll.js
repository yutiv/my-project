const { getAllUsersFromDB, createUserInDB, isExist } = require('../dal/userDal');

async function getUsers(req, res) {
  const users = await getAllUsersFromDB();
  res.send(users);
}

const createUser = async (req, res) => {
  try {
    const name = req.body.valInputName
    const email = req.body.valInputEmail
    const password = req.body.valInputPassword
    const exist = await isExist(email, password)
    if (exist[0].length >= 1) {
      console.log("this user alredy exist");
      res.send("this user alredy exist")
    }
    else {
      const newUser = await createUserInDB(name, email, password);
      res.status(201).json(newUser);
    }
  }
  catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

async function login(req, res) {
  const email = req.body.valInputEmail
  const password = req.body.valInputPassword
  const users = await isExist(email, password);
  console.log(users);
  res.send(users)
}
module.exports = { getUsers, createUser, login };