export interface Deserializable {
  deserialize(input: any, get: boolean): this;
}
