import { Context } from 'koa';
import { Service } from 'typedi';

const posts = [
  {
    id: "5",
    title: "title 5",
    content: "content 5"
  },
  {
    id: "4",
    title: "title 4",
    content: "content 4"
  },
  {
    id: "3",
    title: "title 3",
    content: "content 3"
  },
  {
    id: "2",
    title: "title 2",
    content: "content 2"
  },
  {
    id: "1",
    title: "title 1",
    content: "content 1"
  }
];

@Service()
export class PostController {
  public getPosts(ctx: Context) {
    ctx.status = 200;
    ctx.body = {
      posts
    };
  }

  public getPost(ctx: Context) {
    const { id } = ctx.params;

    const post = posts.find(post => post.id === id);

    if (!post) {
      ctx.status = 404;
      ctx.body = {
        message: "404 not found"
      };

      return;
    }

    ctx.status = 200;
    ctx.body = {
      post
    };
  }
}
