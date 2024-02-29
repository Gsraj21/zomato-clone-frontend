import hero from '../assets/theme.jpeg'
const Hero = () => {
  return (
    <div>
      <img
      src={hero}
        alt=""
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
};

export default Hero;
