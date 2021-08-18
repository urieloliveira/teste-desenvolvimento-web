import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Type extends BaseSchema {
  protected tableName = 'type'

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
