import { useParams } from 'react-router-dom';

const aboutData = [
  {
    slug: 'about-app',
    title: 'About the app',
    description:
      `This to-do list app provides a simple and intuitive interface for managing your daily tasks and staying organized. You can easily create new tasks and mark them as complete when you're done. "With this app, you can stay on top of your to-do list and focus on what's important, whether you're at work, at home, or on the go.`
  },
  {
    slug: 'about-developer',
    title: 'About the developer',
    description:
      `I am Enoch Taiwo, passionate about creating software that makes a real difference in people's lives. I take pride in the fact that this to-do app helps users stay productive, reduce stress, and achieve their goals. Whether I am working on new features or improving existing ones, my dedication to my craft is evident in every aspect of my work.
      You can reach out to me on Github (@TaiwoEnoch).`
  },
];

const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default SinglePage;
