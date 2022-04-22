const secondaryGradient = 'linear-gradient(122.48deg,#671BC9_-52.99%,#FD0F9E_97.26%)'

export default function SecondaryButton({ title }: { title: string }) {
  return (
    <button
      className={`px-12 py-4 font-space-grotesk font-bold text-[#FD0F9E] hover:text-white focus:text-white rounded-2xl hover:bg-[${secondaryGradient}] hover:border-none focus:border-none hover:shadow-[0px_2px_40px_rgba(253,15,158,0.7)] focus:bg-[${secondaryGradient}] transition-all duration-100 ease-out relative
      `}
    >
      {title}
    </button>
  )
}