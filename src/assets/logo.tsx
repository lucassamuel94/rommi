import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      className={cn('fill-gray-1', className)}
      viewBox='0 0 992 286'>
      <path
        fill='#FFF'
        d='M0 204h37.333v-93.6l23.734.533c22.933.4 23.733.534 29.733 4 3.467 2 7.733 5.467 9.6 7.734 1.867 2.133 12.267 21.333 23.2 42.666L143.333 204h20.4c11.334 0 20.267-.4 20-1.067-.266-.533-10.8-21.466-23.466-46.533-12.534-25.067-22.934-45.867-22.934-46.267 0-.266 2-.933 4.4-1.333 6.667-1.333 17.067-6.667 23.467-12.267 12-10.4 18.8-25.6 18.8-41.866 0-23.867-15.6-44.934-38.4-52C137.6.133 133.067 0 68.533 0H0v204zM139.067 39.067c11.466 7.466 11.6 24.666.4 31.466-3.734 2.267-8.134 2.534-53.067 3.2l-49.067.667V35.867l49.067.4c44.667.4 49.333.666 52.667 2.8zM279.2 1.867C259.2 6.4 243.467 15.2 228.667 30c-15.2 15.333-23.734 30.933-28.267 51.733-2.8 13.2-1.733 36.934 2.267 49.6 10.266 33.067 35.866 58 70.666 68.8 14.134 4.4 38.667 4.534 54 .134 34.267-9.734 61.867-37.334 71.6-71.6 3.867-13.734 4.267-38.134.667-51.334-9.333-34.666-34.4-61.466-68.267-72.666-13.2-4.534-38.8-5.734-52.133-2.8zm34.4 35.6c19.467 4 37.2 18.133 45.733 36.133 26.4 55.733-31.333 113.467-87.066 87.067-6.8-3.2-12.4-7.2-18.134-12.934-26.133-26.266-25.733-67.2 1.067-92.8 16.133-15.6 37.2-21.866 58.4-17.466zm102.4 64.4V204h37.333l.267-64.533.4-64.667 27.333 20.933c15.067 11.467 29.6 22.667 32.4 24.667l4.8 3.867 11.734-9.067c6.4-5.067 21.066-16.133 32.4-24.8l20.666-15.6.4 64.533L584 204h37.333V102c0-56.133-.266-102-.8-102-.4 0-17.6 13.067-38.266 29.067-58.8 45.333-62.534 48.266-63.734 48.266-.533 0-23.2-16.933-50.133-37.733C441.467 18.8 418.533 1.467 417.733.8 416.4 0 416 20.667 416 101.867zm225.333.133v102h36v-52.4c0-28.933.4-58 .8-64.667l.934-12L695.2 87.067c8.933 6.666 22.8 17.333 30.8 23.6 8.133 6.266 15.467 11.866 16.267 12.533 1.066.533 9.2-4.8 22-14.933 11.2-8.667 25.866-19.867 32.4-24.8l12-8.934.4 64.667.266 64.8h36V101.867c0-81.6-.4-101.867-1.6-100.934-.933.8-12.533 9.734-25.733 19.867-45.067 34.933-69.333 53.467-72.133 55.2-2.667 1.6-6.534-1.067-51.867-36.133-27.067-20.8-50-38.4-50.933-38.934C641.6 0 641.333 18 641.333 102zm225.334 102h36V0h-36v204zm-854.4 44c-13.334 8.133-12.8 27.6 1.066 34.8 2.534 1.467 6.8 2.533 9.334 2.533 6 0 13.6-4.533 12.533-7.333-.8-1.867-1.2-1.867-3.733-.267-4.8 3.067-9.867 3.734-14.4 1.867-6.134-2.667-9.2-6.533-10-12.667-1.734-12.533 11.466-21.466 22.8-15.6 6.4 3.467 8.533 0 2.266-3.733-5.2-3.067-14.4-2.933-19.866.4zm68 0c-12.934 7.867-12.667 26.8.533 34.267 9.467 5.466 20.667 2.8 26.933-6.4 4.267-6.267 3.734-18.134-1.2-23.334-7.066-7.6-18.133-9.466-26.266-4.533zm18.4 3.467c12 7.2 9.6 24.533-4 28.666-9.867 2.934-19.334-4.666-19.334-15.6 0-11.6 13.2-18.933 23.334-13.066zM148 264.933c0 17.2.267 20.4 2 20.4 1.6 0 2-2.4 2-14 0-7.733.4-14 1.067-14 .533 0 6.8 6.134 13.866 13.6l12.934 13.734.133-19.734c0-16.533-.267-19.6-2-19.6-1.6 0-2 2.534-2 14.934l-.133 15.066-4.267-4.666c-2.267-2.667-8.667-9.467-13.867-15.334L148 244.667v20.266zM227.067 248c-4.8 2.8-9.734 11.333-9.734 16.667 0 8.533 7.734 18.133 16.134 20 7.866 1.733 18.4-2.267 16.8-6.534-.667-1.6-1.6-1.466-5.867.667-6.533 3.2-12.533 2.267-17.6-2.933-4.8-4.667-6-10.667-3.467-16.534 3.334-8.266 15.2-12.666 21.467-8 3.333 2.534 5.867 2.534 5.867 0 0-5.6-16.134-7.866-23.6-3.333zM288 285.333h11.333c9.067 0 11.334-.4 11.334-2 0-1.466-2.134-2-8.934-2.266l-9.066-.4v-13.334l7.733-.4c5.6-.266 7.6-.933 7.6-2.266 0-1.6-1.867-2-8-2h-8v-13.334h9.333c7.467 0 9.334-.4 9.334-2s-2.134-2-11.334-2H288v40zm61.333-20c0 16.934.267 20 2 20 1.6 0 2-1.733 2-7.333v-7.333h6c10.534 0 16.667-4.8 16.667-12.934-.133-7.866-6.8-12.4-18.533-12.4h-8.134v20zm20.267-12c3.067 3.734 3.067 5.6-.133 9.467-1.867 2.4-3.867 3.067-8.934 3.067L354 266l-.4-6.533c-.667-9.734 0-10.534 7.333-9.734 4.267.4 7.067 1.6 8.667 3.6zm39.733-6.133c0 1.333 1.867 2.133 5.734 2.4l5.6.4.4 17.6c.266 14.533.666 17.733 2.266 17.733 1.734 0 2-3.066 2-18v-18h6c4.4 0 6-.533 6-2 0-1.6-2.4-2-14-2-11.333 0-14 .4-14 1.867zm115.867.933c-2.267 2.267-2.667 4-2.267 8.534.534 4.533.134 6.133-2.4 8.533-6.533 6.267-2.4 17.867 6.934 19.6 3.066.533 6.666.133 10.133-1.2 4.8-1.867 5.867-2 9.2-.267 4.667 2.534 5.2 2.534 5.2 0 0-1.2-1.6-2.666-3.467-3.333-2.8-1.067-3.333-2-2.666-4.4 2.4-8.267 2.533-10.267.4-10.267-1.2 0-2.4 1.6-2.934 4-.533 2.134-1.333 4.267-2 4.667-1.733 1.067-13.066-12.667-14.133-16.933-1.467-6.8 5.6-10.8 9.067-5.067 2 3.067 5.066 3.6 5.066.667 0-3.334-5.066-7.334-9.333-7.334-2.267 0-5.2 1.2-6.8 2.8zm12.667 30.667c-1.2 2-8.4 2.667-11.467 1.067-5.6-2.934-6.667-7.867-2.8-12.134 2.133-2.4 2.4-2.266 8.533 3.734 3.6 3.466 6.134 6.8 5.734 7.333zm96.8 6.933l9.733-.666c15.2-.934 20.933-6.4 20.933-19.867 0-13.067-8-19.867-23.333-19.867h-7.333v40.4zm16.4-34.933c13.6 3.733 13.6 25.2 0 29.2-2.934.933-6.667 1.333-8.4 1.067-3.334-.4-3.334-.667-3.734-14.267-.133-7.733 0-14.8.267-15.733.8-2.134 5.067-2.267 11.867-.267zm51.6 34.533h12c9.6 0 12-.4 12-2 0-1.466-2.267-2-9.6-2.266l-9.734-.4v-13.334l8.4-.4c6.134-.266 8.267-.933 8.267-2.266 0-1.6-2-2-8.8-2h-8.667l.4-6.4.4-6.267 9.734-.4c7.333-.267 9.6-.8 9.6-2.267 0-1.6-2.4-2-12-2h-12v40zm64.8-37.2c-2.534 2-3.467 4-3.467 7.067 0 5.333 2.533 7.733 11.333 11.2 8.267 3.2 10.8 6.533 8 10.533-3.066 4.267-8.133 4.934-14.4 1.867-6.533-3.2-8.933-1.867-4.4 2.4 7.2 6.667 22.134 3.867 24.267-4.533 1.333-5.467-1.6-9.334-10.533-13.467-4.4-2.133-8.667-4.933-9.467-6.133-3.2-5.2 8.533-10.667 12.533-5.734 2.134 2.534 5.334 2.534 5.334.134 0-5.867-13.067-8.134-19.2-3.334zm59.2 17.2c0 16.934.266 20 2 20 1.733 0 2-3.066 2-20 0-16.933-.267-20-2-20-1.734 0-2 3.067-2 20zM877.733 248c-6 3.6-10.266 12.267-9.333 19.067 1.333 9.466 8.933 16.8 18.4 17.866 10.267.934 18.8-5.6 20.667-16l.8-4.933H898.8c-7.467 0-9.467.4-9.467 2 0 1.467 1.6 2 6.667 2 5.2 0 6.667.533 6.667 2.133 0 3.867-2.8 7.467-7.467 9.334-13.067 5.466-26.533-7.467-21.2-20.134 3.467-8.533 13.867-12.266 22.133-8 3.734 2 6.534 1.734 6.534-.533 0-2.133-9.067-5.467-14.934-5.467-3.333 0-7.466 1.067-10 2.667zM944 264.933c0 19.467.133 20.4 2.667 20.4 2.533 0 2.666-.933 2.666-14.4l.134-14.266 13.2 14 13.333 14v-19.734c0-16.533-.267-19.6-2-19.6-1.6 0-2 2.534-2 14.934v14.8l-7.6-8.534c-4.267-4.666-10.533-11.6-14-15.2l-6.4-6.666v20.266z'></path>
      <path
        fill='#FFC000'
        d='M991.667 170.667c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32z'></path>
    </svg>
  )
}