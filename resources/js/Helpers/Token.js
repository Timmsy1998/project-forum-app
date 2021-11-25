class Token{

    isValid(token){
        const payload = this.payload(token);
        if(payload){
            payload.iss == "http://localhost/api/auth/login" ? true : false
        }

        return false

    }

    payload(token){
        const payload = token.split('.')[1];
        
        console.log(this.decode(payload))

    }

    decode(payload){
        return JSON.parse(atob(payload))
    }

}

export default Token = new Token()