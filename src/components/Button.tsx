type ButtonVariantsType = {
  [key: string]: string
  regular: string
  outline: string
}

interface ButtonProps {
  variant: 'regular' | 'outline'
  render: (variant: string) => JSX.Element
}

export default function Button({ variant, render }: ButtonProps) {
  const buttonVariants: ButtonVariantsType = {
    regular:
      'bg-zinc-900 text-white font-semibold px-3 py-1.5 rounded-sm hover:scale-[102.5%] transition-transform ease-linear duration-75 select-none disabled:opacity-70 disabled:pointer-events-none',
    outline:
      'border-2 border-zinc-900 font-semibold px-3 py-1.5 rounded-sm hover:-translate-y-[2px] transition-transform ease-linear duration-75 select-none disabled:opacity-70 disabled:pointer-events-none'
  }

  return render(buttonVariants[variant])
}
