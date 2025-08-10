import { IUser } from "@app/core/models/user";

export interface UserResponseDTO extends IUser {}

export interface ILoginCredentials {
  username: string;
  password: string;
}
