import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com/'
})

export const Posts = {
    getPosts(limit = 30, skip = 0) {
        return instance.get('posts', {
            params: {
                limit: limit,
                skip: skip,

            }
        }).then(response =>  response.data)
    },
    getCurrentPost(id) {
        return instance.get('posts/' + id).then(response => response.data)
    },
    getUserPosts(id) {
        return instance.get('posts/user/' + id).then(response => response.data)
    }
}

export const User = {
    getAuthor(id) {
        return instance.get('users/' + id, {
            params: {
                select: ['address','image','firstName','maidenName']
            }
        }).then(response => response.data)
    }
}

export const Comments = {
    getComments(id) {
        return instance.get('posts/' + id + '/comments').then(response => response.data)
    }
}