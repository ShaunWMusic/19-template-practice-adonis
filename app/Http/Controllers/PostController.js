'use strict'

const Post = use('App/Model/Post');

class PostController {

  * index(request, response) {
    const posts = yield Post.all();

    yield response.sendView('posts.index', {
      posts: posts.toJSON()
    });
}

  * create(request, response) {

  }


  * store(request, response) {
    const { title, author, content }  = request.all();
   // const inputs = request.all();

  yield Post.create({
    title,
    author,
    content,
    slug: title,
    post_date: new Date(),
  });

  response.redirect('/');
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = PostController
