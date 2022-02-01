//our-domain.com/
//import Layout from "../components/layout/Layout";
//import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
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
function HomePage(props) {
return <>
        <MeetupList meetups={props.meetups} />
</>
}


//export async function getServerSideProps(context) {
//const req = context.req;
//const res = context.res;

    //fetch data from an API
    
  //  return {
//props: {
  //  meetups: DUMMY_MEETUPS
//}
  //  }
//}

export async function getStaticProps() {
    //fetch data from an API
    //always need to return an object
  return {
        props: {
            meetups: DUMMY_MEETUPS 
        },
        revalidate: 10
    }
 }

export default HomePage;


