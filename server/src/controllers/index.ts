import 'reflect-metadata';

import { Context } from 'koa';
import Router from 'koa-router';
import { Service } from 'typedi';

import { PostController } from './post.controller';

@Service()
export class Routes {
  private router: Router;

  constructor(private postController: PostController) {
    this.router = new Router();
    this.setRoutes();
  }

  private setRoutes() {
    this.router.get("/posts", this.postController.getPosts);
    this.router.get("/posts/:id", this.postController.getPost);

    this.router.all("*", (ctx: Context) => {
      ctx.status = 404;
      ctx.body = "Not exits API";
    });
  }

  public getRoutes() {
    return this.router.routes();
  }
}
