import React from "react";
import ReactCode from "../../../../../components/ReactCode";

export default function CurdCode() {
    return (
        <>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
             import React, { useEffect, useState } from "react";
             
             export default function HttpCurd() {
                 //State and variable
                const [users, setUsers] = useState([]);
                const [fromFields, setFromFields] = useState({
                    username: "",
                    email: "",
                    phone: "",
                    language: "",
                    theme: "",
                });
                const [updateViaId, setUpdateViaId] = useState(null);
                const baseUrl = 'http://localhost:3000';
                const httpHeader = {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                };

                //__________________GET Request_______________
                 const getUser = async () => {
                     try {
                         let res = await fetch(${'${baseUrl}/users'});
                         let data = await res.json();
                         setUsers(data);
                     } catch (error) {
                         console.log(error);
                     }
                 };

                 const editNow = (userObj) => {
                    setUpdateViaId(userObj.id);
                    user_by_id(userObj);
                 }; //step 1:get id from props

                 //__________________GET Request Single user_______________
                 const user_by_id = async (userObj) => {
                     try {
                         let res = await fetch(${"`${baseUrl}/users/${userObj.id}`"});
                         let data = await res.json();
                         setFromFields({
                             username: data.username,
                             password: data.password,
                             email: data.email,
                             phone: data.phone,
                             language: data.language,
                             theme: data.theme,
                         });
                     } catch (error) {
                         console.log(error);
                     }
                 }; //step 2: setValue

                 
                 //__________________POST and PUT Request_______________
                 const create_and_update = async (userObj) => {
                    if (updateViaId == null) {
                        //------POST Request-------
                        try {
                            let res = await fetch(${"${baseUrl}/users"}, {
                                method: "POST",
                                headers: httpHeader,
                                body: JSON.stringify(userObj),
                            });
                            let result = await res;
                            result && getUser();
                        } catch (error) {}
                    } else {
                        //------PUT Request-------
                        try {
                            let res = await fetch(${"`${baseUrl}/users/${updateViaId}`"}, {
                                method: "PUT",
                                headers: httpHeader,
                                body: JSON.stringify(userObj),
                            });ull
                            let result = await res;
                            result && getUser();
                            setUpdateViaId(null);
                        } catch (error) {}
                    }
                };
                

                //__________________DELETE Request_______________
                const deleteUser = async (id) => {
                    try {
                        let res = await fetch(${"`${baseUrl}/users/${id}`"}, {
                            method: "DELETE",
                            headers: httpHeader,
                        });
                        let result = await res;
                        result && getUser();
                    } catch (error) {}
                };

                //____________useEffect for API calling____________
                useEffect(() => {
                    getUser();
                }, []); //api always call in useEffect hook
                

                //____________onchange heandler____________
                const changeInput = (event) => {
                    const { name, value } = event.target;
                    setFromFields(() => ({
                        ...fromFields,
                        [name]: value,
                    }));
                };
                
                //____________form submit____________
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
                        {/* form */}
                        <form onSubmit={submit}>
                          <div>
                             <p>
                               <input type="text" value={fromFields.username}
                               name="username" onChange={changeInput}/>
                             </p>
                             <p>
                               <input type="text" value={fromFields.phone} 
                                name="phone" onChange={changeInput} />
                             </p>
                             <p>
                               <input type="text" value={fromFields.email} 
                                name="email" onChange={changeInput} />
                            </p>
                            <p>
                              <select value={fromFields.language} name="language" onChange={changeInput}>
                                <option>Select option</option>
                                {
                                    ["JavaScript", "Python", "Go", "Java", "Kotlin"].map((lang, i) => (
                                    <option key={'lang-' + i} value={lang}>
                                        {lang}
                                    </option>
                                    ))
                                }
                              </select>
                            </p>
                            <p>
                               <input type="radio" name="theme" value="dark"  onChange={changeInput} 
                               checked={fromFields.theme === "dark"}/>dark Theme

                               <input type="radio" name="theme" value="light" onChange={changeInput} 
                               checked={fromFields.theme === "light"} />ligth theme
                            </p>
                            <p>
                               <button type="submit">Submit</button>
                            </p>
                          </div>
                        </form>
                       {/* form */}
                       
                       {/* list */}
                       {users.map((data, i) => (
                          <Card key={'card-' + i} delete={deleteUser} 
                          edit={editNow} data={data} />
                       ))}
                       {/* list */}
                     </>
                 )
             }
             
            `}
            />

            <ReactCode
                file="Card"
                dot="jsx"
                code={`
          import React from 'react'
          
          export default function Card(props) {
            const { id, username, phone, language, email, theme } = props.data;
              return (
                  <>
                    <div className="card">
                      <ul>
                         <li>{id}</li>
                         <li>{username}</li>
                         <li>{phone}</li>
                         <li>{email}</li>
                         <li>{language}</li>
                         <button onClick={() => props.edit(props.data)}>
                            edit
                         </button>
                         <button onClick={() => props.delete(id)}>
                            delete
                        </button>
                      </ul>
                    </div>  
                  </>
              )
          } 
          `}
            />
        </>
    );
}
