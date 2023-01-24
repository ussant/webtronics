import React, {useState} from 'react';
import {useForm} from "react-hook-form"
import axios from "axios";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../../styles/ContactUs.module.css"

type FormInputData = {
    name: string,
    email: string,
    phone: string
}
enum FormInputs {
    name='name',
    email="email",
    phone="phone"
}

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required()
});

const Index = (): JSX.Element => {
    const [isStatusVisible, setStatusVisible] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputData>({
        resolver: yupResolver(schema),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        shouldUseNativeValidation: false
    });

    const onSubmit = (data: FormInputData): void => {
        try {
            axios({method: "post", url: "http://localhost:3004/feedback", data})
            setStatusVisible(true);
            reset()
        } catch (err) {
            console.error("error in [onSubmit]", err)
        }
    };

    return (
       <section className={styles.container}>
           <h2 className={styles.title}>Contact Us</h2>
           <p>Do you have any kind of help please contact with us.</p>
           <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <input
                   className={styles.input}
                   type={"text"}
                   placeholder={"name"}
                   {...register(FormInputs.name, { required: true })}
               />
               <p>{errors.name?.message}</p>
               <input
                   className={styles.input}
                   type={"email"}
                   placeholder={"email"}
                   {...register(FormInputs.email, { required: true })}
               />
               <p>{errors.email?.message}</p>
               <input
                   className={styles.input}
                   type={"tel"}
                   placeholder={"phone"}
                   {...register(FormInputs.phone, { required: true })}
               />
               <p>{errors.phone?.message}</p>
               <button className={styles.button}>Send</button>
           </form>
           {isStatusVisible && <strong className={styles.status}>Data has been sent</strong>}
       </section>
    );
};

export default Index;
