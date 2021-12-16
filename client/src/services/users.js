import { api } from "./myFetch";

export function GetAll() { return api('users'); }
export function Get(user_id) { return  api('users/' + user_id); }
export function GetByHandle(handle) { return  api('users/byhandle/' + handle); } 
<<<<<<< HEAD
export function GetFriends(friends) { return  api('users/friendlist/' + friends); } 
=======
export function GetByFriends(friends) { return  api('users/friends/' + friends); }
>>>>>>> 266da40eddf3c03eaf84258a23a1caf48d582bd7
export function Add(user) {
     return api('users/register', user);
}


export function Update(user_id, user) {
    return api('users/' + user_id, user, 'PATCH');
}

export function Delete(user_id) {
    return api('users/' + user_id, {}, 'DELETE');
}

export function Login(handle, password){
    return api('users/login', { handle, password });
}