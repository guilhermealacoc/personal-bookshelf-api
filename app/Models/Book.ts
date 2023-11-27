import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public price: number

  @column()
  public quantity: number

  @column()
  public publication_date: DateTime

  @column()
  public isbn_id: number

  @column()
  public genre_id: number

  @column()
  public author_id: number

  @column()
  public publisher_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
