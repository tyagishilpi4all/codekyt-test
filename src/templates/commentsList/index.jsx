import { useEffect, useState } from "react"
import { commentListApi } from "../../api"

const CommentsList = () => {
    const [comments, setComments] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchListOfComments = async () => {
        try {
            const result = await commentListApi()
            setComments(result?.data || null)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetchListOfComments()
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4>Comments</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading
                                ?
                                <td colSpan={4} className="text-center">Please wait ...</td>
                                :
                                comments?.length
                                    ?
                                    comments?.map((el, i) => (<tr key={`comment-${el.id}`}>
                                        <td>{i + 1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.email}</td>
                                        <td>{el.body}</td>
                                    </tr>))
                                    :
                                    <td colSpan={4} className="text-danger text-center">No data.</td>}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default CommentsList