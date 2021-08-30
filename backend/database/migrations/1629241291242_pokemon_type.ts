import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TypePokemon extends BaseSchema {
  protected tableName = 'pokemon_type'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pokemon_id').unsigned().references('pokemons.id')
      table.integer('type_id').unsigned().references('types.id')
      table.unique(['pokemon_id', 'type_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
