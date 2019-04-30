'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('title',200).nullable()
      table.string('isbn').nullable()
      table.string('author',100).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema
