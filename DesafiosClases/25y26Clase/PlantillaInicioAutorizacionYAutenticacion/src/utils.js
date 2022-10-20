import {fileURLToPath} from 'url'
import { dirname } from 'path'
import bcrypt from 'bcrypt';

/* Bcrypts */
export const createHash = password => bcrypt.hashSync(password,bcrypt.genSaltSync(10));//mezcla random con strings
export const isValidPassword = (user,password) => bcrypt.compareSync(password,user.password);
//se paso el pass simple y luego el que quiero comparar

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;