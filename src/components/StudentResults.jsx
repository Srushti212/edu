import React from 'react';
import saiImg from '../assets/sai_sonawane.png';
import nitishImg from '../assets/nitish_sonawane.png';
import laabhImg from '../assets/laabh_sharma.png';
import gayatriImg from '../assets/gayatri_chavan.png';
import renukaImg from '../assets/renuka_rajput.png';
import krishnaImg from '../assets/krishna_ghode.png';

const StudentResults = () => {
    const generalResults = [
        {
            name: "Sai Sonawane",
            board: "ICSE",
            percentage: "90.4%",
            image: saiImg
        },
        {
            name: "Nitish Sonawane",
            board: "CBSE",
            percentage: "67.4%",
            image: nitishImg
        },
        {
            name: "Laabh Vikrant Sharma",
            board: "ICSE",
            percentage: "82.4%",
            image: laabhImg
        }
    ];

    const results2024 = [
        {
            name: "Gayatri Sachin Chavan",
            board: "SSC",
            percentage: "82.2%",
            image: gayatriImg
        },
        {
            name: "Renuka Sankaraingh Rajput",
            board: "SSC",
            percentage: "79.6%",
            image: renukaImg
        },
        {
            name: "Krishna Ghode",
            board: "SSC",
            percentage: "70.5%",
            image: krishnaImg
        }
    ];

    const ResultCard = ({ student }) => (
        <div className="glass" style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
            borderRadius: '16px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            textAlign: 'center'
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '1rem',
                border: '4px solid white',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
                <img
                    src={student.image}
                    alt={student.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#023E8A',
                marginBottom: '0.5rem'
            }}>
                {student.name}
            </h3>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    background: '#CAF0F8',
                    color: '#0077B6',
                    fontWeight: '600',
                    fontSize: '0.8rem'
                }}>
                    {student.board}
                </span>
                <span style={{
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    background: '#4CC9F0',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '0.9rem'
                }}>
                    {student.percentage}
                </span>
            </div>
        </div>
    );

    return (
        <section className="section-padding" style={{ background: '#f8fafc' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* General Results Section */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title">Student Achievements</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {generalResults.map((student, index) => (
                            <ResultCard key={index} student={student} />
                        ))}
                    </div>
                </div>

                {/* 2024 Results Section */}
                <div>
                    <h2 className="section-title">Class of 2024 Stars</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {results2024.map((student, index) => (
                            <ResultCard key={index} student={student} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StudentResults;
