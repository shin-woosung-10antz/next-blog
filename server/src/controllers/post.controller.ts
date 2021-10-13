import { Context } from 'koa';
import { Service } from 'typedi';

const posts = [
  {
    id: "5",
    title: "5th POST title",
    content: "5th post content"
  },
  {
    id: "4",
    title: "4 POST title",
    content: "4th post content"
  },
  {
    id: "3",
    title: "3rd POST title",
    content: "3rd post content"
  },
  {
    id: "2",
    title: "2nd POST title",
    content: "2nd post content"
  },
  {
    id: "1",
    title: "1st POST title",
    content: "1st post content"
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
