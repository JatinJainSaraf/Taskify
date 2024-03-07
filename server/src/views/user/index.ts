import createUser from './createuser';
import getUser from './finduser';
import loginUser from './loginuser';

const userViews = Object.freeze({
    createUserViews: createUser,
    loginUserViews: loginUser,
    getUserViews: getUser,

})

export default userViews;
