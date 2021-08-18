import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Pokemon from 'App/Models/Pokemon'

export default class PokemonFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Pokemon, Pokemon>

  public static blacklist: string[] = ['secretMethod']

  pokedexNumber(id: number) {
    this.$query.where('id', id)
  }

  name(name: string) {
    this.$query.where((builder) => {
      builder.where('first_name', 'LIKE', `%${name}%`).orWhere('last_name', 'LIKE', `%${name}%`)
    })
  }
}
