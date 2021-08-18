import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Weather from 'App/Models/Weather'

export default class WeatherController {
  public async index() {
    const weather = await Weather.all()
    return weather
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['id', 'name'])
    const weather = await Weather.create(data)

    return weather
  }

  public async show({ params }: HttpContextContract) {
    const weather = await Weather.findOrFail(params.id)

    return weather
  }

  public async update({ params, request }: HttpContextContract) {
    const weather = await Weather.findOrFail(params.id)
    const data = request.only(['id', 'name'])

    weather.merge(data)
    await weather.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const weather = await Weather.findOrFail(params.id)

    await weather.delete()
  }
}
