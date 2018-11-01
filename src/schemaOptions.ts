import { SchemaOptions } from "mongoose";

export const schemaOptions = (opts: SchemaOptions) => {
  return (constructor) => {
    Reflect.defineMetadata('typegoose:schema', opts, constructor);
  };
};
