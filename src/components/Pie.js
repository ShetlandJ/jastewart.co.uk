import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const defaultLabelStyle = {
    fontSize: '8px',
    fontFamily: 'sans-serif',
};

export default function renderPie({ data, partyName }) {

    const legend = (
        data.map((d, index) => (
            <div class="flex align-center pad-top">
                <div
                    className="legend"
                    style={{
                        backgroundColor: d.color,
                        height: 10,
                        width: 60,
                    }}
                />
                <span
                    style={{
                        paddingLeft: 10
                    }}
                >
                    {index === 0 ? 'Mentions party' : 'Does not mention party'}</span>
            </div>
        ))
    )

    return (
        <div>
            <h2 className="flex-center">{partyName}</h2>
            <PieChart
                data={data}
                label={({ dataEntry }) => `${dataEntry.value}%`}
                labelStyle={defaultLabelStyle}
            />

            {legend}
        </div>
    )
}