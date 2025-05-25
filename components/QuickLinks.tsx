'use client';

export default function QuickLinks({ copyEmail }: { copyEmail: () => void }) {
  const links = [
    {
      label: 'Resume',
      icon: '/File.png',
      href: 'https://docs.google.com/document/d/10qlqZVFDV_D6MUNa9RuC4EwqFTjKMolasIogbjmZ1xc/edit?usp=sharing',
    },
    {
      label: 'Email',
      icon: '/email.png',
      onClick: copyEmail,
    },
    {
      label: 'LinkedIn',
      icon: '/linkedin.png',
      href: 'https://www.linkedin.com/in/keenan-yang-5155682a2/',
    },
    {
      label: 'GitHub',
      icon: '/github.png',
      href: 'https://github.com/Keenan240',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 mt-10 ">
      {links.map((link, index) => {
        const CardContent = (
          <div
            className="w-[90vw] sm:w-[250px] max-w-[400px] h-[161px] bg-[#f8f8f8] rounded-[25px] shadow-md hover:shadow-lg hover:scale-[1.05] transition-all duration-300 cursor-pointer relative p-4 flex flex-col justify-between"
            onClick={link.onClick}
          >
            {/* Border layer */}
            <div className="absolute inset-0 border-[5px] border-white rounded-[25px] z-0 pointer-events-none" />

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
