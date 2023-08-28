import React, {useContext} from 'react';
import {Form, Formik} from "formik";
import {OtpValidation} from "@/schema";
import InputValidation from "@/components/public/inputs/inputValidation";
import {StoreContext} from "@/store";
import {router} from "next/client";
import {useRouter} from "next/router";

function OtpComponent() {
    const router = useRouter()
    const {tokenState , tokenDispatch} = useContext(StoreContext)
    const initialValue = {
        token : "" ,
    }
    const onSubmit = ({token} , action) => {
        tokenDispatch({type : "GET_TOKEN" , payload : {token}})
        setTimeout(() => {
            router.push("/")
            action.resetForm()
            action.setSubmitting(false)
        } , 400)
    }
    return (
        <section className="min-h-screen min-w-full flex flex-wrap justify-center items-center">
            <Formik initialValues={initialValue} validationSchema={OtpValidation} onSubmit={onSubmit}>
                {
                    props => (
                        <Form className="p-3 w-[90%] md:w-[400px]  min-h-[300px] flex content-evenly flex-wrap rounded-xl shadow shadow-orange-400">
                            <h1 className="w-full flex text-xl justify-center items-center">کد ارسالی را وارد کنید</h1>
                            <InputValidation
                                placeholder="کد تایید"
                                type="tel"
                                name="token"
                                maxLength={5}
                            />
                            <div className="w-full flex flex-wrap justify-center items-center">
                                <button  disabled={props.isSubmitting} className="bg-orange-500 rounded p-2 w-full">
                                    تایید
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </section>
    );
}

export default OtpComponent;