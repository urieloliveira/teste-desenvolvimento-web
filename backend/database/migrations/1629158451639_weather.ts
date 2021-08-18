import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Weather extends BaseSchema {
  protected tableName = 'weather'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
