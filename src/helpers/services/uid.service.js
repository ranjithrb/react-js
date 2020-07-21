import { v4 as uuidv4 } from 'uuid';

function getRandomUid() {
  return uuidv4();
}

export default getRandomUid;
