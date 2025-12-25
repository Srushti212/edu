import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Personal Attention",
            desc: "We provide personal attention to all of our ward. Our faculties are always available to help individual."
        },
        {
            title: "Daily Practice Paper",
            desc: "We provide DPP (daily practice paper)."
        },
        {
            title: "Weekly Test",
            desc: "We conduct weekly test and day after result is displayed."
        },
        {
            title: "Remedial Classes",
            desc: "Remedial classes are provided for weak student based on their previous result."
        }
    ];

    return (
        <section id="features" className="section-padding">
            <h2 className="section-title">Why choose us?</h2>
            <p style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 3rem',
                fontSize: '1.2rem',
                color: '#555'
            }}>
                We conduct all topics and chapter with demonstrative method of teaching.
            </p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {features.map((feature, index) => (
                    <div key={index} className="glass" style={{
                        padding: '2rem',
                        textAlign: 'left',
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))',
                        borderLeft: '5px solid #00BFFF',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#005f99', marginBottom: '1rem' }}>{feature.title}</h3>
                        <p style={{ color: '#555', lineHeight: '1.6' }}>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
