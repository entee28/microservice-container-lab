import { getModelForClass, prop } from '@typegoose/typegoose'

export class HelloClass {
  @prop({ required: true, unique: true })
  public lang!: string

  @prop({ required: true })
  public message!: string
}

export const HelloModel = getModelForClass(HelloClass)
