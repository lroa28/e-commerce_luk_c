import mongoose from "mongoose";
import UserModel from "./models/users.js";

//Conexión a la base de datos
const main = async () => {
  try {
    const URL = "mongodb://localhost:27017/ecommerce";
    let rta = await mongoose.connect(URL, { //me conecto a la bd de datos y le paso esos datos
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("Error ", error)
  }
};
  /* --------------------------------------- */
  /*                CREATE                   */
  /* --------------------------------------- */
  console.log('Create')
  //mismos datos del shema
  const user = {
      name: 'Juan',
      lastName: 'Perez',
      email: 'test@test.com',
      userName: 'jperez',
      password: 123456
  }
  const userSaved = new UserModel(user); //instancio el usermodel, le paso el parametro user
  let response  = await userSaved.save() //guardo la instancia
  console.log(response)

  console.log("CREATE OTHER USER");
  await UserModel.create({
    name: "Juana",
    lastName: "Perez",
    email: "test@test.com",
    userName: "jperez",
    password: 123456,
  });

/* --------------------------------------- */
/*                READ ALL                 */
/* --------------------------------------- */
/*console.log("READ ALL");
const userList = await UserModel.find ({name: "Juana"})
console.log(userList)
};*/

main()

