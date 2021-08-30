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
      builder.where('name', 'LIKE', `%${name}%`)
    })
  }

  types(types: number) {
    this.$query.whereExists((query) =>
      query.preload('types', (builder) => {
        builder.where('type_id', types).
      })
    )
  }

  atk(atk: number) {
    this.$query.where((builder) => {
      builder.where('atk', '>', atk)
    })
  }

  def(def: number) {
    this.$query.where((builder) => {
      builder.where('def', '>', def)
    })
  }

  sta(sta: number) {
    this.$query.where((builder) => {
      builder.where('sta', '>', sta)
    })
  }

  statTotal(statTotal: number) {
    this.$query.where((builder) => {
      builder.where('stat_total', '>', statTotal)
    })
  }

  legendary(legendary: boolean) {
    this.$query.where((builder) => {
      builder.where('legendary', legendary)
    })
  }
}
