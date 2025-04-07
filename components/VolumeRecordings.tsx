"use client"

import Slider from 'rc-slider';
import { useEffect, useState } from 'react';

export default function VolumeRecordings() {
    const [defaultValue, setDefaultValue] = useState<number | undefined>(undefined);

    useEffect(() => {
        const volume = localStorage.getItem('volume_recordings');
        setDefaultValue(parseInt(volume || "80"));
    }, []);

    const completeSliding = (value: number) => {
        localStorage.setItem('volume_recordings', value.toString());
    }

    if (!defaultValue) return null;

    return (
        <div>
            <Slider
                defaultValue={defaultValue}
                handleStyle={{ backgroundColor: '#1e2938', borderColor: '#52d1de', width: 20, height: 20, opacity: 1, borderWidth: 3, boxShadow: "0 0 6px -2px #000" }}
                trackStyle={{ backgroundColor: '#52d1de', height: 10 }}
                railStyle={{ backgroundColor: '#404653', height: 10 }}
                dotStyle={{ borderColor: '#52d1de', height: 20 }}
                activeDotStyle={{ borderColor: '#52d1de', width: 20, height: 20 }}
                onChangeComplete={(value) => completeSliding(Array.isArray(value) ? value[0] : value)}
            />
        </div>
    )
}