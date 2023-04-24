class Login {
    login(username, password) {

        if (username == 'admin' && password == 'admin') {
            return 'ok'
        }
        else return 'wrong'
    }
}

module.exports = {
    Login
}
