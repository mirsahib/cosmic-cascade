import { injectable } from "inversify";
import { IAuthService } from "../interface/IAuthService";
import "reflect-metadata";

@injectable()
export default class AuthService implements IAuthService {
  async signUp(email: string, password: string): Promise<void> {
    console.log("🚀 ~ file: AuthService.ts:8 ~ AuthService ~ signUp ");
  }
  async signIn(email: string, password: string): Promise<void> {
    console.log(
      "🚀 ~ file: AuthService.ts:11 ~ AuthService ~ signIn ~ signIn:"
    );
  }
  async signOut(): Promise<void> {
    console.log(
      "🚀 ~ file: AuthService.ts:15 ~ AuthService ~ signOut ~ signOut:"
    );
  }
  async getCurrentUser(): Promise<{} | null> {
    console.log(
      "🚀 ~ file: AuthService.ts:19 ~ AuthService ~ getCurrentUser ~ getCurrentUser:"
    );
    return null;
  }
}
