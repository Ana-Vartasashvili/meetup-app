import MeetupList from "../components/meetups/MeetupList";

const MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://lp-cms-production.imgix.net/image_browser/Abanotubani-sulfur-baths-tbilisi.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1946",
    address: "Georgia, Tbilisi",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://lp-cms-production.imgix.net/image_browser/Abanotubani-sulfur-baths-tbilisi.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1946",
    address: "Georgia, Tbilisi",
    description: "Second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
