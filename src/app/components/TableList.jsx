import React from "react";

export default function TableList(props) {
    const { id, username, phone, language, email, theme } = props.data;
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{language}</td>
                <td>
                    <span className={`badge bg-${theme === "light" ? "secondary" : "dark"}`}>{theme}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => props.edit(props.data)}>
                        Edit
                    </button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => props.delete(id)}>
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
}
