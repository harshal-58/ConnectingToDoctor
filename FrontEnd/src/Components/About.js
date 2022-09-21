import React from 'react'

const About = () => {
    return (
        <>
            <div className="container">
                <h3 className="py-3">About Us</h3>
                <p>
                    Connecting2Doctor is a platform for booking medical consultations with specialist doctors in your city online. Patient can book an
                    appointment by selecting any of the time slot given by doctor.</p>
                <p> Some additional functionalities are - user can search a
                    doctor by area and specialization, both user and doctor can manage their booked appointments.
                </p>
                <p className="text-muted">Regards, from creators:
                    <ul>
                        <li>Akash Jaiswal</li>
                        <li>Harshal Jawale</li>
                        <li>Neha Ukey</li>
                        <li>Shubham Mungase</li>
                        <li>Atish Butkar</li>
                    </ul>
                </p>
            </div>
        </>
    )
}

export default About
