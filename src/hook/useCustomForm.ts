import { useForm, SubmitHandler } from 'react-hook-form';
import { IAuthService } from '@/lib/container/interface/IAuthService';
import container from '@/lib/container';


type SignupFormValues = {
    email: string;
    password: string;
};

type LoginFormValues = {
    email: string;
    password: string;
};

type FormType = 'signup' | 'login';

const useCustomForm = (formType: FormType) => {
    const { handleSubmit, register, formState: { errors },
    } = useForm<
        FormType extends 'signup' ? SignupFormValues : LoginFormValues
    >();
    const authCtx = container.get<IAuthService>('IAuthService')
    const onSubmit: SubmitHandler<
        FormType extends 'signup' ? SignupFormValues : LoginFormValues
    > = async (data) => {
        if (formType === 'signup') {
            // Handle signup logic
            //authCtx.signUp()
            console.log("🚀 ~ file: useCustomForm.ts:26 ~ useCustomForm ~ signup data:", data)
            await authCtx.signUp(data.email,data.password)
        } else if (formType === 'login') {
            // Handle login logic
            console.log("🚀 ~ file: useCustomForm.ts:30 ~ useCustomForm ~ login data:", data)
            await authCtx.signIn(data.email,data.password)
        }
    };
    //console.log("🚀 ~ file: useCustomForm.ts:42 ~ useCustomForm ~ errors:", errors)

    return {
        handleSubmit,
        register,
        errors,
        onSubmit,
    };
};

export default useCustomForm;
