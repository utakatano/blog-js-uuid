import { NIL as NIL_UUID, v4 as uuidv4 } from 'uuid'
import { generateUuid } from './utils/uuid-v4'
import { getUniqueStr } from './utils/getUniqueStr'
import './style.css'

// generate UUID with uuid
console.log(NIL_UUID)
console.log(uuidv4())
console.log(uuidv4())

// generate UUID with scratch based on Chrome Platform Analytics
console.log(generateUuid())
console.log(generateUuid())

// generate UUID with scratch
console.log(getUniqueStr())
console.log(getUniqueStr())
console.log(getUniqueStr())
