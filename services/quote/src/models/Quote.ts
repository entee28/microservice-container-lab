import { getModelForClass, prop } from '@typegoose/typegoose'

export class QuoteClass {
  @prop({ required: true })
  public quote!: string
}

export const QuoteModel = getModelForClass(QuoteClass)
