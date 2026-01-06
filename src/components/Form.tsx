import {type FormEvent, useState} from "react";
import {useAppDispatch} from "../app/hooks.ts";
import {setCity as putCity} from "../features/city/citySlice.ts";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const handleClickSubmit = (e:  FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(putCity(city.toLowerCase().trim()));
        setCity('');
    }

    return (
        <form onSubmit={handleClickSubmit}>
            <input
                type={"text"}
                value={city}
                onChange={e => setCity(e.target.value)}
            />
            <button type={'submit'}>Get Weather</button>
        </form>
    )
}

export default Form;