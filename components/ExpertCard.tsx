interface ExpertCardProps {
  name: string
  role: string
  bio: string
  image?: string
}

export default function ExpertCard({ 
  name, 
  role, 
  bio, 
  image = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
}: ExpertCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-neutral-200 card-hover overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-teal-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating Decoration */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-200 to-teal-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Enhanced Profile Image */}
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 via-purple-400 to-teal-400 p-1 group-hover:scale-110 transition-transform duration-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              {image ? (
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-teal-100 flex items-center justify-center">
                  <div className="text-3xl font-serif font-bold gradient-text">
                    {name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* Enhanced Text Content */}
        <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-2 group-hover:gradient-text transition-all duration-300">
          {name}
        </h3>
        
        <div className="bg-gradient-to-r from-primary-500 to-teal-500 bg-clip-text text-transparent font-semibold mb-4 text-lg">
          {role}
        </div>
        
        <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
          {bio}
        </p>
        
        {/* Social Links */}
        <div className="flex space-x-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
