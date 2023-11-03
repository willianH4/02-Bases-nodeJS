import { v4 as uuidv4Plugin } from 'uuid';

export const getUuid = () => {
    return uuidv4Plugin();
}