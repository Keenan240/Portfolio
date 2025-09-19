'use client';

export default function QuickLinks({ copyEmail }: { copyEmail: () => void }) {
  const links = [
    {
      label: 'Resume',
      icon: 'file.png', //Icon goes here
      href: 'https://docs.google.com/document/d/10qlqZVFDV_D6MUNa9RuC4EwqFTjKMolasIogbjmZ1xc/edit?usp=sharing',
    },
    {
      label: 'Email',
      icon: 'email.png', //Icon goes here
      onClick: copyEmail,
    },
    {
      label: 'LinkedIn',
      icon: 'linkedin.png', //Icon goes here
      href: 'https://www.linkedin.com/in/keenan-yang-5155682a2/',
    },
    {
      label: 'GitHub',
      icon: 'github.png', //Icon goes here
      href: 'https://github.com/Keenan240',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 mt-10 ">
      {links.map((link, index) => {
        const CardContent = (
          <div
            className="w-[90vw] sm:w-[250px] max-w-[400px] h-[161px] bg-[#F5F5F7] rounded-[25px]  cursor-pointer relative p-4 flex flex-col justify-between transition-transform duration-200 ease-in-out hover:-translate-y-2"
            onClick={link.onClick}
          >

            {/* Label */}
            <div className="bg-white rounded-[25px] px-5 py-2 font-semibold text-base z-10 w-fit">
              {link.label}
            </div>

            {/* Icon */}
            <img
              src={link.icon}
              alt={link.label}
              className="w-20 object-contain self-end z-10"
            />
          </div>
        );

        return link.href ? (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {CardContent}
          </a>
        ) : (
          <div key={index}>{CardContent}</div>
        );
      })}
    </div>
  );
}
