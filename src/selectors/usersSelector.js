export const findUser = (users, id) => {
    return users.find(user => user.id == id)
}

export const userPosts = (posts, id) => {
    return posts.filter(post => post.userId == id)
}

export const userComments = (comments, id) => {
    return comments.filter(comment => comment.postId == id)
}
