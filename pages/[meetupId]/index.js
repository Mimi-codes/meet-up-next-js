import MeetupDetail from "../../components/meetups/MeetupDetail"


function MeetupDetails() {
    
    return (
    <MeetupDetail 
    image = "https://lh5.googleusercontent.com/p/AF1QipPmZunGZtYq0nYLHNTPH6fdq6jsT0CL6bCKtDGg" alt="first meetup"
title = 'First meetup'
address = 'The Commodore'
description = 'This is a first meetup'
/>
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {params: {
                meetupId: 'm1',
            }},
            {params: {
                meetupId: 'm2',
            }}
        ]
    }
}

export async function getStaticProps(context) {
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;
console.log(meetupId)
    return {
        props: {
            meetupData: {
                image: "https://lh5.googleusercontent.com/p/AF1QipPmZunGZtYq0nYLHNTPH6fdq6jsT0CL6bCKtDGg",
                id: meetupId,
                title: 'First Meetup',
address : 'The Commodore',
description: 'This is a first meetup',
            }
        }
    }
}

export default MeetupDetails