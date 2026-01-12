import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      {...props}
      fill="currentColor"
    >
      <path d="M50,10A40,40,0,0,1,85.35,74.65L50,90L14.65,25.35A40,40,0,0,1,50,10M50,0A50,50,0,0,0,13.4,78.29L50,100L86.6,21.71A50,50,0,0,0,50,0Z" />
      <path d="M50,30A20,20,0,0,1,67.32,58.66L50,70L32.68,41.34A20,20,0,0,1,50,30m0-10a30,30,0,0,0-25.98,45L50,80l25.98-25A30,30,0,0,0,50,20Z" />
      <path d="M50,50a10,10,0,0,1,0,20,10,10,0,1,1,0-20Z" />
    </svg>
  );
}
