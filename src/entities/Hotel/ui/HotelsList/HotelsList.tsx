import classNames from 'classnames';
import cls from './HotelsList.module.scss';
import { memo, useCallback } from 'react';
import { Hotel } from 'entities/Hotel';
import { Typography } from 'shared/ui/Typography/Typography';
import { HotelListItem } from '../HotelListItem/HotelListItem';

interface HotelsListProps {
    className?: string
    hotels: Hotel[]
    isLoading: boolean;
    checkIn: string;
    checkOutDays: string;
}

export const HotelsList = memo((props: HotelsListProps) => {
    const {
        className,
        isLoading,
        hotels,
        checkIn,
        checkOutDays
    } = props;

    const renderHotelItem = useCallback((hotel: Hotel) => (
        <HotelListItem
            hotel={hotel}
            key={hotel.hotelId}
            checkIn={checkIn}
            checkOutDays={checkOutDays}
        />
    ), [checkIn, checkOutDays]);

    if (!isLoading && !hotels.length) {
        return <Typography>Нет результатов</Typography>;
    }

    return (
        <div className={classNames(cls.hotelsList, {}, [className])}>
            {hotels.map(renderHotelItem)}
            {isLoading&&<Typography>Идет загрузка...</Typography>}
        </div>
    );
});

