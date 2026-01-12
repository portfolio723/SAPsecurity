import Image from 'next/image';

export function Logo(props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
  return (
    <Image
      src="/we.png"
      alt="SAP Security Expert Hub Logo"
      width={40}
      height={40}
      {...props}
    />
  );
}

    