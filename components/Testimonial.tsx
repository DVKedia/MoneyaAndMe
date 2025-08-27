interface TestimonialProps {
  quote: string
  name: string
  role?: string
  image?: string
}

export default function Testimonial({ 
  quote, 
  name, 
  role, 
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
}: TestimonialProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-neutral-200 card-hover overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary-200 to-teal-200 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
        <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>
      
      <div className="relative z-10">
        {/* Quote Content */}
        <blockquote className="text-lg text-neutral-700 italic mb-6 leading-relaxed group-hover:text-neutral-800 transition-colors duration-300">
          "{quote}"
        </blockquote>
        
        {/* Author Section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 via-purple-400 to-teal-400 p-0.5 group-hover:scale-110 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                {image ? (
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-teal-100 flex items-center justify-center">
                    <div className="text-lg font-semibold gradient-text">
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Verification Badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="flex-1">
            <p className="font-bold text-neutral-800 text-lg group-hover:gradient-text transition-all duration-300">
              {name}
            </p>
            {role && (
              <p className="text-sm bg-gradient-to-r from-primary-500 to-teal-500 bg-clip-text text-transparent font-medium">
                {role}
              </p>
            )}
          </div>
          
          {/* Star Rating */}
          <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
