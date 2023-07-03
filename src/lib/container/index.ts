import { Container } from "inversify";
import { IAuthService } from "./interface/IAuthService";
import AuthService from "./service/AuthService";
import "reflect-metadata";

const container = new Container()

container.bind<IAuthService>('IAuthService').to(AuthService).inSingletonScope()
export default container