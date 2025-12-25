import React from 'react';

const Courses = () => {
    const classes = [
        {
            name: "5th Class",
            boards: "CBSE, ICSE and SSC(Maharashtra) Board",

        },
        {
            name: "6th Class",
            boards: "CBSE, ICSE and SSC(Maharashtra) Board",

        },
        {
            name: "7th Class",
            boards: "CBSE, ICSE and SSC(Maharashtra) Board",

        },
        {
            name: "8th Class",
            boards: "CBSE, ICSE and SSC(Maharashtra) Board",

        },
        {
            name: "9th Class",
            boards: "CBSE, ICSE and SSC(Maharashtra) Board",

        },
        {
            name: "10th Class",
            boards: "CBSE, ICSE and SSC(Maharashtra) Board",

        },
        {
            name: "11th Class",
            boards: "CBSE and HSC(Maharashtra) Board",

        },
        {
            name: "12th Class",
            boards: "CBSE and HSC(Maharashtra) Board",

        },
    ];

    return (
        <section id="courses" className="section-padding" style={{ background: '#f8fafc' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 className="section-title">Classes</h2>
                <p style={{
                    textAlign: 'center',
                    fontSize: '1.2rem',
                    color: '#555',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    lineHeight: '1.6'
                }}>
                    Individual attention to all our ward. Energetic faculties to motivate your ward and guide for their future goal.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    {classes.map((cls, index) => (
                        <div key={index} className="glass" style={{
                            padding: '2rem',
                            background: '#fff',
                            borderRadius: '20px',
                            borderLeft: '5px solid #0077B6',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={{ fontSize: '1.5rem', color: '#023E8A', marginBottom: '1rem', fontWeight: '700' }}>{cls.name}</h3>
                            <div style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: '#0077B6', display: 'block', marginBottom: '0.5rem' }}>We conduct:</strong>
                                <span style={{ color: '#555' }}>{cls.boards}</span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
