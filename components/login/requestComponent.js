import React, {useContext} from 'react';
import {Form, Formik} from "formik";
import { RequestValidation} from "@/schema";
import InputValidation from "@/components/public/inputs/inputValidation";
import {StoreContext} from "@/store";

function RequestComponent({status , setStatus}) {

    const {tokenState , tokenDispatch} = useContext(StoreContext)

    const initialValue = {
        contact : "" ,
    }
    const onSubmit = ({contact} , action) => {
        tokenDispatch({
            type : "REQUEST" ,
            payload : contact
        })
        setTimeout(() => {
            setStatus("otp")
            action.resetForm()
            action.setSubmitting(false)
        } , 400)
    }

    return (
        <section className="min-h-screen min-w-full flex flex-wrap justify-center items-center">
            <Formik initialValues={initialValue} validationSchema={RequestValidation} onSubmit={onSubmit}>
                {
                    props => (
                        <Form className="p-3 w-[90%] md:w-[400px] min-h-[300px] flex content-evenly flex-wrap rounded-xl shadow shadow-orange-400">
                            <h1 className="w-full flex text-xl justify-center items-center">ورود</h1>
                            <InputValidation
                                placeholder="شماره موبایل"
                                type="tel"
                                name="contact"
                                maxLength={11}
                            />
                            <div className="w-full flex flex-wrap justify-center items-center">
                                <button type="submit" className="bg-orange-500 rounded p-2 w-full">
                                    ارسال کد
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </section>
    );
}

export default RequestComponent;