const { v4: uuidv4Plugin } = require('uuid');

const getUuid = () => {
    return uuidv4Plugin();
}

module.exports = {
    getUuid,
}