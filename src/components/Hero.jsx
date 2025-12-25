import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'center',
            minHeight: '85vh',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }} className="section-padding">
            {/* Background Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div style={{ zIndex: 2, maxWidth: '900px' }}>
                <h2 style={{
                    fontSize: '1.1rem',
                    color: '#005f99',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    background: 'rgba(255,255,255,0.6)',
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    backdropFilter: 'blur(5px)'
                }}>
                    Government Reg. Udyam-MH-23-0020244
                </h2>

                <h1 style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    lineHeight: '1.1',
                    margin: '1rem 0',
                    fontWeight: '800',
                    color: '#1a3c59',
                    textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
                }}>
                    Rapid Solutions for <span style={{ color: '#0077b6' }}>Your Education!</span>
                </h1>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                    <button className="btn"
                        onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            fontSize: '1.3rem',
                            padding: '15px 40px',
                            boxShadow: '0 10px 20px rgba(255, 215, 0, 0.3)'
                        }}>
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
