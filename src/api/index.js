import { getApi } from "../utils/api-interface"

export const commentListApi = () => {
    return getApi('/posts/1/comments')
}