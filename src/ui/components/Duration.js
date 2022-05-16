import React, {useEffect, useState} from "react";
import {Radio, Typography} from 'antd';

import {
    setDuration,
    subscribeToDuration,
} from "../../application/durationUseCases";
import {PROPS} from "../../PROPS";

export const Duration = () => {
    const [value, setValue] = useState(0);
    const {Title} = Typography;

    useEffect(() => {
        subscribeToDuration(setValue, true);
    }, []);

    return (
        <div style={{margin: "1rem auto"}}>
            <Title level={4}>Subdivisions: {PROPS.DURATION.AVAILABLE.find(duration => value === duration)}</Title>

                {PROPS.DURATION.AVAILABLE.map((duration) => (
                    <Radio.Button
                        style={{width: "6rem", height: "5rem", margin: ".5rem"}}
                        checked={value === duration}
                        key={duration}
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                    >
                        <img src={`./svg/${duration}.jpg`} style={{height: "100%", width: "100%"}} alt={`Subdivision ${duration}`}/>
                    </Radio.Button>
                    )
                )}

        </div>
    );
};
