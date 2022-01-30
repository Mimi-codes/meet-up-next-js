//our-domain.com/
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS =  [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://lh5.googleusercontent.com/p/AF1QipPmZunGZtYq0nYLHNTPH6fdq6jsT0CL6bCKtDGg',
        address: 'The Commodores Cafe and Grill, Ilorin',
        description: 'This is our first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://lh5.googleusercontent.com/p/AF1QipPmZunGZtYq0nYLHNTPH6fdq6jsT0CL6bCKtDGg',
        address: 'The Commodores Cafe and Grill, Ilorin',
        description: 'This is our second meetup!'
    }

]
function HomePage() {
    return <Layout >
        <MeetupList meetups={DUMMY_MEETUPS} />
</Layout>
}

export default HomePage;


