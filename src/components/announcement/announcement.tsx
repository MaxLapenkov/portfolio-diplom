import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper'
import AnnouncementBlock from '../announcementBlock/announcementBlock';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { announcement, getSchoolAnnouncementAsync } from '../../reducers/announcement';
import { userData } from '../../reducers/userData';

import './announcement.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Announcement = () => {
    SwiperCore.use([Virtual, Navigation, Pagination]);
    const currentUser = useAppSelector(userData)
    const schoolAnnouncements = useAppSelector(announcement)
    const dispatch = useAppDispatch();
    const getSchoolAnnouncements = (schoolId: number) => {
        dispatch(getSchoolAnnouncementAsync({schoolId}))
    }
    useEffect(() => {
        if (currentUser.data?.id) getSchoolAnnouncements(currentUser.data.school.id)  
    }, [currentUser.data?.id]);

    if(!currentUser.data) return null

    return (
        <section className="announcement">
            <h2 className="announcement__title">Объявления</h2>
            <div className="announcement__swiper-container">
                {schoolAnnouncements.data && 
                (<Swiper
                    virtual
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={80}
                    slidesPerView={2}
                    >
                        {schoolAnnouncements.data?.map((announcement) => (
                            <SwiperSlide key={announcement.id}>
                                <AnnouncementBlock blockData={announcement}/>
                            </SwiperSlide>
                        ))}
                </Swiper>)
                }
            </div>
        </section>
    )
}

export default Announcement;