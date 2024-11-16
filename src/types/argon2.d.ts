declare module '@node-rs/argon2' {
    export function hash(
      password: string | Buffer,
      options?: {
        parallelism?: number;
        memoryCost?: number;
        timeCost?: number;
        saltLength?: number;
        hashLength?: number;
        version?: number;
      }
    ): Promise<string>;
  
    export function verify(
      hash: string,
      password: string | Buffer
    ): Promise<boolean>;
  }
  