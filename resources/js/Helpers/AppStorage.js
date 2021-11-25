class AppStorage{

    storeToken(token){
        localStorage.setItem('session_token',token);
    }

    storeUser(user){
        localStorage.setItem('username',user);
    }

    store(user,token){
        this.storeToken(token);
        this.storeUser(user);
    }

    clear(){
        localStorage.removeItem('session_token');
        localStorage.removeItem('username');
    }

    getToken(){
        return localStorage.getItem('session_token');
    }

    getUser(){
        return localStorage.getItem('username');
    }
}

export default AppStorage = new AppStorage();