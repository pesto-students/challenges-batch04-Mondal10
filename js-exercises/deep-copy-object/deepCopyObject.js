const v8 = require('v8');

const deepCopyObject = objToCopy => v8.deserialize(v8.serialize(objToCopy));

export { deepCopyObject };
