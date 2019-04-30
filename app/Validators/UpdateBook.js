'use strict'

class UpdateBook {
   get rules () {
    return {
      title: `required|unique:books,title.id,${bookId}`,
      isbn: `required|unique:books,isbn,${bookId}`,
      author: 'required'
      // validation rules
    }
  }

  get messages(){
    return {
      'title.required': 'El campo título es requerido',
      'title.unique': 'El titulo ya existe!',
      'isbn.required':'El campo isbn es requerido',
      'isbn.unique':'El isbn ya existe!',
      'author.required':'El author es requerido'

    }
  }
 }

module.exports = UpdateBook
