import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Type from 'App/Models/Type'

export default class TypeController {
  public async index() {
    const type = await Type.all()
    return type
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['id', 'name'])
    const type = await Type.create(data)

    return type
  }

  public async show({ params }: HttpContextContract) {
    const type = await Type.findOrFail(params.id)

    return type
  }

  public async update({ params, request }: HttpContextContract) {
    const type = await Type.findOrFail(params.id)
    const data = request.only(['id', 'name'])

    type.merge(data)
    await type.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const type = await Type.findOrFail(params.id)

    await type.delete()
  }
}
