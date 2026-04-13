import Image from "next/image"

export function HeroOrbits() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 animate-[spin_14s_linear_infinite]">
        <Image
          src="/hero-item.png"
          alt=""
          width={36}
          height={36}
          className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-80"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite_reverse]">
        <Image
          src="/hero-item-hover.png"
          alt=""
          width={30}
          height={30}
          className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-75"
        />
      </div>
    </div>
  )
}
