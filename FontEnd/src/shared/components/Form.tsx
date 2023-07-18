import React from "react";

interface Field {
    name: string,
    type: string,
    required: boolean
    
}

interface props {
    fields: Field[],
    requestMethod: string,
    formName?: string
    submitButtonName: string,
    submitHandler?: any
    changeHandler?: any
}


const Form = ({ fields, requestMethod, formName, submitButtonName, submitHandler, changeHandler } : props) => {
    
    return (
        <div className="flex flex-col items-center justify-center mt-56">
            <div className="flex flex-col bg-neutral-600 uppercase font-extralight text-2xl text-white w-3/12 rounded-t p-3 shadow">
                {formName}
            </div>
            <div className="flex flex-col w-3/12 rounded-b bg-zinc-800 shadow">
                <form method={requestMethod} onChange={changeHandler} onSubmit={submitHandler}>
                    {fields.map((field) => (
                        <div key={field.name} className="flex flex-col text-white p-3">
                            <input
                                placeholder={field.name}
                                name={field.name}
                                type={field.type}
                                required={field.required}
                                className="bg-transparent py-3 pl-3 border-b border-white shadow hover:opacity-40"/>
                        </div>
                    ))}
                    <div className="flex flex-col p-3 w-32">
                        <button className="rounded bg-amber-700 shadow py-3 text-white hover:opacity-40">{submitButtonName}</button>
                    </div>
                </form>
            </div>
        </div>
    
    );
}

export { Form }