import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1000, 
        'Web Developer',
        1000,
        'Trader',
        1000,
        'Programmer',
        1000,
        'NFT flipper',
        1000
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-cyan-300 font-bold uppercase font-primary'
      repeat={Infinity}
    />
  );
};

export default TextEffect;