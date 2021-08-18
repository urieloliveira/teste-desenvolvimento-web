import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pokemon extends BaseSchema {
  protected tableName = 'pokemon'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('imgName')
      table.string('name')
      table.integer('generation')
      table.integer('evolutionStage')
      table.boolean('evolved')
      table.integer('familyId')
      table.boolean('crossGen')
      table.integer('statTotal')
      table.integer('atk')
      table.integer('def')
      table.integer('sta')
      table.boolean('legendary')
      table.integer('aquireable')
      table.boolean('spawns')
      table.boolean('regional')
      table.integer('raidable')
      table.integer('hatchable')
      table.boolean('shiny')
      table.boolean('nest')
      table.boolean('new')
      table.boolean('notGettable')
      table.boolean('futureEvolve')
      table.integer('cp40')
      table.integer('cp39')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
