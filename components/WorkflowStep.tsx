interface WorkflowStepProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

export default function WorkflowStep({ number, title, description, isLast = false }: WorkflowStepProps) {
  const gradients = [
    'from-primary-500 to-yellow-500',
    'from-teal-500 to-emerald-500', 
    'from-purple-500 to-pink-500'
  ]
  
  const bgGradients = [
    'from-primary-400/20 to-yellow-400/20',
    'from-teal-400/20 to-emerald-400/20',
    'from-purple-400/20 to-pink-400/20'
  ]

  return (
    <div className="group flex flex-col items-center text-center relative">
      {/* Floating Background Element */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[number - 1]} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100`}></div>
      
      {/* Step Number */}
      <div className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${gradients[number - 1]} text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl floating-element`}>
        <span className="relative z-10">{number}</span>
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-gradient-to-r from-white/60 to-white/40 transform translate-x-10 z-0 rounded-full">
          <div className="h-full bg-gradient-to-r from-primary-400 to-teal-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:bg-white">
        <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-teal-600 transition-all duration-300">
          {title}
        </h3>
        <p className="text-neutral-700 leading-relaxed transition-colors duration-300">
          {description}
        </p>
        
        {/* Decorative Icon */}
        <div className="mt-4 flex justify-center">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradients[number - 1]} flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500`}>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
