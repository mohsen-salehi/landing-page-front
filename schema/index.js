import * as Yup from 'yup';


export  const RequestValidation = Yup.object().shape({
    contact : Yup.number().typeError('شماره باید عدد و انگلیسی باشد').required("این فیلد الزامی می باشد!"),

})

export const OtpValidation = Yup.object().shape({
    token : Yup.number().typeError('شماره باید عدد و انگلیسی باشد').required("این فیلد الزامی می باشد!")
})

