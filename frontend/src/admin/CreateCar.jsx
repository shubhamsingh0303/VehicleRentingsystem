import React, { Fragment, useState } from 'react';
import "./CreateCar.css";
import { createCar } from '../redux/actions/CarAction';
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from 'react-redux';

const CreateCar = () => {
    const dispatch = useDispatch();
    const [VehicleName, setVehicleName] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [category, setCategory] = useState('');
    const [location, setlocation] = useState('');
    const [KMPL, setKMPL] = useState('');
    const [TransMatin, setTransMatin] = useState('Null');
    const [Units, setUnits] = useState('Null');
    const [PricePerDay, setPricePerDay] = useState('');

    const [image, setImage] = useState('');
    const [imagepre, setImagepre] = useState('');

    const changeFileHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            setImagepre(reader.result);
            setImage(file);
        };
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('VehicleName', VehicleName);
        myForm.append('fuelType', fuelType);
        myForm.append('category', category);
        myForm.append('location', location);
        myForm.append('KMPL', KMPL);
        myForm.append('TransMatin', TransMatin);
        myForm.append('Units', Units);
        myForm.append('PricePerDay', PricePerDay);
        myForm.append('file', image);

        dispatch(createCar(myForm))
    };
    return (
        <Fragment>
            <div className="container">
                <div className="write">
                    <img className="writeImg" src={imagepre} alt="" />
                    <form className="writeForm" onSubmit={submitHandler}>
                        <div className="writeFormGroup">
                            <label htmlFor="fileInput">
                                <AiOutlinePlus className="writeIcon " />
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} required name="avatar" accept="image/*" onChange={changeFileHandler} />
                        </div>
                        <div className='writeFormGroup'>
                            <input type="text" placeholder="Vehicle Name" className="writeInput" autoFocus={true} onChange={e => setVehicleName(e.target.value)} required />
                        </div>
                        <div className='writeFormGroup'>
                            <input type="text" placeholder="FuelType" className="writeInput" autoFocus={true} onChange={e => setFuelType(e.target.value)} required />
                        </div>
                        <div className='writeFormGroup'>
                            <input type="text" placeholder="Add Category" className="writeInput" autoFocus={true} onChange={e => setCategory(e.target.value)} required />
                        </div>
                        <div className='writeFormGroup'>
                            <input type="text" placeholder="Add location" className="writeInput" autoFocus={true} onChange={e => setlocation(e.target.value)} required />
                        </div>
                        <div className='writeFormGroup'>
                            <input type="text" placeholder="Enter KMPL" className="writeInput" autoFocus={true} onChange={e => setKMPL(e.target.value)} required />
                        </div>
                        <div className='writeFormGroup'>
                            <input type="text" placeholder="Enter Car Transition Manual/Auto" className="writeInput" autoFocus={true} onChange={e => setTransMatin(e.target.value)} />
                        </div>
                        <div className='writeFormGroup'>
                            <input type="text" placeholder="Car Units" className="writeInput" autoFocus={true} onChange={e => setUnits(e.target.value)} />
                        </div>
                        <div className='writeFormGroup'>
                            <input type="text" placeholder="Enter Vehicle Rent Per/day" className="writeInput" autoFocus={true} onChange={e => setPricePerDay(e.target.value)} required />
                        </div>


                        <div className="text-center" style={{ marginLeft: "10%" }}>
                            <button type="submit" class="btn btn-success w-75">Add Vehicle</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateCar
