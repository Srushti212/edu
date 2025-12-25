import React from 'react';

const Stats = () => {
    const stats = [
        { label: "Faculties", value: "2", icon: "👨‍🏫" },
        { label: "Batches", value: "6", icon: "📚" },
        { label: "Support Hours", value: "24", icon: "🕒" },
        { label: "Working Hours", value: "18", icon: "💼" }
    ];

    return (
        <section className="section-padding" style={{ background: 'var(--secondary-sky)' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                textAlign: 'center'
            }}>
                {stats.map((stat, index) => (
                    <div key={index} className="glass" style={{
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{stat.icon}</div>
                        <h3 style={{
                            fontSize: '2.5rem',
                            fontWeight: '800',
                            color: '#023E8A',
                            marginBottom: '0.5rem'
                        }}>
                            {stat.value}
                        </h3>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#0077B6',
                            fontWeight: '600'
                        }}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
