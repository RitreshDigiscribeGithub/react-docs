import React, { useEffect, useState } from "react";
import TableList from "../../../../components/TableList";
import LinearProgress from "@mui/material/LinearProgress";

//Warn:json-server --port 3000 --delay 1000 db.json

export default function HttpCurd() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fromFields, setFromFields] = useState({
        username: "",
        email: "",
        phone: "",
        language: "",
        theme: "",
    });

    const [updateViaId, setUpdateViaId] = useState(null);
    const baseUrl = `http://localhost:3000`;

    const httpHeader = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };
    //Todo: GET Request
    const getUser = async () => {
        setLoading(true);
        try {
            let res = await fetch(`${baseUrl}/users`);
            let data = await res.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    //Todo: DELETE Request
    const deleteUser = async (id) => {
        setLoading(true);
        try {
            let res = await fetch(`${baseUrl}/users/${id}`, {
                method: "DELETE",
                headers: httpHeader,
            });
            let result = await res;
            setLoading(false);
            result && getUser();
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const editNow = (userObj) => {
        setUpdateViaId(userObj.id);
        user_by_id(userObj);
    }; //step 1:get id from props

    //Todo: single user
    const user_by_id = async (userObj) => {
        setLoading(true);
        try {
            let res = await fetch(`${baseUrl}/users/${userObj.id}`);
            let data = await res.json();
            setFromFields({
                username: data.username,
                password: data.password,
                email: data.email,
                phone: data.phone,
                language: data.language,
                theme: data.theme,
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }; //step 2: setValue

    const create_and_update = async (userObj) => {
        if (updateViaId == null) {
            setLoading(true);
            //Todo: POST Request
            try {
                let res = await fetch(`${baseUrl}/users`, {
                    method: "POST",
                    headers: httpHeader,
                    body: JSON.stringify(userObj),
                });
                let result = await res;
                setLoading(false);
                result && getUser();
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } else {
            //Todo: PUT Request
            setLoading(true);
            try {
                let res = await fetch(`${baseUrl}/users/${updateViaId}`, {
                    method: "PUT",
                    headers: httpHeader,
                    body: JSON.stringify(userObj),
                });
                let result = await res;
                setLoading(false);
                result && getUser();
                setUpdateViaId(null);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    };
    useEffect(() => {
        getUser();
    }, []); //api always call in useEffect hook

    const changeInput = (event) => {
        const { name, value } = event.target;
        setFromFields(() => ({
            ...fromFields,
            [name]: value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        let fromData = fromFields;
        create_and_update(fromData);
        e.target.reset();
        setFromFields({
            username: "",
            email: "",
            phone: "",
            language: "",
        });
    };
    return (
        <>
            {loading && <LinearProgress />}
            <div className="card p-3">
                {/* form */}

                <form onSubmit={submit}>
                    <div className="row">
                        <p className="col-md-12">
                            <span className="fs-2">{updateViaId ? `id ${updateViaId} user data` : "create new"}</span>
                        </p>
                        <p className="col-md-6">
                            <input type="text" value={fromFields.username} name="username" onChange={changeInput} className="form-control" placeholder="username" />
                        </p>
                        <p className="col-md-6">
                            <input type="text" value={fromFields.phone} name="phone" onChange={changeInput} className="form-control" placeholder="phone" />
                        </p>
                        <p className="col-md-6">
                            <input type="text" value={fromFields.email} name="email" onChange={changeInput} className="form-control" placeholder="email" />
                        </p>
                        <p className="col-md-6">
                            <select value={fromFields.language} name="language" onChange={changeInput} className="form-select">
                                <option>Select option</option>
                                {["JavaScript", "Python", "Go", "Java", "Kotlin"].map((lang, i) => (
                                    <option key={`lang-${i}`} value={lang}>
                                        {lang}
                                    </option>
                                ))}
                            </select>
                        </p>
                        <p className="col-md-6">
                            {/* dark */}
                            <input type="radio" name="theme" value="dark" className="form-check-input" checked={fromFields.theme === "dark"} onChange={changeInput} />
                            &nbsp; dark theme&nbsp;&nbsp;
                            {/* ligth */}
                            <input type="radio" name="theme" value="light" className="form-check-input" onChange={changeInput} checked={fromFields.theme === "light"} />
                            &nbsp; ligth theme
                        </p>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="card mt-3 p-3">
                <span className="fs-2">Users table</span>
                <div className="table-responsive-md">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">phone </th>
                                <th scope="col">Email</th>
                                <th scope="col">Language</th>
                                <th scope="col">Theme</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((data, i) => (
                                <TableList key={`card-${i}`} delete={deleteUser} edit={editNow} data={data} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <CurdCode /> */}
        </>
    );
}
