import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import Weather from './Weather'
import Type from './Type'
import PokemonFilter from './Filters/PokemonFilter'

export default class Pokemon extends compose(BaseModel, Filterable) {
  public static $filter = () => PokemonFilter

  @column({ isPrimary: true })
  public id: number
  @column()
  public imgName: number
  @column()
  public name: string
  @column()
  public generation: number
  @column()
  public evolutionStage: number
  @column()
  public evolved: boolean
  @column()
  public familyId: number
  @column()
  public crossGen: boolean
  @column()
  public statTotal: number
  @column()
  public atk: number
  @column()
  public def: number
  @column()
  public sta: number
  @column()
  public legendary: boolean
  @column()
  public aquireable: number
  @column()
  public spawns: boolean
  @column()
  public regional: boolean
  @column()
  public raidable: number
  @column()
  public hatchable: number
  @column()
  public shiny: boolean
  @column()
  public nest: boolean
  @column()
  public new: boolean
  @column()
  public notGettable: boolean
  @column()
  public futureEvolve: boolean
  @column()
  public cp40: number
  @column()
  public cp39: number

  @manyToMany(() => Type, {
    pivotColumns: ['priority'],
    pivotTimestamps: true,
  })
  public types: ManyToMany<typeof Type>

  @manyToMany(() => Weather, {
    pivotColumns: ['priority'],
    pivotTimestamps: true,
  })
  public weathers: ManyToMany<typeof Weather>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
