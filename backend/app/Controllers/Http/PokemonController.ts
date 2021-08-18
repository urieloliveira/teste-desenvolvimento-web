import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pokemon from 'App/Models/Pokemon'
import Weather from 'App/Models/Weather'

export default class PokemonController {
  public async index({ request }: HttpContextContract) {
    const { page, limit, filters = {} } = request.qs()

    const pokemon = await Pokemon.query()
      .with('types', (query) => {
        query.from('types').select('*')
      })
      .with('weathers', (query) => {
        query.from('weathers').select('*')
      })
      .filter(filters)
      .paginate(page || 1, limit || 20)

    return pokemon
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only([
      'id',
      'imgName',
      'name',
      'generation',
      'evolutionStage',
      'evolved',
      'familyId',
      'crossGen',
      'statTotal',
      'atk',
      'def',
      'sta',
      'legendary',
      'aquireable',
      'spawns',
      'regional',
      'raidable',
      'hatchable',
      'shiny',
      'nest',
      'new',
      'notGettable',
      'futureEvolve',
      'cp40',
      'cp39',
    ])
    const types: { id: number; priority: string }[] = request.input('types')
    const weathers: Weather[] = request.input('weathers')
    const pokemon = await Pokemon.create(data)

    await pokemon.related('types').attach(types.map((type) => type.id))
    await pokemon.related('weathers').attach(weathers.map((weather) => weather.id))

    return pokemon
  }

  public async show({ params }: HttpContextContract) {
    const pokemon = await Pokemon.findOrFail(params.id)

    return pokemon
  }

  public async update({ params, request }: HttpContextContract) {
    const pokemon = await Pokemon.findOrFail(params.id)
    const data = request.only([
      'id',
      'imgName',
      'name',
      'generation',
      'evolutionStage',
      'evolved',
      'familyId',
      'crossGen',
      'statTotal',
      'atk',
      'def',
      'sta',
      'legendary',
      'aquireable',
      'spawns',
      'regional',
      'raidable',
      'hatchable',
      'shiny',
      'nest',
      'new',
      'notGettable',
      'futureEvolve',
      'cp40',
      'cp39',
    ])

    pokemon.merge(data)
    await pokemon.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const pokemon = await Pokemon.findOrFail(params.id)

    await pokemon.delete()
  }
}
