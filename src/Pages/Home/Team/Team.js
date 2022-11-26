import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, [])

    return (
        <div className='mb-28'>
            <div className='text-center'>
                <h5 className='text-[#FF3811] font-bold text-lg mt-16 mb-5'>Team</h5>
                <h2 className='text-[#151515] font-bold text-[45px] '>Meet Our Team</h2>
                <p className="pt-5 text-[#737373] w-2/5 mx-auto">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className='mt-7 mb-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    team.map(tem => <TeamCard
                        key={tem._id}
                        tem={tem}
                    ></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;