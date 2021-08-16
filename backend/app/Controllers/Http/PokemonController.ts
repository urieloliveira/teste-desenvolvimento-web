import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PokemonController {
  public async index({ request }: HttpContextContract) {
    const installation = request.all()

    return installation
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['title'])
    const installation = await request.create(data)

    return installation
  }

  public async show({ request }: HttpContextContract) {
    const installation = await request.findOrFail(params.id)

    return installation
  }

  public async update({ params, request }: HttpContextContract) {
    const installation = await request.findOrFail(params.id)
    const data = request.only(['title'])

    installation.merge(data)
    await installation.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const installation = await request.findOrFail(params.id)

    await installation.delete()
  }
}
