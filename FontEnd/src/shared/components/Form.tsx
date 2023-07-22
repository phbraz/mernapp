import React, {forwardRef} from "react";

interface Field {
    name: string,
    type: string,
    required: boolean
    
}

interface Props {
    fields: Field[],
    requestMethod: string,
    allowAutocomplete?: boolean,
    formName?: string,
    submitButtonName: string,
    secondButtonName?: string,
    submitHandler?: any,
    changeHandler?: any,
    secondButtonHandler?: any
}


const Form =
    forwardRef<HTMLFormElement, Props>((
        {
            fields,
            requestMethod,
            allowAutocomplete,
            formName,
            submitButtonName,
            secondButtonName,
            submitHandler,
            changeHandler,
            secondButtonHandler
        }, ref) => {
        return (
        <div className="flex flex-col items-center justify-center mt-56">
            <div className="flex flex-col bg-neutral-600 uppercase font-extralight text-2xl text-white w-3/12 rounded-t p-3 shadow">
                {formName}
            </div>
            <div className="flex flex-col w-3/12 rounded-b bg-zinc-800 shadow">
                <form ref={ref} method={requestMethod} onChange={changeHandler} onSubmit={submitHandler}>
                    {fields.map((field) => (
                        <div key={field.name} className="flex flex-col text-white p-3">
                            <input
                                placeholder={field.name}
                                name={field.name}
                                type={field.type}
                                required={field.required}
                                className="bg-transparent py-3 pl-3 border-b border-white shadow hover:opacity-40"
                                autoComplete={allowAutocomplete ? "on" : "off" }
                            />
                        </div>
                    ))}
                    <div className="flex flex-row justify-between p-3">
                        <button className="rounded bg-amber-700 shadow py-3 w-20 text-white hover:opacity-40">{submitButtonName}</button>
                        {secondButtonName !== undefined && (
                            <button className="rounded bg-transparent shadow py-3 w-20 text-white hover:opacity-40" onClick={secondButtonHandler}>{secondButtonName}</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
});

export { Form };