import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 255).notNullable()
      table.decimal('price').unsigned()
      table.integer('quantity').unsigned()
      table.dateTime('publication_date').unsigned()
      table.integer('isbn_id').unsigned().references('isbn.id')
      table.integer('genre_id').unsigned().references('genres.id')
      table.integer('author_id').unsigned().references('authors.id')
      table.integer('publisher_id').unsigned().references('publishers.id')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
