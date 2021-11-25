import Token from './Token'
import AppStorage from './AppStorage'

class User {
    login(data){
        axios.post('/api/auth/login',data)
        .then(res => this.responseAfterLogin(res))
        .catch(error => console.log(error.response.data))
    }

    responseAfterLogin(res){
        const session_token = res.data.session_token
        const username = res.data.username
        if(Token.isValid(session_token)){
            AppStorage.store(username,session_token)
        }
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
            session_token.isValid(storedToken) ? true : false
        }

        return false;
    }

    loggedIn(){
        return this.hasToken();
    }

    logout(){
        AppStorage.clear();
    }

    name(){
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }

    id(){
        if(this.loggedIn()){
            const payload = session_token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }
}

export default User = new User();