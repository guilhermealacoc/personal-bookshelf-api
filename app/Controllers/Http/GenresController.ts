import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GenresController {
  public async index({ view }: HttpContextContract) {
    return view.render('welcome')
  }

  public async create({ view }: HttpContextContract) {
    return view.render('welcome')
  }

  public async show({ view }: HttpContextContract) {
    return view.render('welcome')
  }

  public async update({ view }: HttpContextContract) {
    return view.render('welcome')
  }

  public async delete({ view }: HttpContextContract) {
    return view.render('welcome')
  }
}
