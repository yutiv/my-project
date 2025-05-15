const userDAL = require('../dal/userDal');
const { getAllUsersFromDB } = require('../dal/userDal');
const gethello = async (req, res) => {

  console.log("hello");
  // console.log(res.json(),"req");
  
  // res.json(req.body);
// return res.json()
}

  async function getUsers() {
    // כאן אפשר להוסיף לוגיקה נוספת בעתיד (סינון, מיפוי, לוגים וכו')
    const users = await getAllUsersFromDB();
    console.log(users)
    return users[0];
  }


const createUser = async (req, res) => {
  try {
    
    const { name, email, password } = req.body;
    console.log(req.body,"req.bode");
    
    const newUser = await userDAL.createUser(name, email, password);
    console.log(newUser," new");
    
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

module.exports = { getUsers, createUser ,gethello};