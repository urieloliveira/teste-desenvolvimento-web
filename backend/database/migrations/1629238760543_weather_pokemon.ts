import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class WeatherPokemon extends BaseSchema {
  protected tableName = 'weather_pokemon'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pokemon_id').unsigned().references('pokemons.id')
      table.integer('weather_id').unsigned().references('weathers.id')
      table.unique(['pokemon_id', 'weather_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
