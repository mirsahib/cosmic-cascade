
export abstract class IAuthService<T={}>{
    abstract signUp(email: string, password: string): Promise<void>;
    abstract signIn(email: string, password: string): Promise<void>;
    abstract signOut(): Promise<void>;
    abstract getCurrentUser(): Promise<T|null>;
}