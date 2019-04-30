'use strict'

class StoreUser {
  get rules () {
    return {
      // validation rules
      username:'required',
      email:'required|unique:users,email',
      password: 'required'
    }
  }
  get message(){
    return {
    'username.required': 'el campo usuaruio es requerido',
    'email.required': 'el campo email es requerido',
    'email.unique':'el email ya existe',
    'password.required':'el password es requerido'
    }
  }
}

module.exports = StoreUser
