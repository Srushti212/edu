import React from 'react';

const Enquiry = () => {
    return (
        <section id="enquiry" className="section-padding" style={{
            background: 'linear-gradient(135deg, #e0f7fa 0%, #e1f5fe 100%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh'
        }}>
            <div style={{ maxWidth: '700px', width: '90%', textAlign: 'center' }}>
                <h2 className="section-title" style={{ left: 'auto', transform: 'none' }}>Student Enquiry Form</h2>
                <div className="glass" style={{ padding: '3rem', background: '#fff', borderRadius: '30px' }}>
                    <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem', lineHeight: '1.6' }}>
                        Fill the enquiry form to check the availability of the ward and batch
                        (we conduct 5th, 6th, 7th, 8th, 9th, 10th, 11th, 12th of HSC, SSC, CBSE Board).
                        <br /><br />
                        For any other query please send the details by filling contact us form.
                    </p>
                    <a
                        href="https://docs.google.com/forms/u/0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            fontSize: '1.2rem',
                            padding: '15px 40px',
                            display: 'inline-block',
                            textDecoration: 'none'
                        }}
                    >
                        Enquiry Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Enquiry;
