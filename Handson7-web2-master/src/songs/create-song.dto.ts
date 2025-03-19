import { isString } from "class-validator";

export class CreateSongDTO {
  @isString()
  title: string;
  @isString()
  artist: string;
}
