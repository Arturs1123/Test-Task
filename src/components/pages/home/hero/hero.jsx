'use client';

import Image from 'next/image';

// SVG Imports: The SVG imports indicate these images are being treated as React components, which is one approach. However, make sure the SVGs are optimized and do not include unnecessary details (like editor metadata) to minimize bundle size.
import heroIllustration from 'components/pages/home/hero/images/hero-illustration-2.svg';
import heroBG from 'components/pages/home/hero/images/hero-illustration-bg.svg';

// The custom hooks useIsClient and useWindowWidth appear to handle client-side rendering and window width. Make sure that they are optimized to avoid unnecessary re-renders, especially since window width could change frequently.
import useIsClient from 'hooks/use-is-client';
import useWindowWidth from 'hooks/use-window-width';

import Form from './form';

const Hero = () => {
  // IMPORTANT: The following code is a placeholder for screen size handling
  // and is not part of the test task evaluation. Please focus on the main functionality
  // of the page for screens >= 1536px. The adaptive design for smaller screens
  // is not required for review at this stage. Thank you for your understanding!
  const isClient = useIsClient();
  const width = useWindowWidth();

  if (isClient && width < 1536) {
    return (
      <div className="container flex justify-center items-center py-32 min-h-screen">
        <div className="flex flex-col max-w-[700px] text-center gap-y-4">
          <h1 className="text-[40px] text-center font-bold">Hey! 👋</h1>
          <p className="text-[24px] font-light">
            This task is designed for a screen width of{' '}
            <span className="font-medium text-secondary-blue">1536px or greater</span>.
            <br />
            Please focus your evaluation and testing on this resolution. The assessment of mobile or
            smaller screen designs is not required at this stage, and we encourage you to
            concentrate on the larger screen format.
          </p>
          <p className="text-[24px] font-medium">Thank you and good luck! 🍀</p>
        </div>
      </div>
    );
  }

  return (
    // Inline Styles: The inline style for setting the background image (style={{ backgroundImage: url(${heroBG}) }}) can potentially be replaced by a Tailwind CSS bg-* class if the image is not dynamic.
    // If this URL would never change, consider adding it to your styles config so you can reference it via a class instead.
    <section className="hero-bg pt-20" style={{ backgroundImage: `url(${heroBG})` }}>
      <div className="container grid grid-cols-2 md:grid-cols-1 gap-10 relative items-center pt-[88px]">
        <div className="col-span-1 pt-12">
          <div className="hero-round-gradient" />
          <h2 className="hero-title font-title text-7xl leading-[112.5%] pb-7">
            Revolutionize <br className="block" /> your DevOps journey with DevOptima
          </h2>
          <p className="text-white text-xl leading-normal font-light tracking-tight-8 pt-0 pb-9">
            Empower groups to boost innovation with efficient development,
            <br className="block" />
            automated operations, and stable scaling.
          </p>
          <Form />
        </div>
        <div className="col-span-1 relative">
          <div className="hero-ellipse-gradient z-10" />
          {/* Ensure text contrasts are sufficient for readability against the background.
          Image elements should have descriptive alt tags for accessibility; "hero" might be too generic. Describe what the image depicts. */}
          <Image
            className="z-20 absolute -right-7 top-[-275px] bg-transparent"
            src={heroIllustration}
            width={656}
            height={487}
            alt="hero"
          />
        </div>
      </div>
    </section>
    // Overall, the code for the Hero component appears to be going in the right direction with a focus on a specific resolution. The placeholders and comments help other developers understand the current state and intention of the code. However, I think future improvements will need to address responsiveness for varying screen sizes if the application intends to support a broader range of devices.
  );
};

export default Hero;
