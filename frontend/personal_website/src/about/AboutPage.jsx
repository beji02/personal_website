import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LaptopIcon from '@mui/icons-material/Laptop';

import React, { useState, useEffect } from 'react';

function AboutPage() {
    const [timelineItems, setTimelineItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/timeline_items')
            .then(res => res.json())
            .then(data => {
                // console.log('Timeline items:', data);
                setTimelineItems(data);
            });
    }, []);

    return (
        <>
            <Container>
                {/* add a section to write intro about me, add a photo */}
                <div style={{ display: 'flex', alignItems: 'center', margin: '32px 0' }}>
                    {/* Circular image */}
                    <div
                        style={{
                            width: '600px',
                            height: '600px', // same as width to make it square
                            borderRadius: '50%',
                            overflow: 'hidden',
                            flexShrink: 0,
                            marginRight: '24px', // spacing between image and text
                            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                            border: '2px solid lightgray',
                        }}
                    >
                        <img
                            src="/profile_picture.jpg"
                            alt="Photo of me"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>

                    {/* Short description */}
                    <div>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'left' }}>
                            Hi, I'm Andrei
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'left' }}>
                            I'm passionate about trading & machine learning.<br />
                            I have a background spanning academia and industry – with a love for solving hard problems, climbing, and learning new things.<br />
                            On this site you'll find my timeline, interests, favorite books, projects, and more.
                        </Typography>
                    </div>
                </div>
                <Typography variant="h5" component="h2" gutterBottom>
                        Background
                </Typography>
                <Timeline position="alternate">
                    {timelineItems?.map(item => (
                        <TimelineItem key={item.id}>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                {item.period}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color={item.type === "school" ? "grey" : "primary"}>
                                    {item.type === "school" ? <SchoolIcon /> :
                                        item.type === "job" ? <LaptopIcon /> :
                                            <RepeatIcon />}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span" sx={{ textAlign: item.align_description, display: 'block' }}>
                                    {item.title}
                                </Typography>
                                <Typography
                                    component="div"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                    sx={{ textAlign: item.align_description }}
                                />
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
                <div style={{ margin: '40px 0', textAlign: 'left' }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Contact
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.
                    </Typography>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 16 }}>
                        <li>
                            <strong>Email:</strong>{' '}
                            <a>bejan.andrei.official[at]gmail.com</a>
                        </li>
                        <li>
                            <strong>LinkedIn:</strong>{' '}
                            <a href="https://www.linkedin.com/in/beji02" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/beji02
                            </a>
                        </li>
                        <li>
                            <strong>GitHub:</strong>{' '}
                            <a href="https://github.com/beji02" target="_blank" rel="noopener noreferrer">
                            github.com/beji02
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </>
    )
}

export default AboutPage
