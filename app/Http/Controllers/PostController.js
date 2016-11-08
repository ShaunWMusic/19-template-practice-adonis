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
