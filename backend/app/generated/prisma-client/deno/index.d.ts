
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model coupon_instances
 * 
 */
export type coupon_instances = {
  id: bigint
  created_at: Date | null
  coupon_id: bigint
  customer_id: bigint
}

/**
 * Model coupons
 * 
 */
export type coupons = {
  id: bigint
  created_at: Date | null
  title: string | null
  description: string | null
  image_url: string | null
  user_id: bigint
  expires_at: Date | null
}

/**
 * Model customers
 * 
 */
export type customers = {
  id: bigint
  email: string | null
  created_at: Date | null
}

/**
 * Model redemptions
 * 
 */
export type redemptions = {
  id: bigint
  created_at: Date | null
  revenue: Prisma.Decimal | null
  currency: string | null
  coupon_instance_id: bigint
}

/**
 * Model users
 * 
 */
export type users = {
  id: bigint
  name: string | null
  email: string | null
  created_at: Date | null
  role: role | null
  password: string | null
  manager_id: bigint
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const role: {
  admin: 'admin',
  manager: 'manager',
  staff: 'staff'
};

export type role = (typeof role)[keyof typeof role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Coupon_instances
 * const coupon_instances = await prisma.coupon_instances.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Coupon_instances
   * const coupon_instances = await prisma.coupon_instances.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.coupon_instances`: Exposes CRUD operations for the **coupon_instances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupon_instances
    * const coupon_instances = await prisma.coupon_instances.findMany()
    * ```
    */
  get coupon_instances(): Prisma.coupon_instancesDelegate<GlobalReject>;

  /**
   * `prisma.coupons`: Exposes CRUD operations for the **coupons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupons.findMany()
    * ```
    */
  get coupons(): Prisma.couponsDelegate<GlobalReject>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<GlobalReject>;

  /**
   * `prisma.redemptions`: Exposes CRUD operations for the **redemptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Redemptions
    * const redemptions = await prisma.redemptions.findMany()
    * ```
    */
  get redemptions(): Prisma.redemptionsDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    coupon_instances: 'coupon_instances',
    coupons: 'coupons',
    customers: 'customers',
    redemptions: 'redemptions',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Coupon_instancesCountOutputType
   */


  export type Coupon_instancesCountOutputType = {
    redemptions: number
  }

  export type Coupon_instancesCountOutputTypeSelect = {
    redemptions?: boolean
  }

  export type Coupon_instancesCountOutputTypeGetPayload<S extends boolean | null | undefined | Coupon_instancesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Coupon_instancesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Coupon_instancesCountOutputTypeArgs)
    ? Coupon_instancesCountOutputType 
    : S extends { select: any } & (Coupon_instancesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Coupon_instancesCountOutputType ? Coupon_instancesCountOutputType[P] : never
  } 
      : Coupon_instancesCountOutputType




  // Custom InputTypes

  /**
   * Coupon_instancesCountOutputType without action
   */
  export type Coupon_instancesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Coupon_instancesCountOutputType
     * 
    **/
    select?: Coupon_instancesCountOutputTypeSelect | null
  }



  /**
   * Count Type CouponsCountOutputType
   */


  export type CouponsCountOutputType = {
    coupon_instances: number
  }

  export type CouponsCountOutputTypeSelect = {
    coupon_instances?: boolean
  }

  export type CouponsCountOutputTypeGetPayload<S extends boolean | null | undefined | CouponsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CouponsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CouponsCountOutputTypeArgs)
    ? CouponsCountOutputType 
    : S extends { select: any } & (CouponsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CouponsCountOutputType ? CouponsCountOutputType[P] : never
  } 
      : CouponsCountOutputType




  // Custom InputTypes

  /**
   * CouponsCountOutputType without action
   */
  export type CouponsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CouponsCountOutputType
     * 
    **/
    select?: CouponsCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomersCountOutputType
   */


  export type CustomersCountOutputType = {
    coupon_instances: number
  }

  export type CustomersCountOutputTypeSelect = {
    coupon_instances?: boolean
  }

  export type CustomersCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomersCountOutputTypeArgs)
    ? CustomersCountOutputType 
    : S extends { select: any } & (CustomersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomersCountOutputType ? CustomersCountOutputType[P] : never
  } 
      : CustomersCountOutputType




  // Custom InputTypes

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     * 
    **/
    select?: CustomersCountOutputTypeSelect | null
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    coupons: number
    staff: number
  }

  export type UsersCountOutputTypeSelect = {
    coupons?: boolean
    staff?: boolean
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     * 
    **/
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model coupon_instances
   */


  export type AggregateCoupon_instances = {
    _count: Coupon_instancesCountAggregateOutputType | null
    _avg: Coupon_instancesAvgAggregateOutputType | null
    _sum: Coupon_instancesSumAggregateOutputType | null
    _min: Coupon_instancesMinAggregateOutputType | null
    _max: Coupon_instancesMaxAggregateOutputType | null
  }

  export type Coupon_instancesAvgAggregateOutputType = {
    id: number | null
    coupon_id: number | null
    customer_id: number | null
  }

  export type Coupon_instancesSumAggregateOutputType = {
    id: bigint | null
    coupon_id: bigint | null
    customer_id: bigint | null
  }

  export type Coupon_instancesMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    coupon_id: bigint | null
    customer_id: bigint | null
  }

  export type Coupon_instancesMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    coupon_id: bigint | null
    customer_id: bigint | null
  }

  export type Coupon_instancesCountAggregateOutputType = {
    id: number
    created_at: number
    coupon_id: number
    customer_id: number
    _all: number
  }


  export type Coupon_instancesAvgAggregateInputType = {
    id?: true
    coupon_id?: true
    customer_id?: true
  }

  export type Coupon_instancesSumAggregateInputType = {
    id?: true
    coupon_id?: true
    customer_id?: true
  }

  export type Coupon_instancesMinAggregateInputType = {
    id?: true
    created_at?: true
    coupon_id?: true
    customer_id?: true
  }

  export type Coupon_instancesMaxAggregateInputType = {
    id?: true
    created_at?: true
    coupon_id?: true
    customer_id?: true
  }

  export type Coupon_instancesCountAggregateInputType = {
    id?: true
    created_at?: true
    coupon_id?: true
    customer_id?: true
    _all?: true
  }

  export type Coupon_instancesAggregateArgs = {
    /**
     * Filter which coupon_instances to aggregate.
     * 
    **/
    where?: coupon_instancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupon_instances to fetch.
     * 
    **/
    orderBy?: Enumerable<coupon_instancesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: coupon_instancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupon_instances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupon_instances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned coupon_instances
    **/
    _count?: true | Coupon_instancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Coupon_instancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Coupon_instancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Coupon_instancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Coupon_instancesMaxAggregateInputType
  }

  export type GetCoupon_instancesAggregateType<T extends Coupon_instancesAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon_instances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon_instances[P]>
      : GetScalarType<T[P], AggregateCoupon_instances[P]>
  }




  export type Coupon_instancesGroupByArgs = {
    where?: coupon_instancesWhereInput
    orderBy?: Enumerable<coupon_instancesOrderByWithAggregationInput>
    by: Array<Coupon_instancesScalarFieldEnum>
    having?: coupon_instancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Coupon_instancesCountAggregateInputType | true
    _avg?: Coupon_instancesAvgAggregateInputType
    _sum?: Coupon_instancesSumAggregateInputType
    _min?: Coupon_instancesMinAggregateInputType
    _max?: Coupon_instancesMaxAggregateInputType
  }


  export type Coupon_instancesGroupByOutputType = {
    id: bigint
    created_at: Date | null
    coupon_id: bigint
    customer_id: bigint
    _count: Coupon_instancesCountAggregateOutputType | null
    _avg: Coupon_instancesAvgAggregateOutputType | null
    _sum: Coupon_instancesSumAggregateOutputType | null
    _min: Coupon_instancesMinAggregateOutputType | null
    _max: Coupon_instancesMaxAggregateOutputType | null
  }

  type GetCoupon_instancesGroupByPayload<T extends Coupon_instancesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Coupon_instancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Coupon_instancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Coupon_instancesGroupByOutputType[P]>
            : GetScalarType<T[P], Coupon_instancesGroupByOutputType[P]>
        }
      >
    >


  export type coupon_instancesSelect = {
    id?: boolean
    created_at?: boolean
    coupon_id?: boolean
    customer_id?: boolean
    coupon?: boolean | couponsArgs
    customer?: boolean | customersArgs
    redemptions?: boolean | coupon_instancesRedemptionsArgs
    _count?: boolean | Coupon_instancesCountOutputTypeArgs
  }


  export type coupon_instancesInclude = {
    coupon?: boolean | couponsArgs
    customer?: boolean | customersArgs
    redemptions?: boolean | coupon_instancesRedemptionsArgs
    _count?: boolean | Coupon_instancesCountOutputTypeArgs
  } 

  export type coupon_instancesGetPayload<S extends boolean | null | undefined | coupon_instancesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? coupon_instances :
    S extends undefined ? never :
    S extends { include: any } & (coupon_instancesArgs | coupon_instancesFindManyArgs)
    ? coupon_instances  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coupon' ? couponsGetPayload<S['include'][P]> :
        P extends 'customer' ? customersGetPayload<S['include'][P]> :
        P extends 'redemptions' ? Array < redemptionsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Coupon_instancesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (coupon_instancesArgs | coupon_instancesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coupon' ? couponsGetPayload<S['select'][P]> :
        P extends 'customer' ? customersGetPayload<S['select'][P]> :
        P extends 'redemptions' ? Array < redemptionsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Coupon_instancesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof coupon_instances ? coupon_instances[P] : never
  } 
      : coupon_instances


  type coupon_instancesCountArgs = Merge<
    Omit<coupon_instancesFindManyArgs, 'select' | 'include'> & {
      select?: Coupon_instancesCountAggregateInputType | true
    }
  >

  export interface coupon_instancesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Coupon_instances that matches the filter.
     * @param {coupon_instancesFindUniqueArgs} args - Arguments to find a Coupon_instances
     * @example
     * // Get one Coupon_instances
     * const coupon_instances = await prisma.coupon_instances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends coupon_instancesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, coupon_instancesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'coupon_instances'> extends True ? Prisma__coupon_instancesClient<coupon_instancesGetPayload<T>> : Prisma__coupon_instancesClient<coupon_instancesGetPayload<T> | null, null>

    /**
     * Find one Coupon_instances that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {coupon_instancesFindUniqueOrThrowArgs} args - Arguments to find a Coupon_instances
     * @example
     * // Get one Coupon_instances
     * const coupon_instances = await prisma.coupon_instances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends coupon_instancesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, coupon_instancesFindUniqueOrThrowArgs>
    ): Prisma__coupon_instancesClient<coupon_instancesGetPayload<T>>

    /**
     * Find the first Coupon_instances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coupon_instancesFindFirstArgs} args - Arguments to find a Coupon_instances
     * @example
     * // Get one Coupon_instances
     * const coupon_instances = await prisma.coupon_instances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends coupon_instancesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, coupon_instancesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'coupon_instances'> extends True ? Prisma__coupon_instancesClient<coupon_instancesGetPayload<T>> : Prisma__coupon_instancesClient<coupon_instancesGetPayload<T> | null, null>

    /**
     * Find the first Coupon_instances that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coupon_instancesFindFirstOrThrowArgs} args - Arguments to find a Coupon_instances
     * @example
     * // Get one Coupon_instances
     * const coupon_instances = await prisma.coupon_instances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends coupon_instancesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, coupon_instancesFindFirstOrThrowArgs>
    ): Prisma__coupon_instancesClient<coupon_instancesGetPayload<T>>

    /**
     * Find zero or more Coupon_instances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coupon_instancesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupon_instances
     * const coupon_instances = await prisma.coupon_instances.findMany()
     * 
     * // Get first 10 Coupon_instances
     * const coupon_instances = await prisma.coupon_instances.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coupon_instancesWithIdOnly = await prisma.coupon_instances.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends coupon_instancesFindManyArgs>(
      args?: SelectSubset<T, coupon_instancesFindManyArgs>
    ): PrismaPromise<Array<coupon_instancesGetPayload<T>>>

    /**
     * Create a Coupon_instances.
     * @param {coupon_instancesCreateArgs} args - Arguments to create a Coupon_instances.
     * @example
     * // Create one Coupon_instances
     * const Coupon_instances = await prisma.coupon_instances.create({
     *   data: {
     *     // ... data to create a Coupon_instances
     *   }
     * })
     * 
    **/
    create<T extends coupon_instancesCreateArgs>(
      args: SelectSubset<T, coupon_instancesCreateArgs>
    ): Prisma__coupon_instancesClient<coupon_instancesGetPayload<T>>

    /**
     * Create many Coupon_instances.
     *     @param {coupon_instancesCreateManyArgs} args - Arguments to create many Coupon_instances.
     *     @example
     *     // Create many Coupon_instances
     *     const coupon_instances = await prisma.coupon_instances.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends coupon_instancesCreateManyArgs>(
      args?: SelectSubset<T, coupon_instancesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Coupon_instances.
     * @param {coupon_instancesDeleteArgs} args - Arguments to delete one Coupon_instances.
     * @example
     * // Delete one Coupon_instances
     * const Coupon_instances = await prisma.coupon_instances.delete({
     *   where: {
     *     // ... filter to delete one Coupon_instances
     *   }
     * })
     * 
    **/
    delete<T extends coupon_instancesDeleteArgs>(
      args: SelectSubset<T, coupon_instancesDeleteArgs>
    ): Prisma__coupon_instancesClient<coupon_instancesGetPayload<T>>

    /**
     * Update one Coupon_instances.
     * @param {coupon_instancesUpdateArgs} args - Arguments to update one Coupon_instances.
     * @example
     * // Update one Coupon_instances
     * const coupon_instances = await prisma.coupon_instances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends coupon_instancesUpdateArgs>(
      args: SelectSubset<T, coupon_instancesUpdateArgs>
    ): Prisma__coupon_instancesClient<coupon_instancesGetPayload<T>>

    /**
     * Delete zero or more Coupon_instances.
     * @param {coupon_instancesDeleteManyArgs} args - Arguments to filter Coupon_instances to delete.
     * @example
     * // Delete a few Coupon_instances
     * const { count } = await prisma.coupon_instances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends coupon_instancesDeleteManyArgs>(
      args?: SelectSubset<T, coupon_instancesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupon_instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coupon_instancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupon_instances
     * const coupon_instances = await prisma.coupon_instances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends coupon_instancesUpdateManyArgs>(
      args: SelectSubset<T, coupon_instancesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon_instances.
     * @param {coupon_instancesUpsertArgs} args - Arguments to update or create a Coupon_instances.
     * @example
     * // Update or create a Coupon_instances
     * const coupon_instances = await prisma.coupon_instances.upsert({
     *   create: {
     *     // ... data to create a Coupon_instances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon_instances we want to update
     *   }
     * })
    **/
    upsert<T extends coupon_instancesUpsertArgs>(
      args: SelectSubset<T, coupon_instancesUpsertArgs>
    ): Prisma__coupon_instancesClient<coupon_instancesGetPayload<T>>

    /**
     * Count the number of Coupon_instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coupon_instancesCountArgs} args - Arguments to filter Coupon_instances to count.
     * @example
     * // Count the number of Coupon_instances
     * const count = await prisma.coupon_instances.count({
     *   where: {
     *     // ... the filter for the Coupon_instances we want to count
     *   }
     * })
    **/
    count<T extends coupon_instancesCountArgs>(
      args?: Subset<T, coupon_instancesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Coupon_instancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon_instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coupon_instancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Coupon_instancesAggregateArgs>(args: Subset<T, Coupon_instancesAggregateArgs>): PrismaPromise<GetCoupon_instancesAggregateType<T>>

    /**
     * Group by Coupon_instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coupon_instancesGroupByArgs} args - Group by arguments.
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
      T extends Coupon_instancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Coupon_instancesGroupByArgs['orderBy'] }
        : { orderBy?: Coupon_instancesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Coupon_instancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoupon_instancesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for coupon_instances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__coupon_instancesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coupon<T extends couponsArgs= {}>(args?: Subset<T, couponsArgs>): Prisma__couponsClient<couponsGetPayload<T> | Null>;

    customer<T extends customersArgs= {}>(args?: Subset<T, customersArgs>): Prisma__customersClient<customersGetPayload<T> | Null>;

    redemptions<T extends coupon_instancesRedemptionsArgs= {}>(args?: Subset<T, coupon_instancesRedemptionsArgs>): PrismaPromise<Array<redemptionsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * coupon_instances base type for findUnique actions
   */
  export type coupon_instancesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    /**
     * Filter, which coupon_instances to fetch.
     * 
    **/
    where: coupon_instancesWhereUniqueInput
  }

  /**
   * coupon_instances findUnique
   */
  export interface coupon_instancesFindUniqueArgs extends coupon_instancesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * coupon_instances findUniqueOrThrow
   */
  export type coupon_instancesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    /**
     * Filter, which coupon_instances to fetch.
     * 
    **/
    where: coupon_instancesWhereUniqueInput
  }


  /**
   * coupon_instances base type for findFirst actions
   */
  export type coupon_instancesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    /**
     * Filter, which coupon_instances to fetch.
     * 
    **/
    where?: coupon_instancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupon_instances to fetch.
     * 
    **/
    orderBy?: Enumerable<coupon_instancesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coupon_instances.
     * 
    **/
    cursor?: coupon_instancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupon_instances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupon_instances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coupon_instances.
     * 
    **/
    distinct?: Enumerable<Coupon_instancesScalarFieldEnum>
  }

  /**
   * coupon_instances findFirst
   */
  export interface coupon_instancesFindFirstArgs extends coupon_instancesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * coupon_instances findFirstOrThrow
   */
  export type coupon_instancesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    /**
     * Filter, which coupon_instances to fetch.
     * 
    **/
    where?: coupon_instancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupon_instances to fetch.
     * 
    **/
    orderBy?: Enumerable<coupon_instancesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coupon_instances.
     * 
    **/
    cursor?: coupon_instancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupon_instances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupon_instances.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coupon_instances.
     * 
    **/
    distinct?: Enumerable<Coupon_instancesScalarFieldEnum>
  }


  /**
   * coupon_instances findMany
   */
  export type coupon_instancesFindManyArgs = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    /**
     * Filter, which coupon_instances to fetch.
     * 
    **/
    where?: coupon_instancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupon_instances to fetch.
     * 
    **/
    orderBy?: Enumerable<coupon_instancesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing coupon_instances.
     * 
    **/
    cursor?: coupon_instancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupon_instances from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupon_instances.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Coupon_instancesScalarFieldEnum>
  }


  /**
   * coupon_instances create
   */
  export type coupon_instancesCreateArgs = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    /**
     * The data needed to create a coupon_instances.
     * 
    **/
    data: XOR<coupon_instancesCreateInput, coupon_instancesUncheckedCreateInput>
  }


  /**
   * coupon_instances createMany
   */
  export type coupon_instancesCreateManyArgs = {
    /**
     * The data used to create many coupon_instances.
     * 
    **/
    data: Enumerable<coupon_instancesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * coupon_instances update
   */
  export type coupon_instancesUpdateArgs = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    /**
     * The data needed to update a coupon_instances.
     * 
    **/
    data: XOR<coupon_instancesUpdateInput, coupon_instancesUncheckedUpdateInput>
    /**
     * Choose, which coupon_instances to update.
     * 
    **/
    where: coupon_instancesWhereUniqueInput
  }


  /**
   * coupon_instances updateMany
   */
  export type coupon_instancesUpdateManyArgs = {
    /**
     * The data used to update coupon_instances.
     * 
    **/
    data: XOR<coupon_instancesUpdateManyMutationInput, coupon_instancesUncheckedUpdateManyInput>
    /**
     * Filter which coupon_instances to update
     * 
    **/
    where?: coupon_instancesWhereInput
  }


  /**
   * coupon_instances upsert
   */
  export type coupon_instancesUpsertArgs = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    /**
     * The filter to search for the coupon_instances to update in case it exists.
     * 
    **/
    where: coupon_instancesWhereUniqueInput
    /**
     * In case the coupon_instances found by the `where` argument doesn't exist, create a new coupon_instances with this data.
     * 
    **/
    create: XOR<coupon_instancesCreateInput, coupon_instancesUncheckedCreateInput>
    /**
     * In case the coupon_instances was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<coupon_instancesUpdateInput, coupon_instancesUncheckedUpdateInput>
  }


  /**
   * coupon_instances delete
   */
  export type coupon_instancesDeleteArgs = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    /**
     * Filter which coupon_instances to delete.
     * 
    **/
    where: coupon_instancesWhereUniqueInput
  }


  /**
   * coupon_instances deleteMany
   */
  export type coupon_instancesDeleteManyArgs = {
    /**
     * Filter which coupon_instances to delete
     * 
    **/
    where?: coupon_instancesWhereInput
  }


  /**
   * coupon_instances.redemptions
   */
  export type coupon_instancesRedemptionsArgs = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
    where?: redemptionsWhereInput
    orderBy?: Enumerable<redemptionsOrderByWithRelationInput>
    cursor?: redemptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RedemptionsScalarFieldEnum>
  }


  /**
   * coupon_instances without action
   */
  export type coupon_instancesArgs = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
  }



  /**
   * Model coupons
   */


  export type AggregateCoupons = {
    _count: CouponsCountAggregateOutputType | null
    _avg: CouponsAvgAggregateOutputType | null
    _sum: CouponsSumAggregateOutputType | null
    _min: CouponsMinAggregateOutputType | null
    _max: CouponsMaxAggregateOutputType | null
  }

  export type CouponsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CouponsSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type CouponsMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    title: string | null
    description: string | null
    image_url: string | null
    user_id: bigint | null
    expires_at: Date | null
  }

  export type CouponsMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    title: string | null
    description: string | null
    image_url: string | null
    user_id: bigint | null
    expires_at: Date | null
  }

  export type CouponsCountAggregateOutputType = {
    id: number
    created_at: number
    title: number
    description: number
    image_url: number
    user_id: number
    expires_at: number
    _all: number
  }


  export type CouponsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CouponsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CouponsMinAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    image_url?: true
    user_id?: true
    expires_at?: true
  }

  export type CouponsMaxAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    image_url?: true
    user_id?: true
    expires_at?: true
  }

  export type CouponsCountAggregateInputType = {
    id?: true
    created_at?: true
    title?: true
    description?: true
    image_url?: true
    user_id?: true
    expires_at?: true
    _all?: true
  }

  export type CouponsAggregateArgs = {
    /**
     * Filter which coupons to aggregate.
     * 
    **/
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<couponsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned coupons
    **/
    _count?: true | CouponsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponsMaxAggregateInputType
  }

  export type GetCouponsAggregateType<T extends CouponsAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupons[P]>
      : GetScalarType<T[P], AggregateCoupons[P]>
  }




  export type CouponsGroupByArgs = {
    where?: couponsWhereInput
    orderBy?: Enumerable<couponsOrderByWithAggregationInput>
    by: Array<CouponsScalarFieldEnum>
    having?: couponsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponsCountAggregateInputType | true
    _avg?: CouponsAvgAggregateInputType
    _sum?: CouponsSumAggregateInputType
    _min?: CouponsMinAggregateInputType
    _max?: CouponsMaxAggregateInputType
  }


  export type CouponsGroupByOutputType = {
    id: bigint
    created_at: Date | null
    title: string | null
    description: string | null
    image_url: string | null
    user_id: bigint
    expires_at: Date | null
    _count: CouponsCountAggregateOutputType | null
    _avg: CouponsAvgAggregateOutputType | null
    _sum: CouponsSumAggregateOutputType | null
    _min: CouponsMinAggregateOutputType | null
    _max: CouponsMaxAggregateOutputType | null
  }

  type GetCouponsGroupByPayload<T extends CouponsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CouponsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponsGroupByOutputType[P]>
            : GetScalarType<T[P], CouponsGroupByOutputType[P]>
        }
      >
    >


  export type couponsSelect = {
    id?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    user_id?: boolean
    expires_at?: boolean
    coupon_instances?: boolean | couponsCoupon_instancesArgs
    user?: boolean | usersArgs
    _count?: boolean | CouponsCountOutputTypeArgs
  }


  export type couponsInclude = {
    coupon_instances?: boolean | couponsCoupon_instancesArgs
    user?: boolean | usersArgs
    _count?: boolean | CouponsCountOutputTypeArgs
  } 

  export type couponsGetPayload<S extends boolean | null | undefined | couponsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? coupons :
    S extends undefined ? never :
    S extends { include: any } & (couponsArgs | couponsFindManyArgs)
    ? coupons  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coupon_instances' ? Array < coupon_instancesGetPayload<S['include'][P]>>  :
        P extends 'user' ? usersGetPayload<S['include'][P]> :
        P extends '_count' ? CouponsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (couponsArgs | couponsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coupon_instances' ? Array < coupon_instancesGetPayload<S['select'][P]>>  :
        P extends 'user' ? usersGetPayload<S['select'][P]> :
        P extends '_count' ? CouponsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof coupons ? coupons[P] : never
  } 
      : coupons


  type couponsCountArgs = Merge<
    Omit<couponsFindManyArgs, 'select' | 'include'> & {
      select?: CouponsCountAggregateInputType | true
    }
  >

  export interface couponsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Coupons that matches the filter.
     * @param {couponsFindUniqueArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends couponsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, couponsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'coupons'> extends True ? Prisma__couponsClient<couponsGetPayload<T>> : Prisma__couponsClient<couponsGetPayload<T> | null, null>

    /**
     * Find one Coupons that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {couponsFindUniqueOrThrowArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends couponsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, couponsFindUniqueOrThrowArgs>
    ): Prisma__couponsClient<couponsGetPayload<T>>

    /**
     * Find the first Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsFindFirstArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends couponsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, couponsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'coupons'> extends True ? Prisma__couponsClient<couponsGetPayload<T>> : Prisma__couponsClient<couponsGetPayload<T> | null, null>

    /**
     * Find the first Coupons that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsFindFirstOrThrowArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends couponsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, couponsFindFirstOrThrowArgs>
    ): Prisma__couponsClient<couponsGetPayload<T>>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupons.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponsWithIdOnly = await prisma.coupons.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends couponsFindManyArgs>(
      args?: SelectSubset<T, couponsFindManyArgs>
    ): PrismaPromise<Array<couponsGetPayload<T>>>

    /**
     * Create a Coupons.
     * @param {couponsCreateArgs} args - Arguments to create a Coupons.
     * @example
     * // Create one Coupons
     * const Coupons = await prisma.coupons.create({
     *   data: {
     *     // ... data to create a Coupons
     *   }
     * })
     * 
    **/
    create<T extends couponsCreateArgs>(
      args: SelectSubset<T, couponsCreateArgs>
    ): Prisma__couponsClient<couponsGetPayload<T>>

    /**
     * Create many Coupons.
     *     @param {couponsCreateManyArgs} args - Arguments to create many Coupons.
     *     @example
     *     // Create many Coupons
     *     const coupons = await prisma.coupons.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends couponsCreateManyArgs>(
      args?: SelectSubset<T, couponsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Coupons.
     * @param {couponsDeleteArgs} args - Arguments to delete one Coupons.
     * @example
     * // Delete one Coupons
     * const Coupons = await prisma.coupons.delete({
     *   where: {
     *     // ... filter to delete one Coupons
     *   }
     * })
     * 
    **/
    delete<T extends couponsDeleteArgs>(
      args: SelectSubset<T, couponsDeleteArgs>
    ): Prisma__couponsClient<couponsGetPayload<T>>

    /**
     * Update one Coupons.
     * @param {couponsUpdateArgs} args - Arguments to update one Coupons.
     * @example
     * // Update one Coupons
     * const coupons = await prisma.coupons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends couponsUpdateArgs>(
      args: SelectSubset<T, couponsUpdateArgs>
    ): Prisma__couponsClient<couponsGetPayload<T>>

    /**
     * Delete zero or more Coupons.
     * @param {couponsDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends couponsDeleteManyArgs>(
      args?: SelectSubset<T, couponsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupons = await prisma.coupons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends couponsUpdateManyArgs>(
      args: SelectSubset<T, couponsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupons.
     * @param {couponsUpsertArgs} args - Arguments to update or create a Coupons.
     * @example
     * // Update or create a Coupons
     * const coupons = await prisma.coupons.upsert({
     *   create: {
     *     // ... data to create a Coupons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupons we want to update
     *   }
     * })
    **/
    upsert<T extends couponsUpsertArgs>(
      args: SelectSubset<T, couponsUpsertArgs>
    ): Prisma__couponsClient<couponsGetPayload<T>>

    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponsCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupons.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends couponsCountArgs>(
      args?: Subset<T, couponsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponsAggregateArgs>(args: Subset<T, CouponsAggregateArgs>): PrismaPromise<GetCouponsAggregateType<T>>

    /**
     * Group by Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsGroupByArgs} args - Group by arguments.
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
      T extends CouponsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponsGroupByArgs['orderBy'] }
        : { orderBy?: CouponsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CouponsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for coupons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__couponsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coupon_instances<T extends couponsCoupon_instancesArgs= {}>(args?: Subset<T, couponsCoupon_instancesArgs>): PrismaPromise<Array<coupon_instancesGetPayload<T>>| Null>;

    user<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * coupons base type for findUnique actions
   */
  export type couponsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
    /**
     * Filter, which coupons to fetch.
     * 
    **/
    where: couponsWhereUniqueInput
  }

  /**
   * coupons findUnique
   */
  export interface couponsFindUniqueArgs extends couponsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * coupons findUniqueOrThrow
   */
  export type couponsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
    /**
     * Filter, which coupons to fetch.
     * 
    **/
    where: couponsWhereUniqueInput
  }


  /**
   * coupons base type for findFirst actions
   */
  export type couponsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
    /**
     * Filter, which coupons to fetch.
     * 
    **/
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<couponsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coupons.
     * 
    **/
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coupons.
     * 
    **/
    distinct?: Enumerable<CouponsScalarFieldEnum>
  }

  /**
   * coupons findFirst
   */
  export interface couponsFindFirstArgs extends couponsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * coupons findFirstOrThrow
   */
  export type couponsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
    /**
     * Filter, which coupons to fetch.
     * 
    **/
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<couponsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coupons.
     * 
    **/
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coupons.
     * 
    **/
    distinct?: Enumerable<CouponsScalarFieldEnum>
  }


  /**
   * coupons findMany
   */
  export type couponsFindManyArgs = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
    /**
     * Filter, which coupons to fetch.
     * 
    **/
    where?: couponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<couponsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing coupons.
     * 
    **/
    cursor?: couponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CouponsScalarFieldEnum>
  }


  /**
   * coupons create
   */
  export type couponsCreateArgs = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
    /**
     * The data needed to create a coupons.
     * 
    **/
    data: XOR<couponsCreateInput, couponsUncheckedCreateInput>
  }


  /**
   * coupons createMany
   */
  export type couponsCreateManyArgs = {
    /**
     * The data used to create many coupons.
     * 
    **/
    data: Enumerable<couponsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * coupons update
   */
  export type couponsUpdateArgs = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
    /**
     * The data needed to update a coupons.
     * 
    **/
    data: XOR<couponsUpdateInput, couponsUncheckedUpdateInput>
    /**
     * Choose, which coupons to update.
     * 
    **/
    where: couponsWhereUniqueInput
  }


  /**
   * coupons updateMany
   */
  export type couponsUpdateManyArgs = {
    /**
     * The data used to update coupons.
     * 
    **/
    data: XOR<couponsUpdateManyMutationInput, couponsUncheckedUpdateManyInput>
    /**
     * Filter which coupons to update
     * 
    **/
    where?: couponsWhereInput
  }


  /**
   * coupons upsert
   */
  export type couponsUpsertArgs = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
    /**
     * The filter to search for the coupons to update in case it exists.
     * 
    **/
    where: couponsWhereUniqueInput
    /**
     * In case the coupons found by the `where` argument doesn't exist, create a new coupons with this data.
     * 
    **/
    create: XOR<couponsCreateInput, couponsUncheckedCreateInput>
    /**
     * In case the coupons was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<couponsUpdateInput, couponsUncheckedUpdateInput>
  }


  /**
   * coupons delete
   */
  export type couponsDeleteArgs = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
    /**
     * Filter which coupons to delete.
     * 
    **/
    where: couponsWhereUniqueInput
  }


  /**
   * coupons deleteMany
   */
  export type couponsDeleteManyArgs = {
    /**
     * Filter which coupons to delete
     * 
    **/
    where?: couponsWhereInput
  }


  /**
   * coupons.coupon_instances
   */
  export type couponsCoupon_instancesArgs = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    where?: coupon_instancesWhereInput
    orderBy?: Enumerable<coupon_instancesOrderByWithRelationInput>
    cursor?: coupon_instancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Coupon_instancesScalarFieldEnum>
  }


  /**
   * coupons without action
   */
  export type couponsArgs = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
  }



  /**
   * Model customers
   */


  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    id: bigint | null
  }

  export type CustomersMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    created_at: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    created_at: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    email: number
    created_at: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    id?: true
  }

  export type CustomersSumAggregateInputType = {
    id?: true
  }

  export type CustomersMinAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    _all?: true
  }

  export type CustomersAggregateArgs = {
    /**
     * Filter which customers to aggregate.
     * 
    **/
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     * 
    **/
    orderBy?: Enumerable<customersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type CustomersGroupByArgs = {
    where?: customersWhereInput
    orderBy?: Enumerable<customersOrderByWithAggregationInput>
    by: Array<CustomersScalarFieldEnum>
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }


  export type CustomersGroupByOutputType = {
    id: bigint
    email: string | null
    created_at: Date | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends CustomersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect = {
    id?: boolean
    email?: boolean
    created_at?: boolean
    coupon_instances?: boolean | customersCoupon_instancesArgs
    _count?: boolean | CustomersCountOutputTypeArgs
  }


  export type customersInclude = {
    coupon_instances?: boolean | customersCoupon_instancesArgs
    _count?: boolean | CustomersCountOutputTypeArgs
  } 

  export type customersGetPayload<S extends boolean | null | undefined | customersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? customers :
    S extends undefined ? never :
    S extends { include: any } & (customersArgs | customersFindManyArgs)
    ? customers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coupon_instances' ? Array < coupon_instancesGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (customersArgs | customersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coupon_instances' ? Array < coupon_instancesGetPayload<S['select'][P]>>  :
        P extends '_count' ? CustomersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof customers ? customers[P] : never
  } 
      : customers


  type customersCountArgs = Merge<
    Omit<customersFindManyArgs, 'select' | 'include'> & {
      select?: CustomersCountAggregateInputType | true
    }
  >

  export interface customersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends customersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, customersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'customers'> extends True ? Prisma__customersClient<customersGetPayload<T>> : Prisma__customersClient<customersGetPayload<T> | null, null>

    /**
     * Find one Customers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, customersFindUniqueOrThrowArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends customersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, customersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'customers'> extends True ? Prisma__customersClient<customersGetPayload<T>> : Prisma__customersClient<customersGetPayload<T> | null, null>

    /**
     * Find the first Customers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, customersFindFirstOrThrowArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends customersFindManyArgs>(
      args?: SelectSubset<T, customersFindManyArgs>
    ): PrismaPromise<Array<customersGetPayload<T>>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
    **/
    create<T extends customersCreateArgs>(
      args: SelectSubset<T, customersCreateArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Create many Customers.
     *     @param {customersCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customers = await prisma.customers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends customersCreateManyArgs>(
      args?: SelectSubset<T, customersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
    **/
    delete<T extends customersDeleteArgs>(
      args: SelectSubset<T, customersDeleteArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends customersUpdateArgs>(
      args: SelectSubset<T, customersUpdateArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends customersDeleteManyArgs>(
      args?: SelectSubset<T, customersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends customersUpdateManyArgs>(
      args: SelectSubset<T, customersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
    **/
    upsert<T extends customersUpsertArgs>(
      args: SelectSubset<T, customersUpsertArgs>
    ): Prisma__customersClient<customersGetPayload<T>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersGroupByArgs} args - Group by arguments.
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
      T extends CustomersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomersGroupByArgs['orderBy'] }
        : { orderBy?: CustomersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__customersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coupon_instances<T extends customersCoupon_instancesArgs= {}>(args?: Subset<T, customersCoupon_instancesArgs>): PrismaPromise<Array<coupon_instancesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * customers base type for findUnique actions
   */
  export type customersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     * 
    **/
    where: customersWhereUniqueInput
  }

  /**
   * customers findUnique
   */
  export interface customersFindUniqueArgs extends customersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     * 
    **/
    where: customersWhereUniqueInput
  }


  /**
   * customers base type for findFirst actions
   */
  export type customersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     * 
    **/
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     * 
    **/
    orderBy?: Enumerable<customersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     * 
    **/
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     * 
    **/
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }

  /**
   * customers findFirst
   */
  export interface customersFindFirstArgs extends customersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     * 
    **/
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     * 
    **/
    orderBy?: Enumerable<customersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     * 
    **/
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     * 
    **/
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }


  /**
   * customers findMany
   */
  export type customersFindManyArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * Filter, which customers to fetch.
     * 
    **/
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     * 
    **/
    orderBy?: Enumerable<customersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     * 
    **/
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }


  /**
   * customers create
   */
  export type customersCreateArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * The data needed to create a customers.
     * 
    **/
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }


  /**
   * customers createMany
   */
  export type customersCreateManyArgs = {
    /**
     * The data used to create many customers.
     * 
    **/
    data: Enumerable<customersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * customers update
   */
  export type customersUpdateArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * The data needed to update a customers.
     * 
    **/
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     * 
    **/
    where: customersWhereUniqueInput
  }


  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs = {
    /**
     * The data used to update customers.
     * 
    **/
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     * 
    **/
    where?: customersWhereInput
  }


  /**
   * customers upsert
   */
  export type customersUpsertArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * The filter to search for the customers to update in case it exists.
     * 
    **/
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     * 
    **/
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }


  /**
   * customers delete
   */
  export type customersDeleteArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
    /**
     * Filter which customers to delete.
     * 
    **/
    where: customersWhereUniqueInput
  }


  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs = {
    /**
     * Filter which customers to delete
     * 
    **/
    where?: customersWhereInput
  }


  /**
   * customers.coupon_instances
   */
  export type customersCoupon_instancesArgs = {
    /**
     * Select specific fields to fetch from the coupon_instances
     * 
    **/
    select?: coupon_instancesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coupon_instancesInclude | null
    where?: coupon_instancesWhereInput
    orderBy?: Enumerable<coupon_instancesOrderByWithRelationInput>
    cursor?: coupon_instancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Coupon_instancesScalarFieldEnum>
  }


  /**
   * customers without action
   */
  export type customersArgs = {
    /**
     * Select specific fields to fetch from the customers
     * 
    **/
    select?: customersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: customersInclude | null
  }



  /**
   * Model redemptions
   */


  export type AggregateRedemptions = {
    _count: RedemptionsCountAggregateOutputType | null
    _avg: RedemptionsAvgAggregateOutputType | null
    _sum: RedemptionsSumAggregateOutputType | null
    _min: RedemptionsMinAggregateOutputType | null
    _max: RedemptionsMaxAggregateOutputType | null
  }

  export type RedemptionsAvgAggregateOutputType = {
    id: number | null
    revenue: Decimal | null
    coupon_instance_id: number | null
  }

  export type RedemptionsSumAggregateOutputType = {
    id: bigint | null
    revenue: Decimal | null
    coupon_instance_id: bigint | null
  }

  export type RedemptionsMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    revenue: Decimal | null
    currency: string | null
    coupon_instance_id: bigint | null
  }

  export type RedemptionsMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    revenue: Decimal | null
    currency: string | null
    coupon_instance_id: bigint | null
  }

  export type RedemptionsCountAggregateOutputType = {
    id: number
    created_at: number
    revenue: number
    currency: number
    coupon_instance_id: number
    _all: number
  }


  export type RedemptionsAvgAggregateInputType = {
    id?: true
    revenue?: true
    coupon_instance_id?: true
  }

  export type RedemptionsSumAggregateInputType = {
    id?: true
    revenue?: true
    coupon_instance_id?: true
  }

  export type RedemptionsMinAggregateInputType = {
    id?: true
    created_at?: true
    revenue?: true
    currency?: true
    coupon_instance_id?: true
  }

  export type RedemptionsMaxAggregateInputType = {
    id?: true
    created_at?: true
    revenue?: true
    currency?: true
    coupon_instance_id?: true
  }

  export type RedemptionsCountAggregateInputType = {
    id?: true
    created_at?: true
    revenue?: true
    currency?: true
    coupon_instance_id?: true
    _all?: true
  }

  export type RedemptionsAggregateArgs = {
    /**
     * Filter which redemptions to aggregate.
     * 
    **/
    where?: redemptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemptions to fetch.
     * 
    **/
    orderBy?: Enumerable<redemptionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: redemptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned redemptions
    **/
    _count?: true | RedemptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RedemptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RedemptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RedemptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RedemptionsMaxAggregateInputType
  }

  export type GetRedemptionsAggregateType<T extends RedemptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRedemptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedemptions[P]>
      : GetScalarType<T[P], AggregateRedemptions[P]>
  }




  export type RedemptionsGroupByArgs = {
    where?: redemptionsWhereInput
    orderBy?: Enumerable<redemptionsOrderByWithAggregationInput>
    by: Array<RedemptionsScalarFieldEnum>
    having?: redemptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RedemptionsCountAggregateInputType | true
    _avg?: RedemptionsAvgAggregateInputType
    _sum?: RedemptionsSumAggregateInputType
    _min?: RedemptionsMinAggregateInputType
    _max?: RedemptionsMaxAggregateInputType
  }


  export type RedemptionsGroupByOutputType = {
    id: bigint
    created_at: Date | null
    revenue: Decimal | null
    currency: string | null
    coupon_instance_id: bigint
    _count: RedemptionsCountAggregateOutputType | null
    _avg: RedemptionsAvgAggregateOutputType | null
    _sum: RedemptionsSumAggregateOutputType | null
    _min: RedemptionsMinAggregateOutputType | null
    _max: RedemptionsMaxAggregateOutputType | null
  }

  type GetRedemptionsGroupByPayload<T extends RedemptionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RedemptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RedemptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RedemptionsGroupByOutputType[P]>
            : GetScalarType<T[P], RedemptionsGroupByOutputType[P]>
        }
      >
    >


  export type redemptionsSelect = {
    id?: boolean
    created_at?: boolean
    revenue?: boolean
    currency?: boolean
    coupon_instance_id?: boolean
    coupon_instance?: boolean | coupon_instancesArgs
  }


  export type redemptionsInclude = {
    coupon_instance?: boolean | coupon_instancesArgs
  } 

  export type redemptionsGetPayload<S extends boolean | null | undefined | redemptionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? redemptions :
    S extends undefined ? never :
    S extends { include: any } & (redemptionsArgs | redemptionsFindManyArgs)
    ? redemptions  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coupon_instance' ? coupon_instancesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (redemptionsArgs | redemptionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coupon_instance' ? coupon_instancesGetPayload<S['select'][P]> :  P extends keyof redemptions ? redemptions[P] : never
  } 
      : redemptions


  type redemptionsCountArgs = Merge<
    Omit<redemptionsFindManyArgs, 'select' | 'include'> & {
      select?: RedemptionsCountAggregateInputType | true
    }
  >

  export interface redemptionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Redemptions that matches the filter.
     * @param {redemptionsFindUniqueArgs} args - Arguments to find a Redemptions
     * @example
     * // Get one Redemptions
     * const redemptions = await prisma.redemptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends redemptionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, redemptionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'redemptions'> extends True ? Prisma__redemptionsClient<redemptionsGetPayload<T>> : Prisma__redemptionsClient<redemptionsGetPayload<T> | null, null>

    /**
     * Find one Redemptions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {redemptionsFindUniqueOrThrowArgs} args - Arguments to find a Redemptions
     * @example
     * // Get one Redemptions
     * const redemptions = await prisma.redemptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends redemptionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, redemptionsFindUniqueOrThrowArgs>
    ): Prisma__redemptionsClient<redemptionsGetPayload<T>>

    /**
     * Find the first Redemptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemptionsFindFirstArgs} args - Arguments to find a Redemptions
     * @example
     * // Get one Redemptions
     * const redemptions = await prisma.redemptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends redemptionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, redemptionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'redemptions'> extends True ? Prisma__redemptionsClient<redemptionsGetPayload<T>> : Prisma__redemptionsClient<redemptionsGetPayload<T> | null, null>

    /**
     * Find the first Redemptions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemptionsFindFirstOrThrowArgs} args - Arguments to find a Redemptions
     * @example
     * // Get one Redemptions
     * const redemptions = await prisma.redemptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends redemptionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, redemptionsFindFirstOrThrowArgs>
    ): Prisma__redemptionsClient<redemptionsGetPayload<T>>

    /**
     * Find zero or more Redemptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemptionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Redemptions
     * const redemptions = await prisma.redemptions.findMany()
     * 
     * // Get first 10 Redemptions
     * const redemptions = await prisma.redemptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redemptionsWithIdOnly = await prisma.redemptions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends redemptionsFindManyArgs>(
      args?: SelectSubset<T, redemptionsFindManyArgs>
    ): PrismaPromise<Array<redemptionsGetPayload<T>>>

    /**
     * Create a Redemptions.
     * @param {redemptionsCreateArgs} args - Arguments to create a Redemptions.
     * @example
     * // Create one Redemptions
     * const Redemptions = await prisma.redemptions.create({
     *   data: {
     *     // ... data to create a Redemptions
     *   }
     * })
     * 
    **/
    create<T extends redemptionsCreateArgs>(
      args: SelectSubset<T, redemptionsCreateArgs>
    ): Prisma__redemptionsClient<redemptionsGetPayload<T>>

    /**
     * Create many Redemptions.
     *     @param {redemptionsCreateManyArgs} args - Arguments to create many Redemptions.
     *     @example
     *     // Create many Redemptions
     *     const redemptions = await prisma.redemptions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends redemptionsCreateManyArgs>(
      args?: SelectSubset<T, redemptionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Redemptions.
     * @param {redemptionsDeleteArgs} args - Arguments to delete one Redemptions.
     * @example
     * // Delete one Redemptions
     * const Redemptions = await prisma.redemptions.delete({
     *   where: {
     *     // ... filter to delete one Redemptions
     *   }
     * })
     * 
    **/
    delete<T extends redemptionsDeleteArgs>(
      args: SelectSubset<T, redemptionsDeleteArgs>
    ): Prisma__redemptionsClient<redemptionsGetPayload<T>>

    /**
     * Update one Redemptions.
     * @param {redemptionsUpdateArgs} args - Arguments to update one Redemptions.
     * @example
     * // Update one Redemptions
     * const redemptions = await prisma.redemptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends redemptionsUpdateArgs>(
      args: SelectSubset<T, redemptionsUpdateArgs>
    ): Prisma__redemptionsClient<redemptionsGetPayload<T>>

    /**
     * Delete zero or more Redemptions.
     * @param {redemptionsDeleteManyArgs} args - Arguments to filter Redemptions to delete.
     * @example
     * // Delete a few Redemptions
     * const { count } = await prisma.redemptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends redemptionsDeleteManyArgs>(
      args?: SelectSubset<T, redemptionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Redemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Redemptions
     * const redemptions = await prisma.redemptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends redemptionsUpdateManyArgs>(
      args: SelectSubset<T, redemptionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Redemptions.
     * @param {redemptionsUpsertArgs} args - Arguments to update or create a Redemptions.
     * @example
     * // Update or create a Redemptions
     * const redemptions = await prisma.redemptions.upsert({
     *   create: {
     *     // ... data to create a Redemptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Redemptions we want to update
     *   }
     * })
    **/
    upsert<T extends redemptionsUpsertArgs>(
      args: SelectSubset<T, redemptionsUpsertArgs>
    ): Prisma__redemptionsClient<redemptionsGetPayload<T>>

    /**
     * Count the number of Redemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {redemptionsCountArgs} args - Arguments to filter Redemptions to count.
     * @example
     * // Count the number of Redemptions
     * const count = await prisma.redemptions.count({
     *   where: {
     *     // ... the filter for the Redemptions we want to count
     *   }
     * })
    **/
    count<T extends redemptionsCountArgs>(
      args?: Subset<T, redemptionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RedemptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Redemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RedemptionsAggregateArgs>(args: Subset<T, RedemptionsAggregateArgs>): PrismaPromise<GetRedemptionsAggregateType<T>>

    /**
     * Group by Redemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedemptionsGroupByArgs} args - Group by arguments.
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
      T extends RedemptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RedemptionsGroupByArgs['orderBy'] }
        : { orderBy?: RedemptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RedemptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedemptionsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for redemptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__redemptionsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coupon_instance<T extends coupon_instancesArgs= {}>(args?: Subset<T, coupon_instancesArgs>): Prisma__coupon_instancesClient<coupon_instancesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * redemptions base type for findUnique actions
   */
  export type redemptionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
    /**
     * Filter, which redemptions to fetch.
     * 
    **/
    where: redemptionsWhereUniqueInput
  }

  /**
   * redemptions findUnique
   */
  export interface redemptionsFindUniqueArgs extends redemptionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * redemptions findUniqueOrThrow
   */
  export type redemptionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
    /**
     * Filter, which redemptions to fetch.
     * 
    **/
    where: redemptionsWhereUniqueInput
  }


  /**
   * redemptions base type for findFirst actions
   */
  export type redemptionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
    /**
     * Filter, which redemptions to fetch.
     * 
    **/
    where?: redemptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemptions to fetch.
     * 
    **/
    orderBy?: Enumerable<redemptionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for redemptions.
     * 
    **/
    cursor?: redemptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of redemptions.
     * 
    **/
    distinct?: Enumerable<RedemptionsScalarFieldEnum>
  }

  /**
   * redemptions findFirst
   */
  export interface redemptionsFindFirstArgs extends redemptionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * redemptions findFirstOrThrow
   */
  export type redemptionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
    /**
     * Filter, which redemptions to fetch.
     * 
    **/
    where?: redemptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemptions to fetch.
     * 
    **/
    orderBy?: Enumerable<redemptionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for redemptions.
     * 
    **/
    cursor?: redemptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of redemptions.
     * 
    **/
    distinct?: Enumerable<RedemptionsScalarFieldEnum>
  }


  /**
   * redemptions findMany
   */
  export type redemptionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
    /**
     * Filter, which redemptions to fetch.
     * 
    **/
    where?: redemptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of redemptions to fetch.
     * 
    **/
    orderBy?: Enumerable<redemptionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing redemptions.
     * 
    **/
    cursor?: redemptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` redemptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` redemptions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RedemptionsScalarFieldEnum>
  }


  /**
   * redemptions create
   */
  export type redemptionsCreateArgs = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
    /**
     * The data needed to create a redemptions.
     * 
    **/
    data: XOR<redemptionsCreateInput, redemptionsUncheckedCreateInput>
  }


  /**
   * redemptions createMany
   */
  export type redemptionsCreateManyArgs = {
    /**
     * The data used to create many redemptions.
     * 
    **/
    data: Enumerable<redemptionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * redemptions update
   */
  export type redemptionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
    /**
     * The data needed to update a redemptions.
     * 
    **/
    data: XOR<redemptionsUpdateInput, redemptionsUncheckedUpdateInput>
    /**
     * Choose, which redemptions to update.
     * 
    **/
    where: redemptionsWhereUniqueInput
  }


  /**
   * redemptions updateMany
   */
  export type redemptionsUpdateManyArgs = {
    /**
     * The data used to update redemptions.
     * 
    **/
    data: XOR<redemptionsUpdateManyMutationInput, redemptionsUncheckedUpdateManyInput>
    /**
     * Filter which redemptions to update
     * 
    **/
    where?: redemptionsWhereInput
  }


  /**
   * redemptions upsert
   */
  export type redemptionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
    /**
     * The filter to search for the redemptions to update in case it exists.
     * 
    **/
    where: redemptionsWhereUniqueInput
    /**
     * In case the redemptions found by the `where` argument doesn't exist, create a new redemptions with this data.
     * 
    **/
    create: XOR<redemptionsCreateInput, redemptionsUncheckedCreateInput>
    /**
     * In case the redemptions was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<redemptionsUpdateInput, redemptionsUncheckedUpdateInput>
  }


  /**
   * redemptions delete
   */
  export type redemptionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
    /**
     * Filter which redemptions to delete.
     * 
    **/
    where: redemptionsWhereUniqueInput
  }


  /**
   * redemptions deleteMany
   */
  export type redemptionsDeleteManyArgs = {
    /**
     * Filter which redemptions to delete
     * 
    **/
    where?: redemptionsWhereInput
  }


  /**
   * redemptions without action
   */
  export type redemptionsArgs = {
    /**
     * Select specific fields to fetch from the redemptions
     * 
    **/
    select?: redemptionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: redemptionsInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    manager_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
    manager_id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    created_at: Date | null
    role: role | null
    password: string | null
    manager_id: bigint | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    created_at: Date | null
    role: role | null
    password: string | null
    manager_id: bigint | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    created_at: number
    role: number
    password: number
    manager_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    manager_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    manager_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    created_at?: true
    role?: true
    password?: true
    manager_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    created_at?: true
    role?: true
    password?: true
    manager_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    created_at?: true
    role?: true
    password?: true
    manager_id?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: bigint
    name: string | null
    email: string | null
    created_at: Date | null
    role: role | null
    password: string | null
    manager_id: bigint
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    created_at?: boolean
    role?: boolean
    password?: boolean
    manager_id?: boolean
    coupons?: boolean | usersCouponsArgs
    manager?: boolean | usersArgs
    staff?: boolean | usersStaffArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type usersInclude = {
    coupons?: boolean | usersCouponsArgs
    manager?: boolean | usersArgs
    staff?: boolean | usersStaffArgs
    _count?: boolean | UsersCountOutputTypeArgs
  } 

  export type usersGetPayload<S extends boolean | null | undefined | usersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? users :
    S extends undefined ? never :
    S extends { include: any } & (usersArgs | usersFindManyArgs)
    ? users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coupons' ? Array < couponsGetPayload<S['include'][P]>>  :
        P extends 'manager' ? usersGetPayload<S['include'][P]> :
        P extends 'staff' ? Array < usersGetPayload<S['include'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (usersArgs | usersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coupons' ? Array < couponsGetPayload<S['select'][P]>>  :
        P extends 'manager' ? usersGetPayload<S['select'][P]> :
        P extends 'staff' ? Array < usersGetPayload<S['select'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof users ? users[P] : never
  } 
      : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): PrismaPromise<Array<usersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coupons<T extends usersCouponsArgs= {}>(args?: Subset<T, usersCouponsArgs>): PrismaPromise<Array<couponsGetPayload<T>>| Null>;

    manager<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

    staff<T extends usersStaffArgs= {}>(args?: Subset<T, usersStaffArgs>): PrismaPromise<Array<usersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }

  /**
   * users findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     * 
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     * 
    **/
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to update a users.
     * 
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     * 
    **/
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
     * 
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     * 
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users.coupons
   */
  export type usersCouponsArgs = {
    /**
     * Select specific fields to fetch from the coupons
     * 
    **/
    select?: couponsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: couponsInclude | null
    where?: couponsWhereInput
    orderBy?: Enumerable<couponsOrderByWithRelationInput>
    cursor?: couponsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CouponsScalarFieldEnum>
  }


  /**
   * users.staff
   */
  export type usersStaffArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Coupon_instancesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    coupon_id: 'coupon_id',
    customer_id: 'customer_id'
  };

  export type Coupon_instancesScalarFieldEnum = (typeof Coupon_instancesScalarFieldEnum)[keyof typeof Coupon_instancesScalarFieldEnum]


  export const CouponsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    title: 'title',
    description: 'description',
    image_url: 'image_url',
    user_id: 'user_id',
    expires_at: 'expires_at'
  };

  export type CouponsScalarFieldEnum = (typeof CouponsScalarFieldEnum)[keyof typeof CouponsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    created_at: 'created_at'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RedemptionsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    revenue: 'revenue',
    currency: 'currency',
    coupon_instance_id: 'coupon_instance_id'
  };

  export type RedemptionsScalarFieldEnum = (typeof RedemptionsScalarFieldEnum)[keyof typeof RedemptionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    created_at: 'created_at',
    role: 'role',
    password: 'password',
    manager_id: 'manager_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type coupon_instancesWhereInput = {
    AND?: Enumerable<coupon_instancesWhereInput>
    OR?: Enumerable<coupon_instancesWhereInput>
    NOT?: Enumerable<coupon_instancesWhereInput>
    id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    coupon_id?: BigIntFilter | bigint | number
    customer_id?: BigIntFilter | bigint | number
    coupon?: XOR<CouponsRelationFilter, couponsWhereInput>
    customer?: XOR<CustomersRelationFilter, customersWhereInput>
    redemptions?: RedemptionsListRelationFilter
  }

  export type coupon_instancesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    coupon_id?: SortOrder
    customer_id?: SortOrder
    coupon?: couponsOrderByWithRelationInput
    customer?: customersOrderByWithRelationInput
    redemptions?: redemptionsOrderByRelationAggregateInput
  }

  export type coupon_instancesWhereUniqueInput = {
    id?: bigint | number
  }

  export type coupon_instancesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    coupon_id?: SortOrder
    customer_id?: SortOrder
    _count?: coupon_instancesCountOrderByAggregateInput
    _avg?: coupon_instancesAvgOrderByAggregateInput
    _max?: coupon_instancesMaxOrderByAggregateInput
    _min?: coupon_instancesMinOrderByAggregateInput
    _sum?: coupon_instancesSumOrderByAggregateInput
  }

  export type coupon_instancesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<coupon_instancesScalarWhereWithAggregatesInput>
    OR?: Enumerable<coupon_instancesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<coupon_instancesScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    coupon_id?: BigIntWithAggregatesFilter | bigint | number
    customer_id?: BigIntWithAggregatesFilter | bigint | number
  }

  export type couponsWhereInput = {
    AND?: Enumerable<couponsWhereInput>
    OR?: Enumerable<couponsWhereInput>
    NOT?: Enumerable<couponsWhereInput>
    id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    image_url?: StringNullableFilter | string | null
    user_id?: BigIntFilter | bigint | number
    expires_at?: DateTimeNullableFilter | Date | string | null
    coupon_instances?: Coupon_instancesListRelationFilter
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type couponsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    coupon_instances?: coupon_instancesOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
  }

  export type couponsWhereUniqueInput = {
    id?: bigint | number
  }

  export type couponsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    _count?: couponsCountOrderByAggregateInput
    _avg?: couponsAvgOrderByAggregateInput
    _max?: couponsMaxOrderByAggregateInput
    _min?: couponsMinOrderByAggregateInput
    _sum?: couponsSumOrderByAggregateInput
  }

  export type couponsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<couponsScalarWhereWithAggregatesInput>
    OR?: Enumerable<couponsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<couponsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    title?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    image_url?: StringNullableWithAggregatesFilter | string | null
    user_id?: BigIntWithAggregatesFilter | bigint | number
    expires_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type customersWhereInput = {
    AND?: Enumerable<customersWhereInput>
    OR?: Enumerable<customersWhereInput>
    NOT?: Enumerable<customersWhereInput>
    id?: BigIntFilter | bigint | number
    email?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    coupon_instances?: Coupon_instancesListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    coupon_instances?: coupon_instancesOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = {
    id?: bigint | number
  }

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<customersScalarWhereWithAggregatesInput>
    OR?: Enumerable<customersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<customersScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    email?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type redemptionsWhereInput = {
    AND?: Enumerable<redemptionsWhereInput>
    OR?: Enumerable<redemptionsWhereInput>
    NOT?: Enumerable<redemptionsWhereInput>
    id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    revenue?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableFilter | string | null
    coupon_instance_id?: BigIntFilter | bigint | number
    coupon_instance?: XOR<Coupon_instancesRelationFilter, coupon_instancesWhereInput>
  }

  export type redemptionsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    revenue?: SortOrder
    currency?: SortOrder
    coupon_instance_id?: SortOrder
    coupon_instance?: coupon_instancesOrderByWithRelationInput
  }

  export type redemptionsWhereUniqueInput = {
    id?: bigint | number
  }

  export type redemptionsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    revenue?: SortOrder
    currency?: SortOrder
    coupon_instance_id?: SortOrder
    _count?: redemptionsCountOrderByAggregateInput
    _avg?: redemptionsAvgOrderByAggregateInput
    _max?: redemptionsMaxOrderByAggregateInput
    _min?: redemptionsMinOrderByAggregateInput
    _sum?: redemptionsSumOrderByAggregateInput
  }

  export type redemptionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<redemptionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<redemptionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<redemptionsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    revenue?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableWithAggregatesFilter | string | null
    coupon_instance_id?: BigIntWithAggregatesFilter | bigint | number
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    role?: EnumroleNullableFilter | role | null
    password?: StringNullableFilter | string | null
    manager_id?: BigIntFilter | bigint | number
    coupons?: CouponsListRelationFilter
    manager?: XOR<UsersRelationFilter, usersWhereInput>
    staff?: UsersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    password?: SortOrder
    manager_id?: SortOrder
    coupons?: couponsOrderByRelationAggregateInput
    manager?: usersOrderByWithRelationInput
    staff?: usersOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = {
    id?: bigint | number
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    password?: SortOrder
    manager_id?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    role?: EnumroleNullableWithAggregatesFilter | role | null
    password?: StringNullableWithAggregatesFilter | string | null
    manager_id?: BigIntWithAggregatesFilter | bigint | number
  }

  export type coupon_instancesCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    coupon?: couponsCreateNestedOneWithoutCoupon_instancesInput
    customer?: customersCreateNestedOneWithoutCoupon_instancesInput
    redemptions?: redemptionsCreateNestedManyWithoutCoupon_instanceInput
  }

  export type coupon_instancesUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    coupon_id?: bigint | number
    customer_id?: bigint | number
    redemptions?: redemptionsUncheckedCreateNestedManyWithoutCoupon_instanceInput
  }

  export type coupon_instancesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: couponsUpdateOneRequiredWithoutCoupon_instancesNestedInput
    customer?: customersUpdateOneRequiredWithoutCoupon_instancesNestedInput
    redemptions?: redemptionsUpdateManyWithoutCoupon_instanceNestedInput
  }

  export type coupon_instancesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    redemptions?: redemptionsUncheckedUpdateManyWithoutCoupon_instanceNestedInput
  }

  export type coupon_instancesCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string | null
    coupon_id?: bigint | number
    customer_id?: bigint | number
  }

  export type coupon_instancesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type coupon_instancesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type couponsCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    title?: string | null
    description?: string | null
    image_url?: string | null
    expires_at?: Date | string | null
    coupon_instances?: coupon_instancesCreateNestedManyWithoutCouponInput
    user?: usersCreateNestedOneWithoutCouponsInput
  }

  export type couponsUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    title?: string | null
    description?: string | null
    image_url?: string | null
    user_id?: bigint | number
    expires_at?: Date | string | null
    coupon_instances?: coupon_instancesUncheckedCreateNestedManyWithoutCouponInput
  }

  export type couponsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon_instances?: coupon_instancesUpdateManyWithoutCouponNestedInput
    user?: usersUpdateOneRequiredWithoutCouponsNestedInput
  }

  export type couponsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon_instances?: coupon_instancesUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type couponsCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string | null
    title?: string | null
    description?: string | null
    image_url?: string | null
    user_id?: bigint | number
    expires_at?: Date | string | null
  }

  export type couponsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type couponsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersCreateInput = {
    id?: bigint | number
    email?: string | null
    created_at?: Date | string | null
    coupon_instances?: coupon_instancesCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateInput = {
    id?: bigint | number
    email?: string | null
    created_at?: Date | string | null
    coupon_instances?: coupon_instancesUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon_instances?: coupon_instancesUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon_instances?: coupon_instancesUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customersCreateManyInput = {
    id?: bigint | number
    email?: string | null
    created_at?: Date | string | null
  }

  export type customersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type redemptionsCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    coupon_instance?: coupon_instancesCreateNestedOneWithoutRedemptionsInput
  }

  export type redemptionsUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    coupon_instance_id?: bigint | number
  }

  export type redemptionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    coupon_instance?: coupon_instancesUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type redemptionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    coupon_instance_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type redemptionsCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    coupon_instance_id?: bigint | number
  }

  export type redemptionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type redemptionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    coupon_instance_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type usersCreateInput = {
    id?: bigint | number
    name?: string | null
    email?: string | null
    created_at?: Date | string | null
    role?: role | null
    password?: string | null
    coupons?: couponsCreateNestedManyWithoutUserInput
    manager?: usersCreateNestedOneWithoutStaffInput
    staff?: usersCreateNestedManyWithoutManagerInput
  }

  export type usersUncheckedCreateInput = {
    id?: bigint | number
    name?: string | null
    email?: string | null
    created_at?: Date | string | null
    role?: role | null
    password?: string | null
    manager_id?: bigint | number
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    staff?: usersUncheckedCreateNestedManyWithoutManagerInput
  }

  export type usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    coupons?: couponsUpdateManyWithoutUserNestedInput
    manager?: usersUpdateOneRequiredWithoutStaffNestedInput
    staff?: usersUpdateManyWithoutManagerNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: BigIntFieldUpdateOperationsInput | bigint | number
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    staff?: usersUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type usersCreateManyInput = {
    id?: bigint | number
    name?: string | null
    email?: string | null
    created_at?: Date | string | null
    role?: role | null
    password?: string | null
    manager_id?: bigint | number
  }

  export type usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type CouponsRelationFilter = {
    is?: couponsWhereInput
    isNot?: couponsWhereInput
  }

  export type CustomersRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type RedemptionsListRelationFilter = {
    every?: redemptionsWhereInput
    some?: redemptionsWhereInput
    none?: redemptionsWhereInput
  }

  export type redemptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type coupon_instancesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    coupon_id?: SortOrder
    customer_id?: SortOrder
  }

  export type coupon_instancesAvgOrderByAggregateInput = {
    id?: SortOrder
    coupon_id?: SortOrder
    customer_id?: SortOrder
  }

  export type coupon_instancesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    coupon_id?: SortOrder
    customer_id?: SortOrder
  }

  export type coupon_instancesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    coupon_id?: SortOrder
    customer_id?: SortOrder
  }

  export type coupon_instancesSumOrderByAggregateInput = {
    id?: SortOrder
    coupon_id?: SortOrder
    customer_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type Coupon_instancesListRelationFilter = {
    every?: coupon_instancesWhereInput
    some?: coupon_instancesWhereInput
    none?: coupon_instancesWhereInput
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type coupon_instancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type couponsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
  }

  export type couponsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type couponsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
  }

  export type couponsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
  }

  export type couponsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type Coupon_instancesRelationFilter = {
    is?: coupon_instancesWhereInput
    isNot?: coupon_instancesWhereInput
  }

  export type redemptionsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    revenue?: SortOrder
    currency?: SortOrder
    coupon_instance_id?: SortOrder
  }

  export type redemptionsAvgOrderByAggregateInput = {
    id?: SortOrder
    revenue?: SortOrder
    coupon_instance_id?: SortOrder
  }

  export type redemptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    revenue?: SortOrder
    currency?: SortOrder
    coupon_instance_id?: SortOrder
  }

  export type redemptionsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    revenue?: SortOrder
    currency?: SortOrder
    coupon_instance_id?: SortOrder
  }

  export type redemptionsSumOrderByAggregateInput = {
    id?: SortOrder
    revenue?: SortOrder
    coupon_instance_id?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type EnumroleNullableFilter = {
    equals?: role | null
    in?: Enumerable<role> | null
    notIn?: Enumerable<role> | null
    not?: NestedEnumroleNullableFilter | role | null
  }

  export type CouponsListRelationFilter = {
    every?: couponsWhereInput
    some?: couponsWhereInput
    none?: couponsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type couponsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    password?: SortOrder
    manager_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    manager_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    password?: SortOrder
    manager_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    password?: SortOrder
    manager_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    manager_id?: SortOrder
  }

  export type EnumroleNullableWithAggregatesFilter = {
    equals?: role | null
    in?: Enumerable<role> | null
    notIn?: Enumerable<role> | null
    not?: NestedEnumroleNullableWithAggregatesFilter | role | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumroleNullableFilter
    _max?: NestedEnumroleNullableFilter
  }

  export type couponsCreateNestedOneWithoutCoupon_instancesInput = {
    create?: XOR<couponsCreateWithoutCoupon_instancesInput, couponsUncheckedCreateWithoutCoupon_instancesInput>
    connectOrCreate?: couponsCreateOrConnectWithoutCoupon_instancesInput
    connect?: couponsWhereUniqueInput
  }

  export type customersCreateNestedOneWithoutCoupon_instancesInput = {
    create?: XOR<customersCreateWithoutCoupon_instancesInput, customersUncheckedCreateWithoutCoupon_instancesInput>
    connectOrCreate?: customersCreateOrConnectWithoutCoupon_instancesInput
    connect?: customersWhereUniqueInput
  }

  export type redemptionsCreateNestedManyWithoutCoupon_instanceInput = {
    create?: XOR<Enumerable<redemptionsCreateWithoutCoupon_instanceInput>, Enumerable<redemptionsUncheckedCreateWithoutCoupon_instanceInput>>
    connectOrCreate?: Enumerable<redemptionsCreateOrConnectWithoutCoupon_instanceInput>
    createMany?: redemptionsCreateManyCoupon_instanceInputEnvelope
    connect?: Enumerable<redemptionsWhereUniqueInput>
  }

  export type redemptionsUncheckedCreateNestedManyWithoutCoupon_instanceInput = {
    create?: XOR<Enumerable<redemptionsCreateWithoutCoupon_instanceInput>, Enumerable<redemptionsUncheckedCreateWithoutCoupon_instanceInput>>
    connectOrCreate?: Enumerable<redemptionsCreateOrConnectWithoutCoupon_instanceInput>
    createMany?: redemptionsCreateManyCoupon_instanceInputEnvelope
    connect?: Enumerable<redemptionsWhereUniqueInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type couponsUpdateOneRequiredWithoutCoupon_instancesNestedInput = {
    create?: XOR<couponsCreateWithoutCoupon_instancesInput, couponsUncheckedCreateWithoutCoupon_instancesInput>
    connectOrCreate?: couponsCreateOrConnectWithoutCoupon_instancesInput
    upsert?: couponsUpsertWithoutCoupon_instancesInput
    connect?: couponsWhereUniqueInput
    update?: XOR<couponsUpdateWithoutCoupon_instancesInput, couponsUncheckedUpdateWithoutCoupon_instancesInput>
  }

  export type customersUpdateOneRequiredWithoutCoupon_instancesNestedInput = {
    create?: XOR<customersCreateWithoutCoupon_instancesInput, customersUncheckedCreateWithoutCoupon_instancesInput>
    connectOrCreate?: customersCreateOrConnectWithoutCoupon_instancesInput
    upsert?: customersUpsertWithoutCoupon_instancesInput
    connect?: customersWhereUniqueInput
    update?: XOR<customersUpdateWithoutCoupon_instancesInput, customersUncheckedUpdateWithoutCoupon_instancesInput>
  }

  export type redemptionsUpdateManyWithoutCoupon_instanceNestedInput = {
    create?: XOR<Enumerable<redemptionsCreateWithoutCoupon_instanceInput>, Enumerable<redemptionsUncheckedCreateWithoutCoupon_instanceInput>>
    connectOrCreate?: Enumerable<redemptionsCreateOrConnectWithoutCoupon_instanceInput>
    upsert?: Enumerable<redemptionsUpsertWithWhereUniqueWithoutCoupon_instanceInput>
    createMany?: redemptionsCreateManyCoupon_instanceInputEnvelope
    set?: Enumerable<redemptionsWhereUniqueInput>
    disconnect?: Enumerable<redemptionsWhereUniqueInput>
    delete?: Enumerable<redemptionsWhereUniqueInput>
    connect?: Enumerable<redemptionsWhereUniqueInput>
    update?: Enumerable<redemptionsUpdateWithWhereUniqueWithoutCoupon_instanceInput>
    updateMany?: Enumerable<redemptionsUpdateManyWithWhereWithoutCoupon_instanceInput>
    deleteMany?: Enumerable<redemptionsScalarWhereInput>
  }

  export type redemptionsUncheckedUpdateManyWithoutCoupon_instanceNestedInput = {
    create?: XOR<Enumerable<redemptionsCreateWithoutCoupon_instanceInput>, Enumerable<redemptionsUncheckedCreateWithoutCoupon_instanceInput>>
    connectOrCreate?: Enumerable<redemptionsCreateOrConnectWithoutCoupon_instanceInput>
    upsert?: Enumerable<redemptionsUpsertWithWhereUniqueWithoutCoupon_instanceInput>
    createMany?: redemptionsCreateManyCoupon_instanceInputEnvelope
    set?: Enumerable<redemptionsWhereUniqueInput>
    disconnect?: Enumerable<redemptionsWhereUniqueInput>
    delete?: Enumerable<redemptionsWhereUniqueInput>
    connect?: Enumerable<redemptionsWhereUniqueInput>
    update?: Enumerable<redemptionsUpdateWithWhereUniqueWithoutCoupon_instanceInput>
    updateMany?: Enumerable<redemptionsUpdateManyWithWhereWithoutCoupon_instanceInput>
    deleteMany?: Enumerable<redemptionsScalarWhereInput>
  }

  export type coupon_instancesCreateNestedManyWithoutCouponInput = {
    create?: XOR<Enumerable<coupon_instancesCreateWithoutCouponInput>, Enumerable<coupon_instancesUncheckedCreateWithoutCouponInput>>
    connectOrCreate?: Enumerable<coupon_instancesCreateOrConnectWithoutCouponInput>
    createMany?: coupon_instancesCreateManyCouponInputEnvelope
    connect?: Enumerable<coupon_instancesWhereUniqueInput>
  }

  export type usersCreateNestedOneWithoutCouponsInput = {
    create?: XOR<usersCreateWithoutCouponsInput, usersUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCouponsInput
    connect?: usersWhereUniqueInput
  }

  export type coupon_instancesUncheckedCreateNestedManyWithoutCouponInput = {
    create?: XOR<Enumerable<coupon_instancesCreateWithoutCouponInput>, Enumerable<coupon_instancesUncheckedCreateWithoutCouponInput>>
    connectOrCreate?: Enumerable<coupon_instancesCreateOrConnectWithoutCouponInput>
    createMany?: coupon_instancesCreateManyCouponInputEnvelope
    connect?: Enumerable<coupon_instancesWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type coupon_instancesUpdateManyWithoutCouponNestedInput = {
    create?: XOR<Enumerable<coupon_instancesCreateWithoutCouponInput>, Enumerable<coupon_instancesUncheckedCreateWithoutCouponInput>>
    connectOrCreate?: Enumerable<coupon_instancesCreateOrConnectWithoutCouponInput>
    upsert?: Enumerable<coupon_instancesUpsertWithWhereUniqueWithoutCouponInput>
    createMany?: coupon_instancesCreateManyCouponInputEnvelope
    set?: Enumerable<coupon_instancesWhereUniqueInput>
    disconnect?: Enumerable<coupon_instancesWhereUniqueInput>
    delete?: Enumerable<coupon_instancesWhereUniqueInput>
    connect?: Enumerable<coupon_instancesWhereUniqueInput>
    update?: Enumerable<coupon_instancesUpdateWithWhereUniqueWithoutCouponInput>
    updateMany?: Enumerable<coupon_instancesUpdateManyWithWhereWithoutCouponInput>
    deleteMany?: Enumerable<coupon_instancesScalarWhereInput>
  }

  export type usersUpdateOneRequiredWithoutCouponsNestedInput = {
    create?: XOR<usersCreateWithoutCouponsInput, usersUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCouponsInput
    upsert?: usersUpsertWithoutCouponsInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutCouponsInput, usersUncheckedUpdateWithoutCouponsInput>
  }

  export type coupon_instancesUncheckedUpdateManyWithoutCouponNestedInput = {
    create?: XOR<Enumerable<coupon_instancesCreateWithoutCouponInput>, Enumerable<coupon_instancesUncheckedCreateWithoutCouponInput>>
    connectOrCreate?: Enumerable<coupon_instancesCreateOrConnectWithoutCouponInput>
    upsert?: Enumerable<coupon_instancesUpsertWithWhereUniqueWithoutCouponInput>
    createMany?: coupon_instancesCreateManyCouponInputEnvelope
    set?: Enumerable<coupon_instancesWhereUniqueInput>
    disconnect?: Enumerable<coupon_instancesWhereUniqueInput>
    delete?: Enumerable<coupon_instancesWhereUniqueInput>
    connect?: Enumerable<coupon_instancesWhereUniqueInput>
    update?: Enumerable<coupon_instancesUpdateWithWhereUniqueWithoutCouponInput>
    updateMany?: Enumerable<coupon_instancesUpdateManyWithWhereWithoutCouponInput>
    deleteMany?: Enumerable<coupon_instancesScalarWhereInput>
  }

  export type coupon_instancesCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<coupon_instancesCreateWithoutCustomerInput>, Enumerable<coupon_instancesUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<coupon_instancesCreateOrConnectWithoutCustomerInput>
    createMany?: coupon_instancesCreateManyCustomerInputEnvelope
    connect?: Enumerable<coupon_instancesWhereUniqueInput>
  }

  export type coupon_instancesUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<coupon_instancesCreateWithoutCustomerInput>, Enumerable<coupon_instancesUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<coupon_instancesCreateOrConnectWithoutCustomerInput>
    createMany?: coupon_instancesCreateManyCustomerInputEnvelope
    connect?: Enumerable<coupon_instancesWhereUniqueInput>
  }

  export type coupon_instancesUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<coupon_instancesCreateWithoutCustomerInput>, Enumerable<coupon_instancesUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<coupon_instancesCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<coupon_instancesUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: coupon_instancesCreateManyCustomerInputEnvelope
    set?: Enumerable<coupon_instancesWhereUniqueInput>
    disconnect?: Enumerable<coupon_instancesWhereUniqueInput>
    delete?: Enumerable<coupon_instancesWhereUniqueInput>
    connect?: Enumerable<coupon_instancesWhereUniqueInput>
    update?: Enumerable<coupon_instancesUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<coupon_instancesUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<coupon_instancesScalarWhereInput>
  }

  export type coupon_instancesUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<coupon_instancesCreateWithoutCustomerInput>, Enumerable<coupon_instancesUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<coupon_instancesCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<coupon_instancesUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: coupon_instancesCreateManyCustomerInputEnvelope
    set?: Enumerable<coupon_instancesWhereUniqueInput>
    disconnect?: Enumerable<coupon_instancesWhereUniqueInput>
    delete?: Enumerable<coupon_instancesWhereUniqueInput>
    connect?: Enumerable<coupon_instancesWhereUniqueInput>
    update?: Enumerable<coupon_instancesUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<coupon_instancesUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<coupon_instancesScalarWhereInput>
  }

  export type coupon_instancesCreateNestedOneWithoutRedemptionsInput = {
    create?: XOR<coupon_instancesCreateWithoutRedemptionsInput, coupon_instancesUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: coupon_instancesCreateOrConnectWithoutRedemptionsInput
    connect?: coupon_instancesWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type coupon_instancesUpdateOneRequiredWithoutRedemptionsNestedInput = {
    create?: XOR<coupon_instancesCreateWithoutRedemptionsInput, coupon_instancesUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: coupon_instancesCreateOrConnectWithoutRedemptionsInput
    upsert?: coupon_instancesUpsertWithoutRedemptionsInput
    connect?: coupon_instancesWhereUniqueInput
    update?: XOR<coupon_instancesUpdateWithoutRedemptionsInput, coupon_instancesUncheckedUpdateWithoutRedemptionsInput>
  }

  export type couponsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<couponsCreateWithoutUserInput>, Enumerable<couponsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<couponsCreateOrConnectWithoutUserInput>
    createMany?: couponsCreateManyUserInputEnvelope
    connect?: Enumerable<couponsWhereUniqueInput>
  }

  export type usersCreateNestedOneWithoutStaffInput = {
    create?: XOR<usersCreateWithoutStaffInput, usersUncheckedCreateWithoutStaffInput>
    connectOrCreate?: usersCreateOrConnectWithoutStaffInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutManagerInput = {
    create?: XOR<Enumerable<usersCreateWithoutManagerInput>, Enumerable<usersUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutManagerInput>
    createMany?: usersCreateManyManagerInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type couponsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<couponsCreateWithoutUserInput>, Enumerable<couponsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<couponsCreateOrConnectWithoutUserInput>
    createMany?: couponsCreateManyUserInputEnvelope
    connect?: Enumerable<couponsWhereUniqueInput>
  }

  export type usersUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<Enumerable<usersCreateWithoutManagerInput>, Enumerable<usersUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutManagerInput>
    createMany?: usersCreateManyManagerInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type NullableEnumroleFieldUpdateOperationsInput = {
    set?: role | null
  }

  export type couponsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<couponsCreateWithoutUserInput>, Enumerable<couponsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<couponsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<couponsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: couponsCreateManyUserInputEnvelope
    set?: Enumerable<couponsWhereUniqueInput>
    disconnect?: Enumerable<couponsWhereUniqueInput>
    delete?: Enumerable<couponsWhereUniqueInput>
    connect?: Enumerable<couponsWhereUniqueInput>
    update?: Enumerable<couponsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<couponsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<couponsScalarWhereInput>
  }

  export type usersUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<usersCreateWithoutStaffInput, usersUncheckedCreateWithoutStaffInput>
    connectOrCreate?: usersCreateOrConnectWithoutStaffInput
    upsert?: usersUpsertWithoutStaffInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutStaffInput, usersUncheckedUpdateWithoutStaffInput>
  }

  export type usersUpdateManyWithoutManagerNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutManagerInput>, Enumerable<usersUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutManagerInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutManagerInput>
    createMany?: usersCreateManyManagerInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutManagerInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutManagerInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type couponsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<couponsCreateWithoutUserInput>, Enumerable<couponsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<couponsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<couponsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: couponsCreateManyUserInputEnvelope
    set?: Enumerable<couponsWhereUniqueInput>
    disconnect?: Enumerable<couponsWhereUniqueInput>
    delete?: Enumerable<couponsWhereUniqueInput>
    connect?: Enumerable<couponsWhereUniqueInput>
    update?: Enumerable<couponsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<couponsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<couponsScalarWhereInput>
  }

  export type usersUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutManagerInput>, Enumerable<usersUncheckedCreateWithoutManagerInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutManagerInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutManagerInput>
    createMany?: usersCreateManyManagerInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutManagerInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutManagerInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type NestedEnumroleNullableFilter = {
    equals?: role | null
    in?: Enumerable<role> | null
    notIn?: Enumerable<role> | null
    not?: NestedEnumroleNullableFilter | role | null
  }

  export type NestedEnumroleNullableWithAggregatesFilter = {
    equals?: role | null
    in?: Enumerable<role> | null
    notIn?: Enumerable<role> | null
    not?: NestedEnumroleNullableWithAggregatesFilter | role | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumroleNullableFilter
    _max?: NestedEnumroleNullableFilter
  }

  export type couponsCreateWithoutCoupon_instancesInput = {
    id?: bigint | number
    created_at?: Date | string | null
    title?: string | null
    description?: string | null
    image_url?: string | null
    expires_at?: Date | string | null
    user?: usersCreateNestedOneWithoutCouponsInput
  }

  export type couponsUncheckedCreateWithoutCoupon_instancesInput = {
    id?: bigint | number
    created_at?: Date | string | null
    title?: string | null
    description?: string | null
    image_url?: string | null
    user_id?: bigint | number
    expires_at?: Date | string | null
  }

  export type couponsCreateOrConnectWithoutCoupon_instancesInput = {
    where: couponsWhereUniqueInput
    create: XOR<couponsCreateWithoutCoupon_instancesInput, couponsUncheckedCreateWithoutCoupon_instancesInput>
  }

  export type customersCreateWithoutCoupon_instancesInput = {
    id?: bigint | number
    email?: string | null
    created_at?: Date | string | null
  }

  export type customersUncheckedCreateWithoutCoupon_instancesInput = {
    id?: bigint | number
    email?: string | null
    created_at?: Date | string | null
  }

  export type customersCreateOrConnectWithoutCoupon_instancesInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutCoupon_instancesInput, customersUncheckedCreateWithoutCoupon_instancesInput>
  }

  export type redemptionsCreateWithoutCoupon_instanceInput = {
    id?: bigint | number
    created_at?: Date | string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
  }

  export type redemptionsUncheckedCreateWithoutCoupon_instanceInput = {
    id?: bigint | number
    created_at?: Date | string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
  }

  export type redemptionsCreateOrConnectWithoutCoupon_instanceInput = {
    where: redemptionsWhereUniqueInput
    create: XOR<redemptionsCreateWithoutCoupon_instanceInput, redemptionsUncheckedCreateWithoutCoupon_instanceInput>
  }

  export type redemptionsCreateManyCoupon_instanceInputEnvelope = {
    data: Enumerable<redemptionsCreateManyCoupon_instanceInput>
    skipDuplicates?: boolean
  }

  export type couponsUpsertWithoutCoupon_instancesInput = {
    update: XOR<couponsUpdateWithoutCoupon_instancesInput, couponsUncheckedUpdateWithoutCoupon_instancesInput>
    create: XOR<couponsCreateWithoutCoupon_instancesInput, couponsUncheckedCreateWithoutCoupon_instancesInput>
  }

  export type couponsUpdateWithoutCoupon_instancesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutCouponsNestedInput
  }

  export type couponsUncheckedUpdateWithoutCoupon_instancesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersUpsertWithoutCoupon_instancesInput = {
    update: XOR<customersUpdateWithoutCoupon_instancesInput, customersUncheckedUpdateWithoutCoupon_instancesInput>
    create: XOR<customersCreateWithoutCoupon_instancesInput, customersUncheckedCreateWithoutCoupon_instancesInput>
  }

  export type customersUpdateWithoutCoupon_instancesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersUncheckedUpdateWithoutCoupon_instancesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type redemptionsUpsertWithWhereUniqueWithoutCoupon_instanceInput = {
    where: redemptionsWhereUniqueInput
    update: XOR<redemptionsUpdateWithoutCoupon_instanceInput, redemptionsUncheckedUpdateWithoutCoupon_instanceInput>
    create: XOR<redemptionsCreateWithoutCoupon_instanceInput, redemptionsUncheckedCreateWithoutCoupon_instanceInput>
  }

  export type redemptionsUpdateWithWhereUniqueWithoutCoupon_instanceInput = {
    where: redemptionsWhereUniqueInput
    data: XOR<redemptionsUpdateWithoutCoupon_instanceInput, redemptionsUncheckedUpdateWithoutCoupon_instanceInput>
  }

  export type redemptionsUpdateManyWithWhereWithoutCoupon_instanceInput = {
    where: redemptionsScalarWhereInput
    data: XOR<redemptionsUpdateManyMutationInput, redemptionsUncheckedUpdateManyWithoutRedemptionsInput>
  }

  export type redemptionsScalarWhereInput = {
    AND?: Enumerable<redemptionsScalarWhereInput>
    OR?: Enumerable<redemptionsScalarWhereInput>
    NOT?: Enumerable<redemptionsScalarWhereInput>
    id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    revenue?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableFilter | string | null
    coupon_instance_id?: BigIntFilter | bigint | number
  }

  export type coupon_instancesCreateWithoutCouponInput = {
    id?: bigint | number
    created_at?: Date | string | null
    customer?: customersCreateNestedOneWithoutCoupon_instancesInput
    redemptions?: redemptionsCreateNestedManyWithoutCoupon_instanceInput
  }

  export type coupon_instancesUncheckedCreateWithoutCouponInput = {
    id?: bigint | number
    created_at?: Date | string | null
    customer_id?: bigint | number
    redemptions?: redemptionsUncheckedCreateNestedManyWithoutCoupon_instanceInput
  }

  export type coupon_instancesCreateOrConnectWithoutCouponInput = {
    where: coupon_instancesWhereUniqueInput
    create: XOR<coupon_instancesCreateWithoutCouponInput, coupon_instancesUncheckedCreateWithoutCouponInput>
  }

  export type coupon_instancesCreateManyCouponInputEnvelope = {
    data: Enumerable<coupon_instancesCreateManyCouponInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCouponsInput = {
    id?: bigint | number
    name?: string | null
    email?: string | null
    created_at?: Date | string | null
    role?: role | null
    password?: string | null
    manager?: usersCreateNestedOneWithoutStaffInput
    staff?: usersCreateNestedManyWithoutManagerInput
  }

  export type usersUncheckedCreateWithoutCouponsInput = {
    id?: bigint | number
    name?: string | null
    email?: string | null
    created_at?: Date | string | null
    role?: role | null
    password?: string | null
    manager_id?: bigint | number
    staff?: usersUncheckedCreateNestedManyWithoutManagerInput
  }

  export type usersCreateOrConnectWithoutCouponsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCouponsInput, usersUncheckedCreateWithoutCouponsInput>
  }

  export type coupon_instancesUpsertWithWhereUniqueWithoutCouponInput = {
    where: coupon_instancesWhereUniqueInput
    update: XOR<coupon_instancesUpdateWithoutCouponInput, coupon_instancesUncheckedUpdateWithoutCouponInput>
    create: XOR<coupon_instancesCreateWithoutCouponInput, coupon_instancesUncheckedCreateWithoutCouponInput>
  }

  export type coupon_instancesUpdateWithWhereUniqueWithoutCouponInput = {
    where: coupon_instancesWhereUniqueInput
    data: XOR<coupon_instancesUpdateWithoutCouponInput, coupon_instancesUncheckedUpdateWithoutCouponInput>
  }

  export type coupon_instancesUpdateManyWithWhereWithoutCouponInput = {
    where: coupon_instancesScalarWhereInput
    data: XOR<coupon_instancesUpdateManyMutationInput, coupon_instancesUncheckedUpdateManyWithoutCoupon_instancesInput>
  }

  export type coupon_instancesScalarWhereInput = {
    AND?: Enumerable<coupon_instancesScalarWhereInput>
    OR?: Enumerable<coupon_instancesScalarWhereInput>
    NOT?: Enumerable<coupon_instancesScalarWhereInput>
    id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    coupon_id?: BigIntFilter | bigint | number
    customer_id?: BigIntFilter | bigint | number
  }

  export type usersUpsertWithoutCouponsInput = {
    update: XOR<usersUpdateWithoutCouponsInput, usersUncheckedUpdateWithoutCouponsInput>
    create: XOR<usersCreateWithoutCouponsInput, usersUncheckedCreateWithoutCouponsInput>
  }

  export type usersUpdateWithoutCouponsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: usersUpdateOneRequiredWithoutStaffNestedInput
    staff?: usersUpdateManyWithoutManagerNestedInput
  }

  export type usersUncheckedUpdateWithoutCouponsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: BigIntFieldUpdateOperationsInput | bigint | number
    staff?: usersUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type coupon_instancesCreateWithoutCustomerInput = {
    id?: bigint | number
    created_at?: Date | string | null
    coupon?: couponsCreateNestedOneWithoutCoupon_instancesInput
    redemptions?: redemptionsCreateNestedManyWithoutCoupon_instanceInput
  }

  export type coupon_instancesUncheckedCreateWithoutCustomerInput = {
    id?: bigint | number
    created_at?: Date | string | null
    coupon_id?: bigint | number
    redemptions?: redemptionsUncheckedCreateNestedManyWithoutCoupon_instanceInput
  }

  export type coupon_instancesCreateOrConnectWithoutCustomerInput = {
    where: coupon_instancesWhereUniqueInput
    create: XOR<coupon_instancesCreateWithoutCustomerInput, coupon_instancesUncheckedCreateWithoutCustomerInput>
  }

  export type coupon_instancesCreateManyCustomerInputEnvelope = {
    data: Enumerable<coupon_instancesCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type coupon_instancesUpsertWithWhereUniqueWithoutCustomerInput = {
    where: coupon_instancesWhereUniqueInput
    update: XOR<coupon_instancesUpdateWithoutCustomerInput, coupon_instancesUncheckedUpdateWithoutCustomerInput>
    create: XOR<coupon_instancesCreateWithoutCustomerInput, coupon_instancesUncheckedCreateWithoutCustomerInput>
  }

  export type coupon_instancesUpdateWithWhereUniqueWithoutCustomerInput = {
    where: coupon_instancesWhereUniqueInput
    data: XOR<coupon_instancesUpdateWithoutCustomerInput, coupon_instancesUncheckedUpdateWithoutCustomerInput>
  }

  export type coupon_instancesUpdateManyWithWhereWithoutCustomerInput = {
    where: coupon_instancesScalarWhereInput
    data: XOR<coupon_instancesUpdateManyMutationInput, coupon_instancesUncheckedUpdateManyWithoutCoupon_instancesInput>
  }

  export type coupon_instancesCreateWithoutRedemptionsInput = {
    id?: bigint | number
    created_at?: Date | string | null
    coupon?: couponsCreateNestedOneWithoutCoupon_instancesInput
    customer?: customersCreateNestedOneWithoutCoupon_instancesInput
  }

  export type coupon_instancesUncheckedCreateWithoutRedemptionsInput = {
    id?: bigint | number
    created_at?: Date | string | null
    coupon_id?: bigint | number
    customer_id?: bigint | number
  }

  export type coupon_instancesCreateOrConnectWithoutRedemptionsInput = {
    where: coupon_instancesWhereUniqueInput
    create: XOR<coupon_instancesCreateWithoutRedemptionsInput, coupon_instancesUncheckedCreateWithoutRedemptionsInput>
  }

  export type coupon_instancesUpsertWithoutRedemptionsInput = {
    update: XOR<coupon_instancesUpdateWithoutRedemptionsInput, coupon_instancesUncheckedUpdateWithoutRedemptionsInput>
    create: XOR<coupon_instancesCreateWithoutRedemptionsInput, coupon_instancesUncheckedCreateWithoutRedemptionsInput>
  }

  export type coupon_instancesUpdateWithoutRedemptionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: couponsUpdateOneRequiredWithoutCoupon_instancesNestedInput
    customer?: customersUpdateOneRequiredWithoutCoupon_instancesNestedInput
  }

  export type coupon_instancesUncheckedUpdateWithoutRedemptionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon_id?: BigIntFieldUpdateOperationsInput | bigint | number
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type couponsCreateWithoutUserInput = {
    id?: bigint | number
    created_at?: Date | string | null
    title?: string | null
    description?: string | null
    image_url?: string | null
    expires_at?: Date | string | null
    coupon_instances?: coupon_instancesCreateNestedManyWithoutCouponInput
  }

  export type couponsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    created_at?: Date | string | null
    title?: string | null
    description?: string | null
    image_url?: string | null
    expires_at?: Date | string | null
    coupon_instances?: coupon_instancesUncheckedCreateNestedManyWithoutCouponInput
  }

  export type couponsCreateOrConnectWithoutUserInput = {
    where: couponsWhereUniqueInput
    create: XOR<couponsCreateWithoutUserInput, couponsUncheckedCreateWithoutUserInput>
  }

  export type couponsCreateManyUserInputEnvelope = {
    data: Enumerable<couponsCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutStaffInput = {
    id?: bigint | number
    name?: string | null
    email?: string | null
    created_at?: Date | string | null
    role?: role | null
    password?: string | null
    coupons?: couponsCreateNestedManyWithoutUserInput
    manager?: usersCreateNestedOneWithoutStaffInput
  }

  export type usersUncheckedCreateWithoutStaffInput = {
    id?: bigint | number
    name?: string | null
    email?: string | null
    created_at?: Date | string | null
    role?: role | null
    password?: string | null
    manager_id?: bigint | number
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutStaffInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutStaffInput, usersUncheckedCreateWithoutStaffInput>
  }

  export type usersCreateWithoutManagerInput = {
    id?: bigint | number
    name?: string | null
    email?: string | null
    created_at?: Date | string | null
    role?: role | null
    password?: string | null
    coupons?: couponsCreateNestedManyWithoutUserInput
    staff?: usersCreateNestedManyWithoutManagerInput
  }

  export type usersUncheckedCreateWithoutManagerInput = {
    id?: bigint | number
    name?: string | null
    email?: string | null
    created_at?: Date | string | null
    role?: role | null
    password?: string | null
    coupons?: couponsUncheckedCreateNestedManyWithoutUserInput
    staff?: usersUncheckedCreateNestedManyWithoutManagerInput
  }

  export type usersCreateOrConnectWithoutManagerInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutManagerInput, usersUncheckedCreateWithoutManagerInput>
  }

  export type usersCreateManyManagerInputEnvelope = {
    data: Enumerable<usersCreateManyManagerInput>
    skipDuplicates?: boolean
  }

  export type couponsUpsertWithWhereUniqueWithoutUserInput = {
    where: couponsWhereUniqueInput
    update: XOR<couponsUpdateWithoutUserInput, couponsUncheckedUpdateWithoutUserInput>
    create: XOR<couponsCreateWithoutUserInput, couponsUncheckedCreateWithoutUserInput>
  }

  export type couponsUpdateWithWhereUniqueWithoutUserInput = {
    where: couponsWhereUniqueInput
    data: XOR<couponsUpdateWithoutUserInput, couponsUncheckedUpdateWithoutUserInput>
  }

  export type couponsUpdateManyWithWhereWithoutUserInput = {
    where: couponsScalarWhereInput
    data: XOR<couponsUpdateManyMutationInput, couponsUncheckedUpdateManyWithoutCouponsInput>
  }

  export type couponsScalarWhereInput = {
    AND?: Enumerable<couponsScalarWhereInput>
    OR?: Enumerable<couponsScalarWhereInput>
    NOT?: Enumerable<couponsScalarWhereInput>
    id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    image_url?: StringNullableFilter | string | null
    user_id?: BigIntFilter | bigint | number
    expires_at?: DateTimeNullableFilter | Date | string | null
  }

  export type usersUpsertWithoutStaffInput = {
    update: XOR<usersUpdateWithoutStaffInput, usersUncheckedUpdateWithoutStaffInput>
    create: XOR<usersCreateWithoutStaffInput, usersUncheckedCreateWithoutStaffInput>
  }

  export type usersUpdateWithoutStaffInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    coupons?: couponsUpdateManyWithoutUserNestedInput
    manager?: usersUpdateOneRequiredWithoutStaffNestedInput
  }

  export type usersUncheckedUpdateWithoutStaffInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: BigIntFieldUpdateOperationsInput | bigint | number
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutManagerInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutManagerInput, usersUncheckedUpdateWithoutManagerInput>
    create: XOR<usersCreateWithoutManagerInput, usersUncheckedCreateWithoutManagerInput>
  }

  export type usersUpdateWithWhereUniqueWithoutManagerInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutManagerInput, usersUncheckedUpdateWithoutManagerInput>
  }

  export type usersUpdateManyWithWhereWithoutManagerInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutStaffInput>
  }

  export type usersScalarWhereInput = {
    AND?: Enumerable<usersScalarWhereInput>
    OR?: Enumerable<usersScalarWhereInput>
    NOT?: Enumerable<usersScalarWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    role?: EnumroleNullableFilter | role | null
    password?: StringNullableFilter | string | null
    manager_id?: BigIntFilter | bigint | number
  }

  export type redemptionsCreateManyCoupon_instanceInput = {
    id?: bigint | number
    created_at?: Date | string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
  }

  export type redemptionsUpdateWithoutCoupon_instanceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type redemptionsUncheckedUpdateWithoutCoupon_instanceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type redemptionsUncheckedUpdateManyWithoutRedemptionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type coupon_instancesCreateManyCouponInput = {
    id?: bigint | number
    created_at?: Date | string | null
    customer_id?: bigint | number
  }

  export type coupon_instancesUpdateWithoutCouponInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customersUpdateOneRequiredWithoutCoupon_instancesNestedInput
    redemptions?: redemptionsUpdateManyWithoutCoupon_instanceNestedInput
  }

  export type coupon_instancesUncheckedUpdateWithoutCouponInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    redemptions?: redemptionsUncheckedUpdateManyWithoutCoupon_instanceNestedInput
  }

  export type coupon_instancesUncheckedUpdateManyWithoutCoupon_instancesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type coupon_instancesCreateManyCustomerInput = {
    id?: bigint | number
    created_at?: Date | string | null
    coupon_id?: bigint | number
  }

  export type coupon_instancesUpdateWithoutCustomerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: couponsUpdateOneRequiredWithoutCoupon_instancesNestedInput
    redemptions?: redemptionsUpdateManyWithoutCoupon_instanceNestedInput
  }

  export type coupon_instancesUncheckedUpdateWithoutCustomerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon_id?: BigIntFieldUpdateOperationsInput | bigint | number
    redemptions?: redemptionsUncheckedUpdateManyWithoutCoupon_instanceNestedInput
  }

  export type couponsCreateManyUserInput = {
    id?: bigint | number
    created_at?: Date | string | null
    title?: string | null
    description?: string | null
    image_url?: string | null
    expires_at?: Date | string | null
  }

  export type usersCreateManyManagerInput = {
    id?: bigint | number
    name?: string | null
    email?: string | null
    created_at?: Date | string | null
    role?: role | null
    password?: string | null
  }

  export type couponsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon_instances?: coupon_instancesUpdateManyWithoutCouponNestedInput
  }

  export type couponsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon_instances?: coupon_instancesUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type couponsUncheckedUpdateManyWithoutCouponsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpdateWithoutManagerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    coupons?: couponsUpdateManyWithoutUserNestedInput
    staff?: usersUpdateManyWithoutManagerNestedInput
  }

  export type usersUncheckedUpdateWithoutManagerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    coupons?: couponsUncheckedUpdateManyWithoutUserNestedInput
    staff?: usersUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type usersUncheckedUpdateManyWithoutStaffInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumroleFieldUpdateOperationsInput | role | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
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