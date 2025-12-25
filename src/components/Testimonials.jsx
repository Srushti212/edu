import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Rutik Bhausaheb Nikam",
            role: "10th CBSE",
            text: "This is one of the best institute of Nasik. They provide quality education along with quality study material. Their faculties are very supportive. I can say it is the best institute."
        },
        {
            name: "Tanmay Kailas Hirodkar",
            role: "10th SSC",
            text: "I am very thankful to my teachers for building my foundation along with good grades in boards !"
        },
        {
            name: "Varad Neve",
            role: "10th CBSE",
            text: "Supportive, helping me improve so quickly, fantastic lesson, has a tendency of extracting knowledge that I did not know I had, and one more thing that Sandeep sir is having a special ability to develop relationships with their students."
        },
        {
            name: "Kartik Sharma",
            role: "10th ICSC",
            text: "Apex Learning hub is a very good place Learn and create new things. It has a very good and positive environment to study. Sandip sir is a very good teacher of physics and maths and he explains every concept clearly and clears all the doubts of the students. He is a very good teacher and a good gentleman."
        },
        {
            name: "Anushka Vikas Nikam",
            role: "10th CBSE",
            text: "I think for a teacher the most important thing is making there students comfortable and motivat them and make them understand everything properly."
        },
        {
            name: "Mehul Chaudhari",
            role: "10th CBSE",
            text: "Sir , You teach very nice . I love that you take so much revision and also tell us to solve R.D Sharma Book .So it is the best way to come up with doubts and get clear about all doubts. Its covers up syllabus faster."
        },
        {
            name: "Ashutosh Darekar",
            role: "9th ICSE",
            text: "He has a good nature, he understands the student and helps him solve his problem by sitting beside him and he makes the student solve the sum until the student himself understands it. He also cares for the student."
        },
        {
            name: "Varad Nitharwal",
            role: "10th CBSE",
            text: "Sir , You teach very nice . I love that you take so much revision and also tell us to solve R.D Sharma Book .So it is the best way to come up with doubts and get clear about all doubts. Its covers up syllabus faster."
        },
        {
            name: "Sanchita Weljali",
            role: "10th SSC",
            text: "Apex Learning Hub is the best place to start the foundation for JEE and NEET preparations. Though there are many good institutes in nasik but they lack in personal attention towards each child. Faculty especially for science and math is good here for both boards and foundation. I am very thankful to my teachers for building my foundation along with good grades in boards !"
        },
        {
            name: "Athrav Hirodkar",
            role: "10th SSC",
            text: "Apexlearninghub is revolution in education industry. It will help students to conduct self paced learning at home. Perfect partner to score more in exams."
        },
        {
            name: "Kautuk Khillare",
            role: "11th HSC",
            text: "I take maths lessons for 60 minutes once a day. ... I always have a lot of fun and can have plenty of time to speak at the lesson in. Sir @_sandeepkumar is very friendly and he explains the difficult sums in easy way which is much understandable."
        },
        {
            name: "Vaibhav Jagtap",
            role: "10th CBSE",
            text: "Your teaching is excellent. You understand each and every student and make learning fun. And class is very good. It helps in learning thing."
        }
    ];

    return (
        <section id="testimonials" className="section-padding">
            <h2 className="section-title">What Student Says</h2>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem'
            }}>
                {reviews.map((review, index) => (
                    <div key={index} className="glass" style={{
                        padding: '2rem',
                        position: 'relative',
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                        borderRadius: '16px'
                    }}>
                        <div style={{
                            fontSize: '3rem',
                            color: '#FFC300',
                            position: 'absolute',
                            top: '-10px',
                            left: '20px',
                            opacity: 0.3,
                            fontFamily: 'serif'
                        }}>“</div>
                        <p style={{
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            color: '#334155',
                            marginBottom: '1.5rem',
                            fontStyle: 'italic',
                            minHeight: '80px'
                        }}>
                            "{review.text}"
                        </p>
                        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1rem' }}>
                            <h4 style={{ color: '#023E8A', fontWeight: '700', fontSize: '1.1rem' }}>{review.name}</h4>
                            <p style={{ color: '#0077B6', fontSize: '0.9rem', fontWeight: '600' }}>{review.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
