
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model administradores
 * 
 */
export type administradores = $Result.DefaultSelection<Prisma.$administradoresPayload>
/**
 * Model pacientes
 * 
 */
export type pacientes = $Result.DefaultSelection<Prisma.$pacientesPayload>
/**
 * Model profissionais
 * 
 */
export type profissionais = $Result.DefaultSelection<Prisma.$profissionaisPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Administradores
 * const administradores = await prisma.administradores.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Administradores
   * const administradores = await prisma.administradores.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.administradores`: Exposes CRUD operations for the **administradores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradores
    * const administradores = await prisma.administradores.findMany()
    * ```
    */
  get administradores(): Prisma.administradoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacientes`: Exposes CRUD operations for the **pacientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.pacientes.findMany()
    * ```
    */
  get pacientes(): Prisma.pacientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissionais`: Exposes CRUD operations for the **profissionais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissionais
    * const profissionais = await prisma.profissionais.findMany()
    * ```
    */
  get profissionais(): Prisma.profissionaisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    administradores: 'administradores',
    pacientes: 'pacientes',
    profissionais: 'profissionais',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "administradores" | "pacientes" | "profissionais" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      administradores: {
        payload: Prisma.$administradoresPayload<ExtArgs>
        fields: Prisma.administradoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.administradoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.administradoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          findFirst: {
            args: Prisma.administradoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.administradoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          findMany: {
            args: Prisma.administradoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>[]
          }
          create: {
            args: Prisma.administradoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          createMany: {
            args: Prisma.administradoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.administradoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>[]
          }
          delete: {
            args: Prisma.administradoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          update: {
            args: Prisma.administradoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          deleteMany: {
            args: Prisma.administradoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.administradoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.administradoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>[]
          }
          upsert: {
            args: Prisma.administradoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          aggregate: {
            args: Prisma.AdministradoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministradores>
          }
          groupBy: {
            args: Prisma.administradoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.administradoresCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradoresCountAggregateOutputType> | number
          }
        }
      }
      pacientes: {
        payload: Prisma.$pacientesPayload<ExtArgs>
        fields: Prisma.pacientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pacientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pacientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findFirst: {
            args: Prisma.pacientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pacientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findMany: {
            args: Prisma.pacientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          create: {
            args: Prisma.pacientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          createMany: {
            args: Prisma.pacientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pacientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          delete: {
            args: Prisma.pacientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          update: {
            args: Prisma.pacientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          deleteMany: {
            args: Prisma.pacientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pacientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pacientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          upsert: {
            args: Prisma.pacientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          aggregate: {
            args: Prisma.PacientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacientes>
          }
          groupBy: {
            args: Prisma.pacientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pacientesCountArgs<ExtArgs>
            result: $Utils.Optional<PacientesCountAggregateOutputType> | number
          }
        }
      }
      profissionais: {
        payload: Prisma.$profissionaisPayload<ExtArgs>
        fields: Prisma.profissionaisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profissionaisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profissionaisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          findFirst: {
            args: Prisma.profissionaisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profissionaisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          findMany: {
            args: Prisma.profissionaisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>[]
          }
          create: {
            args: Prisma.profissionaisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          createMany: {
            args: Prisma.profissionaisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profissionaisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>[]
          }
          delete: {
            args: Prisma.profissionaisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          update: {
            args: Prisma.profissionaisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          deleteMany: {
            args: Prisma.profissionaisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profissionaisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profissionaisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>[]
          }
          upsert: {
            args: Prisma.profissionaisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profissionaisPayload>
          }
          aggregate: {
            args: Prisma.ProfissionaisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissionais>
          }
          groupBy: {
            args: Prisma.profissionaisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfissionaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.profissionaisCountArgs<ExtArgs>
            result: $Utils.Optional<ProfissionaisCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    administradores?: administradoresOmit
    pacientes?: pacientesOmit
    profissionais?: profissionaisOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model administradores
   */

  export type AggregateAdministradores = {
    _count: AdministradoresCountAggregateOutputType | null
    _avg: AdministradoresAvgAggregateOutputType | null
    _sum: AdministradoresSumAggregateOutputType | null
    _min: AdministradoresMinAggregateOutputType | null
    _max: AdministradoresMaxAggregateOutputType | null
  }

  export type AdministradoresAvgAggregateOutputType = {
    id_administrador: number | null
  }

  export type AdministradoresSumAggregateOutputType = {
    id_administrador: number | null
  }

  export type AdministradoresMinAggregateOutputType = {
    id_administrador: number | null
    hash_palavra_chave: string | null
  }

  export type AdministradoresMaxAggregateOutputType = {
    id_administrador: number | null
    hash_palavra_chave: string | null
  }

  export type AdministradoresCountAggregateOutputType = {
    id_administrador: number
    hash_palavra_chave: number
    _all: number
  }


  export type AdministradoresAvgAggregateInputType = {
    id_administrador?: true
  }

  export type AdministradoresSumAggregateInputType = {
    id_administrador?: true
  }

  export type AdministradoresMinAggregateInputType = {
    id_administrador?: true
    hash_palavra_chave?: true
  }

  export type AdministradoresMaxAggregateInputType = {
    id_administrador?: true
    hash_palavra_chave?: true
  }

  export type AdministradoresCountAggregateInputType = {
    id_administrador?: true
    hash_palavra_chave?: true
    _all?: true
  }

  export type AdministradoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administradores to aggregate.
     */
    where?: administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradores to fetch.
     */
    orderBy?: administradoresOrderByWithRelationInput | administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned administradores
    **/
    _count?: true | AdministradoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradoresMaxAggregateInputType
  }

  export type GetAdministradoresAggregateType<T extends AdministradoresAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministradores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministradores[P]>
      : GetScalarType<T[P], AggregateAdministradores[P]>
  }




  export type administradoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: administradoresWhereInput
    orderBy?: administradoresOrderByWithAggregationInput | administradoresOrderByWithAggregationInput[]
    by: AdministradoresScalarFieldEnum[] | AdministradoresScalarFieldEnum
    having?: administradoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradoresCountAggregateInputType | true
    _avg?: AdministradoresAvgAggregateInputType
    _sum?: AdministradoresSumAggregateInputType
    _min?: AdministradoresMinAggregateInputType
    _max?: AdministradoresMaxAggregateInputType
  }

  export type AdministradoresGroupByOutputType = {
    id_administrador: number
    hash_palavra_chave: string
    _count: AdministradoresCountAggregateOutputType | null
    _avg: AdministradoresAvgAggregateOutputType | null
    _sum: AdministradoresSumAggregateOutputType | null
    _min: AdministradoresMinAggregateOutputType | null
    _max: AdministradoresMaxAggregateOutputType | null
  }

  type GetAdministradoresGroupByPayload<T extends administradoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradoresGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradoresGroupByOutputType[P]>
        }
      >
    >


  export type administradoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_administrador?: boolean
    hash_palavra_chave?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administradores"]>

  export type administradoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_administrador?: boolean
    hash_palavra_chave?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administradores"]>

  export type administradoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_administrador?: boolean
    hash_palavra_chave?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administradores"]>

  export type administradoresSelectScalar = {
    id_administrador?: boolean
    hash_palavra_chave?: boolean
  }

  export type administradoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_administrador" | "hash_palavra_chave", ExtArgs["result"]["administradores"]>
  export type administradoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type administradoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type administradoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $administradoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "administradores"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_administrador: number
      hash_palavra_chave: string
    }, ExtArgs["result"]["administradores"]>
    composites: {}
  }

  type administradoresGetPayload<S extends boolean | null | undefined | administradoresDefaultArgs> = $Result.GetResult<Prisma.$administradoresPayload, S>

  type administradoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<administradoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradoresCountAggregateInputType | true
    }

  export interface administradoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['administradores'], meta: { name: 'administradores' } }
    /**
     * Find zero or one Administradores that matches the filter.
     * @param {administradoresFindUniqueArgs} args - Arguments to find a Administradores
     * @example
     * // Get one Administradores
     * const administradores = await prisma.administradores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends administradoresFindUniqueArgs>(args: SelectSubset<T, administradoresFindUniqueArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administradores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {administradoresFindUniqueOrThrowArgs} args - Arguments to find a Administradores
     * @example
     * // Get one Administradores
     * const administradores = await prisma.administradores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends administradoresFindUniqueOrThrowArgs>(args: SelectSubset<T, administradoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresFindFirstArgs} args - Arguments to find a Administradores
     * @example
     * // Get one Administradores
     * const administradores = await prisma.administradores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends administradoresFindFirstArgs>(args?: SelectSubset<T, administradoresFindFirstArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administradores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresFindFirstOrThrowArgs} args - Arguments to find a Administradores
     * @example
     * // Get one Administradores
     * const administradores = await prisma.administradores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends administradoresFindFirstOrThrowArgs>(args?: SelectSubset<T, administradoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradores
     * const administradores = await prisma.administradores.findMany()
     * 
     * // Get first 10 Administradores
     * const administradores = await prisma.administradores.findMany({ take: 10 })
     * 
     * // Only select the `id_administrador`
     * const administradoresWithId_administradorOnly = await prisma.administradores.findMany({ select: { id_administrador: true } })
     * 
     */
    findMany<T extends administradoresFindManyArgs>(args?: SelectSubset<T, administradoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administradores.
     * @param {administradoresCreateArgs} args - Arguments to create a Administradores.
     * @example
     * // Create one Administradores
     * const Administradores = await prisma.administradores.create({
     *   data: {
     *     // ... data to create a Administradores
     *   }
     * })
     * 
     */
    create<T extends administradoresCreateArgs>(args: SelectSubset<T, administradoresCreateArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradores.
     * @param {administradoresCreateManyArgs} args - Arguments to create many Administradores.
     * @example
     * // Create many Administradores
     * const administradores = await prisma.administradores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends administradoresCreateManyArgs>(args?: SelectSubset<T, administradoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradores and returns the data saved in the database.
     * @param {administradoresCreateManyAndReturnArgs} args - Arguments to create many Administradores.
     * @example
     * // Create many Administradores
     * const administradores = await prisma.administradores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradores and only return the `id_administrador`
     * const administradoresWithId_administradorOnly = await prisma.administradores.createManyAndReturn({
     *   select: { id_administrador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends administradoresCreateManyAndReturnArgs>(args?: SelectSubset<T, administradoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administradores.
     * @param {administradoresDeleteArgs} args - Arguments to delete one Administradores.
     * @example
     * // Delete one Administradores
     * const Administradores = await prisma.administradores.delete({
     *   where: {
     *     // ... filter to delete one Administradores
     *   }
     * })
     * 
     */
    delete<T extends administradoresDeleteArgs>(args: SelectSubset<T, administradoresDeleteArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administradores.
     * @param {administradoresUpdateArgs} args - Arguments to update one Administradores.
     * @example
     * // Update one Administradores
     * const administradores = await prisma.administradores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends administradoresUpdateArgs>(args: SelectSubset<T, administradoresUpdateArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradores.
     * @param {administradoresDeleteManyArgs} args - Arguments to filter Administradores to delete.
     * @example
     * // Delete a few Administradores
     * const { count } = await prisma.administradores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends administradoresDeleteManyArgs>(args?: SelectSubset<T, administradoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradores
     * const administradores = await prisma.administradores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends administradoresUpdateManyArgs>(args: SelectSubset<T, administradoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradores and returns the data updated in the database.
     * @param {administradoresUpdateManyAndReturnArgs} args - Arguments to update many Administradores.
     * @example
     * // Update many Administradores
     * const administradores = await prisma.administradores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administradores and only return the `id_administrador`
     * const administradoresWithId_administradorOnly = await prisma.administradores.updateManyAndReturn({
     *   select: { id_administrador: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends administradoresUpdateManyAndReturnArgs>(args: SelectSubset<T, administradoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administradores.
     * @param {administradoresUpsertArgs} args - Arguments to update or create a Administradores.
     * @example
     * // Update or create a Administradores
     * const administradores = await prisma.administradores.upsert({
     *   create: {
     *     // ... data to create a Administradores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administradores we want to update
     *   }
     * })
     */
    upsert<T extends administradoresUpsertArgs>(args: SelectSubset<T, administradoresUpsertArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresCountArgs} args - Arguments to filter Administradores to count.
     * @example
     * // Count the number of Administradores
     * const count = await prisma.administradores.count({
     *   where: {
     *     // ... the filter for the Administradores we want to count
     *   }
     * })
    **/
    count<T extends administradoresCountArgs>(
      args?: Subset<T, administradoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministradoresAggregateArgs>(args: Subset<T, AdministradoresAggregateArgs>): Prisma.PrismaPromise<GetAdministradoresAggregateType<T>>

    /**
     * Group by Administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends administradoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: administradoresGroupByArgs['orderBy'] }
        : { orderBy?: administradoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, administradoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the administradores model
   */
  readonly fields: administradoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for administradores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__administradoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the administradores model
   */
  interface administradoresFieldRefs {
    readonly id_administrador: FieldRef<"administradores", 'Int'>
    readonly hash_palavra_chave: FieldRef<"administradores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * administradores findUnique
   */
  export type administradoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
    /**
     * Filter, which administradores to fetch.
     */
    where: administradoresWhereUniqueInput
  }

  /**
   * administradores findUniqueOrThrow
   */
  export type administradoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
    /**
     * Filter, which administradores to fetch.
     */
    where: administradoresWhereUniqueInput
  }

  /**
   * administradores findFirst
   */
  export type administradoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
    /**
     * Filter, which administradores to fetch.
     */
    where?: administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradores to fetch.
     */
    orderBy?: administradoresOrderByWithRelationInput | administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for administradores.
     */
    cursor?: administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of administradores.
     */
    distinct?: AdministradoresScalarFieldEnum | AdministradoresScalarFieldEnum[]
  }

  /**
   * administradores findFirstOrThrow
   */
  export type administradoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
    /**
     * Filter, which administradores to fetch.
     */
    where?: administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradores to fetch.
     */
    orderBy?: administradoresOrderByWithRelationInput | administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for administradores.
     */
    cursor?: administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of administradores.
     */
    distinct?: AdministradoresScalarFieldEnum | AdministradoresScalarFieldEnum[]
  }

  /**
   * administradores findMany
   */
  export type administradoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
    /**
     * Filter, which administradores to fetch.
     */
    where?: administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradores to fetch.
     */
    orderBy?: administradoresOrderByWithRelationInput | administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing administradores.
     */
    cursor?: administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradores.
     */
    skip?: number
    distinct?: AdministradoresScalarFieldEnum | AdministradoresScalarFieldEnum[]
  }

  /**
   * administradores create
   */
  export type administradoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
    /**
     * The data needed to create a administradores.
     */
    data: XOR<administradoresCreateInput, administradoresUncheckedCreateInput>
  }

  /**
   * administradores createMany
   */
  export type administradoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many administradores.
     */
    data: administradoresCreateManyInput | administradoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * administradores createManyAndReturn
   */
  export type administradoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * The data used to create many administradores.
     */
    data: administradoresCreateManyInput | administradoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * administradores update
   */
  export type administradoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
    /**
     * The data needed to update a administradores.
     */
    data: XOR<administradoresUpdateInput, administradoresUncheckedUpdateInput>
    /**
     * Choose, which administradores to update.
     */
    where: administradoresWhereUniqueInput
  }

  /**
   * administradores updateMany
   */
  export type administradoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update administradores.
     */
    data: XOR<administradoresUpdateManyMutationInput, administradoresUncheckedUpdateManyInput>
    /**
     * Filter which administradores to update
     */
    where?: administradoresWhereInput
    /**
     * Limit how many administradores to update.
     */
    limit?: number
  }

  /**
   * administradores updateManyAndReturn
   */
  export type administradoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * The data used to update administradores.
     */
    data: XOR<administradoresUpdateManyMutationInput, administradoresUncheckedUpdateManyInput>
    /**
     * Filter which administradores to update
     */
    where?: administradoresWhereInput
    /**
     * Limit how many administradores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * administradores upsert
   */
  export type administradoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
    /**
     * The filter to search for the administradores to update in case it exists.
     */
    where: administradoresWhereUniqueInput
    /**
     * In case the administradores found by the `where` argument doesn't exist, create a new administradores with this data.
     */
    create: XOR<administradoresCreateInput, administradoresUncheckedCreateInput>
    /**
     * In case the administradores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<administradoresUpdateInput, administradoresUncheckedUpdateInput>
  }

  /**
   * administradores delete
   */
  export type administradoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
    /**
     * Filter which administradores to delete.
     */
    where: administradoresWhereUniqueInput
  }

  /**
   * administradores deleteMany
   */
  export type administradoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administradores to delete
     */
    where?: administradoresWhereInput
    /**
     * Limit how many administradores to delete.
     */
    limit?: number
  }

  /**
   * administradores without action
   */
  export type administradoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
  }


  /**
   * Model pacientes
   */

  export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  export type PacientesAvgAggregateOutputType = {
    id_paciente: number | null
  }

  export type PacientesSumAggregateOutputType = {
    id_paciente: number | null
  }

  export type PacientesMinAggregateOutputType = {
    id_paciente: number | null
    is_ativo: boolean | null
    primeiro_acesso: boolean | null
  }

  export type PacientesMaxAggregateOutputType = {
    id_paciente: number | null
    is_ativo: boolean | null
    primeiro_acesso: boolean | null
  }

  export type PacientesCountAggregateOutputType = {
    id_paciente: number
    is_ativo: number
    primeiro_acesso: number
    _all: number
  }


  export type PacientesAvgAggregateInputType = {
    id_paciente?: true
  }

  export type PacientesSumAggregateInputType = {
    id_paciente?: true
  }

  export type PacientesMinAggregateInputType = {
    id_paciente?: true
    is_ativo?: true
    primeiro_acesso?: true
  }

  export type PacientesMaxAggregateInputType = {
    id_paciente?: true
    is_ativo?: true
    primeiro_acesso?: true
  }

  export type PacientesCountAggregateInputType = {
    id_paciente?: true
    is_ativo?: true
    primeiro_acesso?: true
    _all?: true
  }

  export type PacientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to aggregate.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pacientes
    **/
    _count?: true | PacientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacientesMaxAggregateInputType
  }

  export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
        [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacientes[P]>
      : GetScalarType<T[P], AggregatePacientes[P]>
  }




  export type pacientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithAggregationInput | pacientesOrderByWithAggregationInput[]
    by: PacientesScalarFieldEnum[] | PacientesScalarFieldEnum
    having?: pacientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacientesCountAggregateInputType | true
    _avg?: PacientesAvgAggregateInputType
    _sum?: PacientesSumAggregateInputType
    _min?: PacientesMinAggregateInputType
    _max?: PacientesMaxAggregateInputType
  }

  export type PacientesGroupByOutputType = {
    id_paciente: number
    is_ativo: boolean
    primeiro_acesso: boolean
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  type GetPacientesGroupByPayload<T extends pacientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacientesGroupByOutputType[P]>
            : GetScalarType<T[P], PacientesGroupByOutputType[P]>
        }
      >
    >


  export type pacientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_paciente?: boolean
    is_ativo?: boolean
    primeiro_acesso?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_paciente?: boolean
    is_ativo?: boolean
    primeiro_acesso?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_paciente?: boolean
    is_ativo?: boolean
    primeiro_acesso?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type pacientesSelectScalar = {
    id_paciente?: boolean
    is_ativo?: boolean
    primeiro_acesso?: boolean
  }

  export type pacientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_paciente" | "is_ativo" | "primeiro_acesso", ExtArgs["result"]["pacientes"]>
  export type pacientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type pacientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type pacientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $pacientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pacientes"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_paciente: number
      is_ativo: boolean
      primeiro_acesso: boolean
    }, ExtArgs["result"]["pacientes"]>
    composites: {}
  }

  type pacientesGetPayload<S extends boolean | null | undefined | pacientesDefaultArgs> = $Result.GetResult<Prisma.$pacientesPayload, S>

  type pacientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pacientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacientesCountAggregateInputType | true
    }

  export interface pacientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pacientes'], meta: { name: 'pacientes' } }
    /**
     * Find zero or one Pacientes that matches the filter.
     * @param {pacientesFindUniqueArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pacientesFindUniqueArgs>(args: SelectSubset<T, pacientesFindUniqueArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pacientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pacientesFindUniqueOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pacientesFindUniqueOrThrowArgs>(args: SelectSubset<T, pacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pacientesFindFirstArgs>(args?: SelectSubset<T, pacientesFindFirstArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pacientesFindFirstOrThrowArgs>(args?: SelectSubset<T, pacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.pacientes.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.pacientes.findMany({ take: 10 })
     * 
     * // Only select the `id_paciente`
     * const pacientesWithId_pacienteOnly = await prisma.pacientes.findMany({ select: { id_paciente: true } })
     * 
     */
    findMany<T extends pacientesFindManyArgs>(args?: SelectSubset<T, pacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pacientes.
     * @param {pacientesCreateArgs} args - Arguments to create a Pacientes.
     * @example
     * // Create one Pacientes
     * const Pacientes = await prisma.pacientes.create({
     *   data: {
     *     // ... data to create a Pacientes
     *   }
     * })
     * 
     */
    create<T extends pacientesCreateArgs>(args: SelectSubset<T, pacientesCreateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {pacientesCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pacientesCreateManyArgs>(args?: SelectSubset<T, pacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {pacientesCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id_paciente`
     * const pacientesWithId_pacienteOnly = await prisma.pacientes.createManyAndReturn({
     *   select: { id_paciente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pacientesCreateManyAndReturnArgs>(args?: SelectSubset<T, pacientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pacientes.
     * @param {pacientesDeleteArgs} args - Arguments to delete one Pacientes.
     * @example
     * // Delete one Pacientes
     * const Pacientes = await prisma.pacientes.delete({
     *   where: {
     *     // ... filter to delete one Pacientes
     *   }
     * })
     * 
     */
    delete<T extends pacientesDeleteArgs>(args: SelectSubset<T, pacientesDeleteArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pacientes.
     * @param {pacientesUpdateArgs} args - Arguments to update one Pacientes.
     * @example
     * // Update one Pacientes
     * const pacientes = await prisma.pacientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pacientesUpdateArgs>(args: SelectSubset<T, pacientesUpdateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {pacientesDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.pacientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pacientesDeleteManyArgs>(args?: SelectSubset<T, pacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pacientesUpdateManyArgs>(args: SelectSubset<T, pacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {pacientesUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id_paciente`
     * const pacientesWithId_pacienteOnly = await prisma.pacientes.updateManyAndReturn({
     *   select: { id_paciente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pacientesUpdateManyAndReturnArgs>(args: SelectSubset<T, pacientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pacientes.
     * @param {pacientesUpsertArgs} args - Arguments to update or create a Pacientes.
     * @example
     * // Update or create a Pacientes
     * const pacientes = await prisma.pacientes.upsert({
     *   create: {
     *     // ... data to create a Pacientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pacientes we want to update
     *   }
     * })
     */
    upsert<T extends pacientesUpsertArgs>(args: SelectSubset<T, pacientesUpsertArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.pacientes.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends pacientesCountArgs>(
      args?: Subset<T, pacientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacientesAggregateArgs>(args: Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>

    /**
     * Group by Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pacientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pacientesGroupByArgs['orderBy'] }
        : { orderBy?: pacientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pacientes model
   */
  readonly fields: pacientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pacientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pacientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pacientes model
   */
  interface pacientesFieldRefs {
    readonly id_paciente: FieldRef<"pacientes", 'Int'>
    readonly is_ativo: FieldRef<"pacientes", 'Boolean'>
    readonly primeiro_acesso: FieldRef<"pacientes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * pacientes findUnique
   */
  export type pacientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findUniqueOrThrow
   */
  export type pacientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findFirst
   */
  export type pacientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findFirstOrThrow
   */
  export type pacientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findMany
   */
  export type pacientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes create
   */
  export type pacientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to create a pacientes.
     */
    data: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
  }

  /**
   * pacientes createMany
   */
  export type pacientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pacientes createManyAndReturn
   */
  export type pacientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pacientes update
   */
  export type pacientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to update a pacientes.
     */
    data: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
    /**
     * Choose, which pacientes to update.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes updateMany
   */
  export type pacientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
  }

  /**
   * pacientes updateManyAndReturn
   */
  export type pacientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pacientes upsert
   */
  export type pacientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The filter to search for the pacientes to update in case it exists.
     */
    where: pacientesWhereUniqueInput
    /**
     * In case the pacientes found by the `where` argument doesn't exist, create a new pacientes with this data.
     */
    create: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
    /**
     * In case the pacientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
  }

  /**
   * pacientes delete
   */
  export type pacientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter which pacientes to delete.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes deleteMany
   */
  export type pacientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to delete
     */
    where?: pacientesWhereInput
    /**
     * Limit how many pacientes to delete.
     */
    limit?: number
  }

  /**
   * pacientes without action
   */
  export type pacientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
  }


  /**
   * Model profissionais
   */

  export type AggregateProfissionais = {
    _count: ProfissionaisCountAggregateOutputType | null
    _avg: ProfissionaisAvgAggregateOutputType | null
    _sum: ProfissionaisSumAggregateOutputType | null
    _min: ProfissionaisMinAggregateOutputType | null
    _max: ProfissionaisMaxAggregateOutputType | null
  }

  export type ProfissionaisAvgAggregateOutputType = {
    id_profissional: number | null
  }

  export type ProfissionaisSumAggregateOutputType = {
    id_profissional: number | null
  }

  export type ProfissionaisMinAggregateOutputType = {
    id_profissional: number | null
    crm: string | null
  }

  export type ProfissionaisMaxAggregateOutputType = {
    id_profissional: number | null
    crm: string | null
  }

  export type ProfissionaisCountAggregateOutputType = {
    id_profissional: number
    crm: number
    _all: number
  }


  export type ProfissionaisAvgAggregateInputType = {
    id_profissional?: true
  }

  export type ProfissionaisSumAggregateInputType = {
    id_profissional?: true
  }

  export type ProfissionaisMinAggregateInputType = {
    id_profissional?: true
    crm?: true
  }

  export type ProfissionaisMaxAggregateInputType = {
    id_profissional?: true
    crm?: true
  }

  export type ProfissionaisCountAggregateInputType = {
    id_profissional?: true
    crm?: true
    _all?: true
  }

  export type ProfissionaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissionais to aggregate.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profissionais
    **/
    _count?: true | ProfissionaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfissionaisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfissionaisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfissionaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfissionaisMaxAggregateInputType
  }

  export type GetProfissionaisAggregateType<T extends ProfissionaisAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissionais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissionais[P]>
      : GetScalarType<T[P], AggregateProfissionais[P]>
  }




  export type profissionaisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profissionaisWhereInput
    orderBy?: profissionaisOrderByWithAggregationInput | profissionaisOrderByWithAggregationInput[]
    by: ProfissionaisScalarFieldEnum[] | ProfissionaisScalarFieldEnum
    having?: profissionaisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfissionaisCountAggregateInputType | true
    _avg?: ProfissionaisAvgAggregateInputType
    _sum?: ProfissionaisSumAggregateInputType
    _min?: ProfissionaisMinAggregateInputType
    _max?: ProfissionaisMaxAggregateInputType
  }

  export type ProfissionaisGroupByOutputType = {
    id_profissional: number
    crm: string
    _count: ProfissionaisCountAggregateOutputType | null
    _avg: ProfissionaisAvgAggregateOutputType | null
    _sum: ProfissionaisSumAggregateOutputType | null
    _min: ProfissionaisMinAggregateOutputType | null
    _max: ProfissionaisMaxAggregateOutputType | null
  }

  type GetProfissionaisGroupByPayload<T extends profissionaisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfissionaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfissionaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfissionaisGroupByOutputType[P]>
            : GetScalarType<T[P], ProfissionaisGroupByOutputType[P]>
        }
      >
    >


  export type profissionaisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profissional?: boolean
    crm?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionais"]>

  export type profissionaisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profissional?: boolean
    crm?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionais"]>

  export type profissionaisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profissional?: boolean
    crm?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionais"]>

  export type profissionaisSelectScalar = {
    id_profissional?: boolean
    crm?: boolean
  }

  export type profissionaisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_profissional" | "crm", ExtArgs["result"]["profissionais"]>
  export type profissionaisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type profissionaisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type profissionaisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $profissionaisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profissionais"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_profissional: number
      crm: string
    }, ExtArgs["result"]["profissionais"]>
    composites: {}
  }

  type profissionaisGetPayload<S extends boolean | null | undefined | profissionaisDefaultArgs> = $Result.GetResult<Prisma.$profissionaisPayload, S>

  type profissionaisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profissionaisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfissionaisCountAggregateInputType | true
    }

  export interface profissionaisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profissionais'], meta: { name: 'profissionais' } }
    /**
     * Find zero or one Profissionais that matches the filter.
     * @param {profissionaisFindUniqueArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profissionaisFindUniqueArgs>(args: SelectSubset<T, profissionaisFindUniqueArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissionais that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profissionaisFindUniqueOrThrowArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profissionaisFindUniqueOrThrowArgs>(args: SelectSubset<T, profissionaisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissionais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisFindFirstArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profissionaisFindFirstArgs>(args?: SelectSubset<T, profissionaisFindFirstArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissionais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisFindFirstOrThrowArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profissionaisFindFirstOrThrowArgs>(args?: SelectSubset<T, profissionaisFindFirstOrThrowArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissionais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissionais
     * const profissionais = await prisma.profissionais.findMany()
     * 
     * // Get first 10 Profissionais
     * const profissionais = await prisma.profissionais.findMany({ take: 10 })
     * 
     * // Only select the `id_profissional`
     * const profissionaisWithId_profissionalOnly = await prisma.profissionais.findMany({ select: { id_profissional: true } })
     * 
     */
    findMany<T extends profissionaisFindManyArgs>(args?: SelectSubset<T, profissionaisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissionais.
     * @param {profissionaisCreateArgs} args - Arguments to create a Profissionais.
     * @example
     * // Create one Profissionais
     * const Profissionais = await prisma.profissionais.create({
     *   data: {
     *     // ... data to create a Profissionais
     *   }
     * })
     * 
     */
    create<T extends profissionaisCreateArgs>(args: SelectSubset<T, profissionaisCreateArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissionais.
     * @param {profissionaisCreateManyArgs} args - Arguments to create many Profissionais.
     * @example
     * // Create many Profissionais
     * const profissionais = await prisma.profissionais.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profissionaisCreateManyArgs>(args?: SelectSubset<T, profissionaisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profissionais and returns the data saved in the database.
     * @param {profissionaisCreateManyAndReturnArgs} args - Arguments to create many Profissionais.
     * @example
     * // Create many Profissionais
     * const profissionais = await prisma.profissionais.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profissionais and only return the `id_profissional`
     * const profissionaisWithId_profissionalOnly = await prisma.profissionais.createManyAndReturn({
     *   select: { id_profissional: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profissionaisCreateManyAndReturnArgs>(args?: SelectSubset<T, profissionaisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profissionais.
     * @param {profissionaisDeleteArgs} args - Arguments to delete one Profissionais.
     * @example
     * // Delete one Profissionais
     * const Profissionais = await prisma.profissionais.delete({
     *   where: {
     *     // ... filter to delete one Profissionais
     *   }
     * })
     * 
     */
    delete<T extends profissionaisDeleteArgs>(args: SelectSubset<T, profissionaisDeleteArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissionais.
     * @param {profissionaisUpdateArgs} args - Arguments to update one Profissionais.
     * @example
     * // Update one Profissionais
     * const profissionais = await prisma.profissionais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profissionaisUpdateArgs>(args: SelectSubset<T, profissionaisUpdateArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissionais.
     * @param {profissionaisDeleteManyArgs} args - Arguments to filter Profissionais to delete.
     * @example
     * // Delete a few Profissionais
     * const { count } = await prisma.profissionais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profissionaisDeleteManyArgs>(args?: SelectSubset<T, profissionaisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissionais
     * const profissionais = await prisma.profissionais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profissionaisUpdateManyArgs>(args: SelectSubset<T, profissionaisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionais and returns the data updated in the database.
     * @param {profissionaisUpdateManyAndReturnArgs} args - Arguments to update many Profissionais.
     * @example
     * // Update many Profissionais
     * const profissionais = await prisma.profissionais.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profissionais and only return the `id_profissional`
     * const profissionaisWithId_profissionalOnly = await prisma.profissionais.updateManyAndReturn({
     *   select: { id_profissional: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends profissionaisUpdateManyAndReturnArgs>(args: SelectSubset<T, profissionaisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profissionais.
     * @param {profissionaisUpsertArgs} args - Arguments to update or create a Profissionais.
     * @example
     * // Update or create a Profissionais
     * const profissionais = await prisma.profissionais.upsert({
     *   create: {
     *     // ... data to create a Profissionais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissionais we want to update
     *   }
     * })
     */
    upsert<T extends profissionaisUpsertArgs>(args: SelectSubset<T, profissionaisUpsertArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisCountArgs} args - Arguments to filter Profissionais to count.
     * @example
     * // Count the number of Profissionais
     * const count = await prisma.profissionais.count({
     *   where: {
     *     // ... the filter for the Profissionais we want to count
     *   }
     * })
    **/
    count<T extends profissionaisCountArgs>(
      args?: Subset<T, profissionaisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfissionaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfissionaisAggregateArgs>(args: Subset<T, ProfissionaisAggregateArgs>): Prisma.PrismaPromise<GetProfissionaisAggregateType<T>>

    /**
     * Group by Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profissionaisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends profissionaisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profissionaisGroupByArgs['orderBy'] }
        : { orderBy?: profissionaisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, profissionaisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissionaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profissionais model
   */
  readonly fields: profissionaisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profissionais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profissionaisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the profissionais model
   */
  interface profissionaisFieldRefs {
    readonly id_profissional: FieldRef<"profissionais", 'Int'>
    readonly crm: FieldRef<"profissionais", 'String'>
  }
    

  // Custom InputTypes
  /**
   * profissionais findUnique
   */
  export type profissionaisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais findUniqueOrThrow
   */
  export type profissionaisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais findFirst
   */
  export type profissionaisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissionais.
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissionais.
     */
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * profissionais findFirstOrThrow
   */
  export type profissionaisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profissionais.
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profissionais.
     */
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * profissionais findMany
   */
  export type profissionaisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter, which profissionais to fetch.
     */
    where?: profissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profissionais to fetch.
     */
    orderBy?: profissionaisOrderByWithRelationInput | profissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profissionais.
     */
    cursor?: profissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profissionais.
     */
    skip?: number
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * profissionais create
   */
  export type profissionaisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * The data needed to create a profissionais.
     */
    data: XOR<profissionaisCreateInput, profissionaisUncheckedCreateInput>
  }

  /**
   * profissionais createMany
   */
  export type profissionaisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profissionais.
     */
    data: profissionaisCreateManyInput | profissionaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profissionais createManyAndReturn
   */
  export type profissionaisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * The data used to create many profissionais.
     */
    data: profissionaisCreateManyInput | profissionaisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profissionais update
   */
  export type profissionaisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * The data needed to update a profissionais.
     */
    data: XOR<profissionaisUpdateInput, profissionaisUncheckedUpdateInput>
    /**
     * Choose, which profissionais to update.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais updateMany
   */
  export type profissionaisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profissionais.
     */
    data: XOR<profissionaisUpdateManyMutationInput, profissionaisUncheckedUpdateManyInput>
    /**
     * Filter which profissionais to update
     */
    where?: profissionaisWhereInput
    /**
     * Limit how many profissionais to update.
     */
    limit?: number
  }

  /**
   * profissionais updateManyAndReturn
   */
  export type profissionaisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * The data used to update profissionais.
     */
    data: XOR<profissionaisUpdateManyMutationInput, profissionaisUncheckedUpdateManyInput>
    /**
     * Filter which profissionais to update
     */
    where?: profissionaisWhereInput
    /**
     * Limit how many profissionais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profissionais upsert
   */
  export type profissionaisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * The filter to search for the profissionais to update in case it exists.
     */
    where: profissionaisWhereUniqueInput
    /**
     * In case the profissionais found by the `where` argument doesn't exist, create a new profissionais with this data.
     */
    create: XOR<profissionaisCreateInput, profissionaisUncheckedCreateInput>
    /**
     * In case the profissionais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profissionaisUpdateInput, profissionaisUncheckedUpdateInput>
  }

  /**
   * profissionais delete
   */
  export type profissionaisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    /**
     * Filter which profissionais to delete.
     */
    where: profissionaisWhereUniqueInput
  }

  /**
   * profissionais deleteMany
   */
  export type profissionaisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profissionais to delete
     */
    where?: profissionaisWhereInput
    /**
     * Limit how many profissionais to delete.
     */
    limit?: number
  }

  /**
   * profissionais without action
   */
  export type profissionaisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    hash_senha: string | null
    data_nascimento: Date | null
    telefone: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    hash_senha: string | null
    data_nascimento: Date | null
    telefone: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    nome: number
    email: number
    hash_senha: number
    data_nascimento: number
    telefone: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    hash_senha?: true
    data_nascimento?: true
    telefone?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    hash_senha?: true
    data_nascimento?: true
    telefone?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    hash_senha?: true
    data_nascimento?: true
    telefone?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date
    telefone: string
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    hash_senha?: boolean
    data_nascimento?: boolean
    telefone?: boolean
    administradores?: boolean | usuarios$administradoresArgs<ExtArgs>
    pacientes?: boolean | usuarios$pacientesArgs<ExtArgs>
    profissionais?: boolean | usuarios$profissionaisArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    hash_senha?: boolean
    data_nascimento?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    hash_senha?: boolean
    data_nascimento?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    hash_senha?: boolean
    data_nascimento?: boolean
    telefone?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nome" | "email" | "hash_senha" | "data_nascimento" | "telefone", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administradores?: boolean | usuarios$administradoresArgs<ExtArgs>
    pacientes?: boolean | usuarios$pacientesArgs<ExtArgs>
    profissionais?: boolean | usuarios$profissionaisArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      administradores: Prisma.$administradoresPayload<ExtArgs> | null
      pacientes: Prisma.$pacientesPayload<ExtArgs> | null
      profissionais: Prisma.$profissionaisPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nome: string
      email: string
      hash_senha: string
      data_nascimento: Date
      telefone: string
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administradores<T extends usuarios$administradoresArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$administradoresArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pacientes<T extends usuarios$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$pacientesArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    profissionais<T extends usuarios$profissionaisArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$profissionaisArgs<ExtArgs>>): Prisma__profissionaisClient<$Result.GetResult<Prisma.$profissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly hash_senha: FieldRef<"usuarios", 'String'>
    readonly data_nascimento: FieldRef<"usuarios", 'DateTime'>
    readonly telefone: FieldRef<"usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.administradores
   */
  export type usuarios$administradoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradoresInclude<ExtArgs> | null
    where?: administradoresWhereInput
  }

  /**
   * usuarios.pacientes
   */
  export type usuarios$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pacientes
     */
    omit?: pacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    where?: pacientesWhereInput
  }

  /**
   * usuarios.profissionais
   */
  export type usuarios$profissionaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profissionais
     */
    select?: profissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profissionais
     */
    omit?: profissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profissionaisInclude<ExtArgs> | null
    where?: profissionaisWhereInput
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdministradoresScalarFieldEnum: {
    id_administrador: 'id_administrador',
    hash_palavra_chave: 'hash_palavra_chave'
  };

  export type AdministradoresScalarFieldEnum = (typeof AdministradoresScalarFieldEnum)[keyof typeof AdministradoresScalarFieldEnum]


  export const PacientesScalarFieldEnum: {
    id_paciente: 'id_paciente',
    is_ativo: 'is_ativo',
    primeiro_acesso: 'primeiro_acesso'
  };

  export type PacientesScalarFieldEnum = (typeof PacientesScalarFieldEnum)[keyof typeof PacientesScalarFieldEnum]


  export const ProfissionaisScalarFieldEnum: {
    id_profissional: 'id_profissional',
    crm: 'crm'
  };

  export type ProfissionaisScalarFieldEnum = (typeof ProfissionaisScalarFieldEnum)[keyof typeof ProfissionaisScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nome: 'nome',
    email: 'email',
    hash_senha: 'hash_senha',
    data_nascimento: 'data_nascimento',
    telefone: 'telefone'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type administradoresWhereInput = {
    AND?: administradoresWhereInput | administradoresWhereInput[]
    OR?: administradoresWhereInput[]
    NOT?: administradoresWhereInput | administradoresWhereInput[]
    id_administrador?: IntFilter<"administradores"> | number
    hash_palavra_chave?: StringFilter<"administradores"> | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type administradoresOrderByWithRelationInput = {
    id_administrador?: SortOrder
    hash_palavra_chave?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type administradoresWhereUniqueInput = Prisma.AtLeast<{
    id_administrador?: number
    AND?: administradoresWhereInput | administradoresWhereInput[]
    OR?: administradoresWhereInput[]
    NOT?: administradoresWhereInput | administradoresWhereInput[]
    hash_palavra_chave?: StringFilter<"administradores"> | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_administrador">

  export type administradoresOrderByWithAggregationInput = {
    id_administrador?: SortOrder
    hash_palavra_chave?: SortOrder
    _count?: administradoresCountOrderByAggregateInput
    _avg?: administradoresAvgOrderByAggregateInput
    _max?: administradoresMaxOrderByAggregateInput
    _min?: administradoresMinOrderByAggregateInput
    _sum?: administradoresSumOrderByAggregateInput
  }

  export type administradoresScalarWhereWithAggregatesInput = {
    AND?: administradoresScalarWhereWithAggregatesInput | administradoresScalarWhereWithAggregatesInput[]
    OR?: administradoresScalarWhereWithAggregatesInput[]
    NOT?: administradoresScalarWhereWithAggregatesInput | administradoresScalarWhereWithAggregatesInput[]
    id_administrador?: IntWithAggregatesFilter<"administradores"> | number
    hash_palavra_chave?: StringWithAggregatesFilter<"administradores"> | string
  }

  export type pacientesWhereInput = {
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    id_paciente?: IntFilter<"pacientes"> | number
    is_ativo?: BoolFilter<"pacientes"> | boolean
    primeiro_acesso?: BoolFilter<"pacientes"> | boolean
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type pacientesOrderByWithRelationInput = {
    id_paciente?: SortOrder
    is_ativo?: SortOrder
    primeiro_acesso?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type pacientesWhereUniqueInput = Prisma.AtLeast<{
    id_paciente?: number
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    is_ativo?: BoolFilter<"pacientes"> | boolean
    primeiro_acesso?: BoolFilter<"pacientes"> | boolean
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_paciente">

  export type pacientesOrderByWithAggregationInput = {
    id_paciente?: SortOrder
    is_ativo?: SortOrder
    primeiro_acesso?: SortOrder
    _count?: pacientesCountOrderByAggregateInput
    _avg?: pacientesAvgOrderByAggregateInput
    _max?: pacientesMaxOrderByAggregateInput
    _min?: pacientesMinOrderByAggregateInput
    _sum?: pacientesSumOrderByAggregateInput
  }

  export type pacientesScalarWhereWithAggregatesInput = {
    AND?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    OR?: pacientesScalarWhereWithAggregatesInput[]
    NOT?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    id_paciente?: IntWithAggregatesFilter<"pacientes"> | number
    is_ativo?: BoolWithAggregatesFilter<"pacientes"> | boolean
    primeiro_acesso?: BoolWithAggregatesFilter<"pacientes"> | boolean
  }

  export type profissionaisWhereInput = {
    AND?: profissionaisWhereInput | profissionaisWhereInput[]
    OR?: profissionaisWhereInput[]
    NOT?: profissionaisWhereInput | profissionaisWhereInput[]
    id_profissional?: IntFilter<"profissionais"> | number
    crm?: StringFilter<"profissionais"> | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type profissionaisOrderByWithRelationInput = {
    id_profissional?: SortOrder
    crm?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type profissionaisWhereUniqueInput = Prisma.AtLeast<{
    id_profissional?: number
    AND?: profissionaisWhereInput | profissionaisWhereInput[]
    OR?: profissionaisWhereInput[]
    NOT?: profissionaisWhereInput | profissionaisWhereInput[]
    crm?: StringFilter<"profissionais"> | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_profissional">

  export type profissionaisOrderByWithAggregationInput = {
    id_profissional?: SortOrder
    crm?: SortOrder
    _count?: profissionaisCountOrderByAggregateInput
    _avg?: profissionaisAvgOrderByAggregateInput
    _max?: profissionaisMaxOrderByAggregateInput
    _min?: profissionaisMinOrderByAggregateInput
    _sum?: profissionaisSumOrderByAggregateInput
  }

  export type profissionaisScalarWhereWithAggregatesInput = {
    AND?: profissionaisScalarWhereWithAggregatesInput | profissionaisScalarWhereWithAggregatesInput[]
    OR?: profissionaisScalarWhereWithAggregatesInput[]
    NOT?: profissionaisScalarWhereWithAggregatesInput | profissionaisScalarWhereWithAggregatesInput[]
    id_profissional?: IntWithAggregatesFilter<"profissionais"> | number
    crm?: StringWithAggregatesFilter<"profissionais"> | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    hash_senha?: StringFilter<"usuarios"> | string
    data_nascimento?: DateTimeFilter<"usuarios"> | Date | string
    telefone?: StringFilter<"usuarios"> | string
    administradores?: XOR<AdministradoresNullableScalarRelationFilter, administradoresWhereInput> | null
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
    profissionais?: XOR<ProfissionaisNullableScalarRelationFilter, profissionaisWhereInput> | null
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    administradores?: administradoresOrderByWithRelationInput
    pacientes?: pacientesOrderByWithRelationInput
    profissionais?: profissionaisOrderByWithRelationInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringFilter<"usuarios"> | string
    hash_senha?: StringFilter<"usuarios"> | string
    data_nascimento?: DateTimeFilter<"usuarios"> | Date | string
    telefone?: StringFilter<"usuarios"> | string
    administradores?: XOR<AdministradoresNullableScalarRelationFilter, administradoresWhereInput> | null
    pacientes?: XOR<PacientesNullableScalarRelationFilter, pacientesWhereInput> | null
    profissionais?: XOR<ProfissionaisNullableScalarRelationFilter, profissionaisWhereInput> | null
  }, "id_usuario" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    hash_senha?: StringWithAggregatesFilter<"usuarios"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    telefone?: StringWithAggregatesFilter<"usuarios"> | string
  }

  export type administradoresCreateInput = {
    hash_palavra_chave: string
    usuarios: usuariosCreateNestedOneWithoutAdministradoresInput
  }

  export type administradoresUncheckedCreateInput = {
    id_administrador: number
    hash_palavra_chave: string
  }

  export type administradoresUpdateInput = {
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUpdateOneRequiredWithoutAdministradoresNestedInput
  }

  export type administradoresUncheckedUpdateInput = {
    id_administrador?: IntFieldUpdateOperationsInput | number
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
  }

  export type administradoresCreateManyInput = {
    id_administrador: number
    hash_palavra_chave: string
  }

  export type administradoresUpdateManyMutationInput = {
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
  }

  export type administradoresUncheckedUpdateManyInput = {
    id_administrador?: IntFieldUpdateOperationsInput | number
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
  }

  export type pacientesCreateInput = {
    is_ativo: boolean
    primeiro_acesso: boolean
    usuarios: usuariosCreateNestedOneWithoutPacientesInput
  }

  export type pacientesUncheckedCreateInput = {
    id_paciente: number
    is_ativo: boolean
    primeiro_acesso: boolean
  }

  export type pacientesUpdateInput = {
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: usuariosUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pacientesCreateManyInput = {
    id_paciente: number
    is_ativo: boolean
    primeiro_acesso: boolean
  }

  export type pacientesUpdateManyMutationInput = {
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pacientesUncheckedUpdateManyInput = {
    id_paciente?: IntFieldUpdateOperationsInput | number
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type profissionaisCreateInput = {
    crm: string
    usuarios: usuariosCreateNestedOneWithoutProfissionaisInput
  }

  export type profissionaisUncheckedCreateInput = {
    id_profissional: number
    crm: string
  }

  export type profissionaisUpdateInput = {
    crm?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUpdateOneRequiredWithoutProfissionaisNestedInput
  }

  export type profissionaisUncheckedUpdateInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    crm?: StringFieldUpdateOperationsInput | string
  }

  export type profissionaisCreateManyInput = {
    id_profissional: number
    crm: string
  }

  export type profissionaisUpdateManyMutationInput = {
    crm?: StringFieldUpdateOperationsInput | string
  }

  export type profissionaisUncheckedUpdateManyInput = {
    id_profissional?: IntFieldUpdateOperationsInput | number
    crm?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosCreateInput = {
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    administradores?: administradoresCreateNestedOneWithoutUsuariosInput
    pacientes?: pacientesCreateNestedOneWithoutUsuariosInput
    profissionais?: profissionaisCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    administradores?: administradoresUncheckedCreateNestedOneWithoutUsuariosInput
    pacientes?: pacientesUncheckedCreateNestedOneWithoutUsuariosInput
    profissionais?: profissionaisUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    administradores?: administradoresUpdateOneWithoutUsuariosNestedInput
    pacientes?: pacientesUpdateOneWithoutUsuariosNestedInput
    profissionais?: profissionaisUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    administradores?: administradoresUncheckedUpdateOneWithoutUsuariosNestedInput
    pacientes?: pacientesUncheckedUpdateOneWithoutUsuariosNestedInput
    profissionais?: profissionaisUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type administradoresCountOrderByAggregateInput = {
    id_administrador?: SortOrder
    hash_palavra_chave?: SortOrder
  }

  export type administradoresAvgOrderByAggregateInput = {
    id_administrador?: SortOrder
  }

  export type administradoresMaxOrderByAggregateInput = {
    id_administrador?: SortOrder
    hash_palavra_chave?: SortOrder
  }

  export type administradoresMinOrderByAggregateInput = {
    id_administrador?: SortOrder
    hash_palavra_chave?: SortOrder
  }

  export type administradoresSumOrderByAggregateInput = {
    id_administrador?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type pacientesCountOrderByAggregateInput = {
    id_paciente?: SortOrder
    is_ativo?: SortOrder
    primeiro_acesso?: SortOrder
  }

  export type pacientesAvgOrderByAggregateInput = {
    id_paciente?: SortOrder
  }

  export type pacientesMaxOrderByAggregateInput = {
    id_paciente?: SortOrder
    is_ativo?: SortOrder
    primeiro_acesso?: SortOrder
  }

  export type pacientesMinOrderByAggregateInput = {
    id_paciente?: SortOrder
    is_ativo?: SortOrder
    primeiro_acesso?: SortOrder
  }

  export type pacientesSumOrderByAggregateInput = {
    id_paciente?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type profissionaisCountOrderByAggregateInput = {
    id_profissional?: SortOrder
    crm?: SortOrder
  }

  export type profissionaisAvgOrderByAggregateInput = {
    id_profissional?: SortOrder
  }

  export type profissionaisMaxOrderByAggregateInput = {
    id_profissional?: SortOrder
    crm?: SortOrder
  }

  export type profissionaisMinOrderByAggregateInput = {
    id_profissional?: SortOrder
    crm?: SortOrder
  }

  export type profissionaisSumOrderByAggregateInput = {
    id_profissional?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdministradoresNullableScalarRelationFilter = {
    is?: administradoresWhereInput | null
    isNot?: administradoresWhereInput | null
  }

  export type PacientesNullableScalarRelationFilter = {
    is?: pacientesWhereInput | null
    isNot?: pacientesWhereInput | null
  }

  export type ProfissionaisNullableScalarRelationFilter = {
    is?: profissionaisWhereInput | null
    isNot?: profissionaisWhereInput | null
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    data_nascimento?: SortOrder
    telefone?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usuariosCreateNestedOneWithoutAdministradoresInput = {
    create?: XOR<usuariosCreateWithoutAdministradoresInput, usuariosUncheckedCreateWithoutAdministradoresInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutAdministradoresInput
    connect?: usuariosWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usuariosUpdateOneRequiredWithoutAdministradoresNestedInput = {
    create?: XOR<usuariosCreateWithoutAdministradoresInput, usuariosUncheckedCreateWithoutAdministradoresInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutAdministradoresInput
    upsert?: usuariosUpsertWithoutAdministradoresInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutAdministradoresInput, usuariosUpdateWithoutAdministradoresInput>, usuariosUncheckedUpdateWithoutAdministradoresInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuariosCreateNestedOneWithoutPacientesInput = {
    create?: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPacientesInput
    connect?: usuariosWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usuariosUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPacientesInput
    upsert?: usuariosUpsertWithoutPacientesInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutPacientesInput, usuariosUpdateWithoutPacientesInput>, usuariosUncheckedUpdateWithoutPacientesInput>
  }

  export type usuariosCreateNestedOneWithoutProfissionaisInput = {
    create?: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutProfissionaisInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutProfissionaisNestedInput = {
    create?: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutProfissionaisInput
    upsert?: usuariosUpsertWithoutProfissionaisInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutProfissionaisInput, usuariosUpdateWithoutProfissionaisInput>, usuariosUncheckedUpdateWithoutProfissionaisInput>
  }

  export type administradoresCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<administradoresCreateWithoutUsuariosInput, administradoresUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: administradoresCreateOrConnectWithoutUsuariosInput
    connect?: administradoresWhereUniqueInput
  }

  export type pacientesCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    connect?: pacientesWhereUniqueInput
  }

  export type profissionaisCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput
    connect?: profissionaisWhereUniqueInput
  }

  export type administradoresUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<administradoresCreateWithoutUsuariosInput, administradoresUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: administradoresCreateOrConnectWithoutUsuariosInput
    connect?: administradoresWhereUniqueInput
  }

  export type pacientesUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    connect?: pacientesWhereUniqueInput
  }

  export type profissionaisUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput
    connect?: profissionaisWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type administradoresUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<administradoresCreateWithoutUsuariosInput, administradoresUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: administradoresCreateOrConnectWithoutUsuariosInput
    upsert?: administradoresUpsertWithoutUsuariosInput
    disconnect?: administradoresWhereInput | boolean
    delete?: administradoresWhereInput | boolean
    connect?: administradoresWhereUniqueInput
    update?: XOR<XOR<administradoresUpdateToOneWithWhereWithoutUsuariosInput, administradoresUpdateWithoutUsuariosInput>, administradoresUncheckedUpdateWithoutUsuariosInput>
  }

  export type pacientesUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    upsert?: pacientesUpsertWithoutUsuariosInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutUsuariosInput, pacientesUpdateWithoutUsuariosInput>, pacientesUncheckedUpdateWithoutUsuariosInput>
  }

  export type profissionaisUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput
    upsert?: profissionaisUpsertWithoutUsuariosInput
    disconnect?: profissionaisWhereInput | boolean
    delete?: profissionaisWhereInput | boolean
    connect?: profissionaisWhereUniqueInput
    update?: XOR<XOR<profissionaisUpdateToOneWithWhereWithoutUsuariosInput, profissionaisUpdateWithoutUsuariosInput>, profissionaisUncheckedUpdateWithoutUsuariosInput>
  }

  export type administradoresUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<administradoresCreateWithoutUsuariosInput, administradoresUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: administradoresCreateOrConnectWithoutUsuariosInput
    upsert?: administradoresUpsertWithoutUsuariosInput
    disconnect?: administradoresWhereInput | boolean
    delete?: administradoresWhereInput | boolean
    connect?: administradoresWhereUniqueInput
    update?: XOR<XOR<administradoresUpdateToOneWithWhereWithoutUsuariosInput, administradoresUpdateWithoutUsuariosInput>, administradoresUncheckedUpdateWithoutUsuariosInput>
  }

  export type pacientesUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutUsuariosInput
    upsert?: pacientesUpsertWithoutUsuariosInput
    disconnect?: pacientesWhereInput | boolean
    delete?: pacientesWhereInput | boolean
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutUsuariosInput, pacientesUpdateWithoutUsuariosInput>, pacientesUncheckedUpdateWithoutUsuariosInput>
  }

  export type profissionaisUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: profissionaisCreateOrConnectWithoutUsuariosInput
    upsert?: profissionaisUpsertWithoutUsuariosInput
    disconnect?: profissionaisWhereInput | boolean
    delete?: profissionaisWhereInput | boolean
    connect?: profissionaisWhereUniqueInput
    update?: XOR<XOR<profissionaisUpdateToOneWithWhereWithoutUsuariosInput, profissionaisUpdateWithoutUsuariosInput>, profissionaisUncheckedUpdateWithoutUsuariosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usuariosCreateWithoutAdministradoresInput = {
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    pacientes?: pacientesCreateNestedOneWithoutUsuariosInput
    profissionais?: profissionaisCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutAdministradoresInput = {
    id_usuario?: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    pacientes?: pacientesUncheckedCreateNestedOneWithoutUsuariosInput
    profissionais?: profissionaisUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutAdministradoresInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutAdministradoresInput, usuariosUncheckedCreateWithoutAdministradoresInput>
  }

  export type usuariosUpsertWithoutAdministradoresInput = {
    update: XOR<usuariosUpdateWithoutAdministradoresInput, usuariosUncheckedUpdateWithoutAdministradoresInput>
    create: XOR<usuariosCreateWithoutAdministradoresInput, usuariosUncheckedCreateWithoutAdministradoresInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutAdministradoresInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutAdministradoresInput, usuariosUncheckedUpdateWithoutAdministradoresInput>
  }

  export type usuariosUpdateWithoutAdministradoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUpdateOneWithoutUsuariosNestedInput
    profissionais?: profissionaisUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutAdministradoresInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUncheckedUpdateOneWithoutUsuariosNestedInput
    profissionais?: profissionaisUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosCreateWithoutPacientesInput = {
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    administradores?: administradoresCreateNestedOneWithoutUsuariosInput
    profissionais?: profissionaisCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutPacientesInput = {
    id_usuario?: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    administradores?: administradoresUncheckedCreateNestedOneWithoutUsuariosInput
    profissionais?: profissionaisUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutPacientesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
  }

  export type usuariosUpsertWithoutPacientesInput = {
    update: XOR<usuariosUpdateWithoutPacientesInput, usuariosUncheckedUpdateWithoutPacientesInput>
    create: XOR<usuariosCreateWithoutPacientesInput, usuariosUncheckedCreateWithoutPacientesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutPacientesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutPacientesInput, usuariosUncheckedUpdateWithoutPacientesInput>
  }

  export type usuariosUpdateWithoutPacientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    administradores?: administradoresUpdateOneWithoutUsuariosNestedInput
    profissionais?: profissionaisUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutPacientesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    administradores?: administradoresUncheckedUpdateOneWithoutUsuariosNestedInput
    profissionais?: profissionaisUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosCreateWithoutProfissionaisInput = {
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    administradores?: administradoresCreateNestedOneWithoutUsuariosInput
    pacientes?: pacientesCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutProfissionaisInput = {
    id_usuario?: number
    nome: string
    email: string
    hash_senha: string
    data_nascimento: Date | string
    telefone: string
    administradores?: administradoresUncheckedCreateNestedOneWithoutUsuariosInput
    pacientes?: pacientesUncheckedCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutProfissionaisInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
  }

  export type usuariosUpsertWithoutProfissionaisInput = {
    update: XOR<usuariosUpdateWithoutProfissionaisInput, usuariosUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<usuariosCreateWithoutProfissionaisInput, usuariosUncheckedCreateWithoutProfissionaisInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutProfissionaisInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutProfissionaisInput, usuariosUncheckedUpdateWithoutProfissionaisInput>
  }

  export type usuariosUpdateWithoutProfissionaisInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    administradores?: administradoresUpdateOneWithoutUsuariosNestedInput
    pacientes?: pacientesUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutProfissionaisInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    administradores?: administradoresUncheckedUpdateOneWithoutUsuariosNestedInput
    pacientes?: pacientesUncheckedUpdateOneWithoutUsuariosNestedInput
  }

  export type administradoresCreateWithoutUsuariosInput = {
    hash_palavra_chave: string
  }

  export type administradoresUncheckedCreateWithoutUsuariosInput = {
    hash_palavra_chave: string
  }

  export type administradoresCreateOrConnectWithoutUsuariosInput = {
    where: administradoresWhereUniqueInput
    create: XOR<administradoresCreateWithoutUsuariosInput, administradoresUncheckedCreateWithoutUsuariosInput>
  }

  export type pacientesCreateWithoutUsuariosInput = {
    is_ativo: boolean
    primeiro_acesso: boolean
  }

  export type pacientesUncheckedCreateWithoutUsuariosInput = {
    is_ativo: boolean
    primeiro_acesso: boolean
  }

  export type pacientesCreateOrConnectWithoutUsuariosInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
  }

  export type profissionaisCreateWithoutUsuariosInput = {
    crm: string
  }

  export type profissionaisUncheckedCreateWithoutUsuariosInput = {
    crm: string
  }

  export type profissionaisCreateOrConnectWithoutUsuariosInput = {
    where: profissionaisWhereUniqueInput
    create: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
  }

  export type administradoresUpsertWithoutUsuariosInput = {
    update: XOR<administradoresUpdateWithoutUsuariosInput, administradoresUncheckedUpdateWithoutUsuariosInput>
    create: XOR<administradoresCreateWithoutUsuariosInput, administradoresUncheckedCreateWithoutUsuariosInput>
    where?: administradoresWhereInput
  }

  export type administradoresUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: administradoresWhereInput
    data: XOR<administradoresUpdateWithoutUsuariosInput, administradoresUncheckedUpdateWithoutUsuariosInput>
  }

  export type administradoresUpdateWithoutUsuariosInput = {
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
  }

  export type administradoresUncheckedUpdateWithoutUsuariosInput = {
    hash_palavra_chave?: StringFieldUpdateOperationsInput | string
  }

  export type pacientesUpsertWithoutUsuariosInput = {
    update: XOR<pacientesUpdateWithoutUsuariosInput, pacientesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<pacientesCreateWithoutUsuariosInput, pacientesUncheckedCreateWithoutUsuariosInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutUsuariosInput, pacientesUncheckedUpdateWithoutUsuariosInput>
  }

  export type pacientesUpdateWithoutUsuariosInput = {
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pacientesUncheckedUpdateWithoutUsuariosInput = {
    is_ativo?: BoolFieldUpdateOperationsInput | boolean
    primeiro_acesso?: BoolFieldUpdateOperationsInput | boolean
  }

  export type profissionaisUpsertWithoutUsuariosInput = {
    update: XOR<profissionaisUpdateWithoutUsuariosInput, profissionaisUncheckedUpdateWithoutUsuariosInput>
    create: XOR<profissionaisCreateWithoutUsuariosInput, profissionaisUncheckedCreateWithoutUsuariosInput>
    where?: profissionaisWhereInput
  }

  export type profissionaisUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: profissionaisWhereInput
    data: XOR<profissionaisUpdateWithoutUsuariosInput, profissionaisUncheckedUpdateWithoutUsuariosInput>
  }

  export type profissionaisUpdateWithoutUsuariosInput = {
    crm?: StringFieldUpdateOperationsInput | string
  }

  export type profissionaisUncheckedUpdateWithoutUsuariosInput = {
    crm?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}