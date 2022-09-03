import { useFormik } from "formik";
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { inputValidationSchema } from "./validation";
const HandleListItems = () => {
    const [listItems, setListItems] = useState([
        { id: uuidv4(), value: "test item" }
    ])

    const formik = useFormik({
        initialValues: {
            value: ""
        },
        validationSchema: inputValidationSchema,
        onSubmit: (values) => {
            const payload = {
                ...values,
                id: uuidv4()
            }
            setListItems((v) => ([
                ...v,
                payload
            ]))
            formik.resetForm()
        }
    });

    const handleDelete = (id) => {
        // eslint-disable-next-line
        if (confirm("Are you sure ?")) {
            setListItems((v) => {
                const itemsAfterDelete = v.filter(el => el.id !== id)
                return itemsAfterDelete
            })
        }

    }
    const { handleSubmit, handleChange, values, touched, errors } = formik;
    return (
        <div className="container">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="value"
                            onChange={handleChange}
                            placeholder="Write your text..."
                            value={values.value}
                            className={`form-control ${Boolean(touched?.value) && Boolean(errors?.value) ? "border-danger" : ""}`} />
                        {Boolean(touched?.value) && Boolean(errors?.value) && <p className="text-danger">{errors.value}</p>}
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
                <div className="col-md-12">
                    <h4>List Items</h4>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Value</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listItems?.length
                                    ?
                                    listItems.map((el, i) => (<tr key={`list-item-${el.id}`}>
                                        <td>{i + 1}</td>
                                        <td>{el.id}</td>
                                        <td>{el.value}</td>
                                        <td><button className="btn btn-danger" onClick={() => handleDelete(el.id)}>Delete</button></td>
                                    </tr>))
                                    :
                                    <td className="text-danger text-center" colSpan={4}>No data</td>}

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}
export default HandleListItems