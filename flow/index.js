import type { Context } from 'koa';

declare function KoaMiddleware(ctx: Context, next: Function): Promise<any>

declare module 'koa-compose' {
  declare function exports(middlewares: Array<KoaMiddleware>): KoaMiddleware;
}
