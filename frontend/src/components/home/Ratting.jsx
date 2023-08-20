import React, { Fragment } from 'react';
import "./Ratting.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination,Navigation } from 'swiper/modules';
import ReactStars from 'react-rating-stars-component';
import ProfilePicA from "../../assets/Images/h.gif";
import ProfilePicB from "../../assets/Images/g.gif";
import ProfilePicC from "../../assets/Images/f.gif";
import ProfilePicD from "../../assets/Images/e.gif";
import ProfilePicE from "../../assets/Images/d.gif";


const Ratting = () => {
    const ratingsData = [
        { name: 'Easy to use', rating: 4.5, profilePic: ProfilePicA },
        { name: 'Good Vehicle', rating: 3, profilePic: ProfilePicB },
        { name: 'Multiple type of Vehicle', rating: 5, profilePic: ProfilePicC },
        { name: 'Good UI', rating: 3, profilePic: ProfilePicD },
        { name: 'Bad network', rating: 2, profilePic: ProfilePicE },
      ];

    const options = {
        edit: false,
        color: "rgba(20, 20, 20, 0.1)",
        activeColor: "#BF952C" ,
        size: window.innerWidth < 600 ? 20 : 50,
        isHalf: true,
    }


    return (
        <Fragment>
            <Swiper slidesPerView={3} spaceBetween={10} pagination={{clickable:true}} navigation={true} modules={[Pagination, Navigation]} className="mySwiper reviewCard text-center">
            {ratingsData.map((item,index) => (
                <SwiperSlide key={index}>
                    <>
                    <img src={item.profilePic} alt="User" className='img-sizes' />
                    <p>{item.name}</p>
                   <div className='star-centered'><ReactStars {...options} value={item.rating} /></div>
                   </>
                </SwiperSlide>
            ))}
            </Swiper>
        </Fragment>
    )
}

export default Ratting
