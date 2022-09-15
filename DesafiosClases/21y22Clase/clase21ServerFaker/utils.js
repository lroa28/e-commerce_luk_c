//fx externa que cree al usuario falso

import faker from 'faker';
faker.locale = "es"; //idioma español


//generar un usuario a partir de faker
export const generateUser = () => {
 return {
    name : faker.name.findName (),
    email : faker.internet.email (),
    website: faker.internet.url (),
    profile_pic: faker.image.avatar (),
 }

}

//para exportar la función
/* export default generateUser;*/
// export en el objeto exportamos multiples funciones
