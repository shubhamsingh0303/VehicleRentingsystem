import './App.css';
import { ProtectedRoute } from "protected-route-react";
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/footer'
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import CarSelection from './components/BillingPage/CarSelection';
import BillingSection from './components/BillingPage/BillingSection';
import { loadUser } from './redux/actions/userAction';
import { useState, useEffect } from 'react';
import UserProfile from './admin/UserProfile';
import AllUser from './admin/AllUser';
import CreateCar from './admin/CreateCar';
import MyCars from './admin/MyCars';

function App() {
    const dispatch = useDispatch();

    const [selectedLocation, setSelectedLocation] = useState('Location'); // State to hold the selected location

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };
    
    const { isAuthenticated } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);
    return (
        <>
            <Header selectedLocation={selectedLocation} onLocationChange={handleLocationChange} /> {/* Pass selectedLocation and onLocationChange as props */}
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/BillingSection/:id' element={<BillingSection />}></Route>
                <Route path='/carSelection/:categoryName' element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <CarSelection />
                    </ProtectedRoute>}>
                </Route>
                <Route path='/account' element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <UserProfile />
                    </ProtectedRoute>}>
                </Route>
                <Route path='/allUsers' element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <AllUser />
                    </ProtectedRoute>}>
                </Route>
                <Route path='/createCar' element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <CreateCar />
                    </ProtectedRoute>}>
                </Route>
                <Route path='/myCars' element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <MyCars />
                    </ProtectedRoute>}>
                </Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;