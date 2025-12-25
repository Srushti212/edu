import React from 'react';

const Team = () => {
    const teamMembers = [
        { name: "Sandeep Kumar", subject: "Maths & Physics" },
        { name: "Ankit Kale", subject: "Chemistry" },
        { name: "Tanushka Nikam", subject: "BIO" },
        { name: "Ratnesh Sharma", subject: "Maths" }
    ];

    return (
        <section id="team" className="section-padding" style={{ background: '#f8fafc' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h2 className="section-title">Our Team</h2>
                <p style={{
                    maxWidth: '800px',
                    margin: '0 auto 3rem',
                    fontSize: '1.1rem',
                    color: '#555',
                    lineHeight: '1.6'
                }}>
                    Our team is energetic and potential and liable to provide best education, we work as motivator, supporter, mediator and friend of your ward also push all the student to achieve their best.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    justifyContent: 'center'
                }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="glass" style={{
                            padding: '2rem',
                            background: '#fff',
                            borderRadius: '15px',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease',
                            borderTop: '4px solid #0077B6'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: '#e0f2fe',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                fontSize: '2rem'
                            }}>
                                👨‍🏫
                            </div>
                            <h3 style={{ color: '#023E8A', marginBottom: '0.5rem', fontSize: '1.4rem' }}>{member.name}</h3>
                            <p style={{ color: '#0077B6', fontWeight: 'bold' }}>{member.subject}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
