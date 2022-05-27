import React from 'react';
import stringHash from "string-hash";

export type Position = {
    title: string,
    start: Date,
    end?: Date,
}

export type WorkExperienceProps = {
    employer: string,
    positions: Position[],
    highlights: string[],
    summary: string,
}

export const PositionDate = (props: { date?: Date }) => {
    const date = props.date;
    if (date == null) {
        return <>Present</>;
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return <time dateTime={`${year}-${month}`}>{year}-{month}</time>;
}

export const WorkExperiencePosition = (position: Position) => {
    const emdash = <>&mdash;</>;
    return (
        <div className='position'>
            <div className='title'>{position.title}</div>
            <div className='range'>
                <PositionDate date={position.start}></PositionDate>
                &nbsp; {emdash} &nbsp;
                <PositionDate date={position.end}></PositionDate>
            </div>
        </div>
    );
};

export const WorkExperience = (props: WorkExperienceProps) => {
    const positions = props.positions.map((position) => {
        return <WorkExperiencePosition
            key={stringHash(position.title)}
            title={position.title}
            start={position.start}
            end={position.end}
        />
    });
    const highlights = props.highlights.map((item) => <li key={stringHash(item)}>{item}</li>)

    return (
        <div className='work-history-item'>
            <div className='employer'>{props.employer}</div>
            {positions}
            {highlights && <ul className='highlights'>{highlights}</ul>}
            <div className='summary'>{props.summary}</div>
        </div>
    );
};

export default WorkExperience