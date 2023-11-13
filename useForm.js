import { useState } from 'react'


export const useForm = ( initialForm = {}) => {

    const [ formState, setFormState ] = useState(initialForm)

    // const {username, email, password} = formState

    const onInputChange = ({target}) => {
        
        const {name, value} = target
        // console.log({name,value})
        setFormState({
            ...formState,
            [name] : value,
        }
        );
        // console.log(formState)
    }

    const onResetForm =(event) =>{
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
