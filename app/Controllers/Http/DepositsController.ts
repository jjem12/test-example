import type { HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class DepositsController {
  public async index({}: HttpContextContract) {}

  // public async create({ view }: HttpContextContract) {
  //   return view.render('deposit/create')
  // }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
