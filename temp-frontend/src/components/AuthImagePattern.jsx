const AuthImagePattern = ({ title = "Welcome", subtitle = "Glad to see you here!" }) => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8 transition-colors duration-300">
        <div className="backdrop-blur-xl bg-white/5 dark:bg-white/10 border border-white/10 rounded-2xl shadow-xl p-10 w-full max-w-md text-center">
  
          {/* Grid of glowing squares */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square w-full rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-inner ${
                  i % 2 === 0 ? "animate-pulse" : ""
                }`}
                style={{
                  boxShadow: '0 0 10px rgba(59,130,246,0.4)', // blue glow
                }}
              />
            ))}
          </div>
  
          {/* Text content with glow & transitions */}
          <h2 className="text-3xl font-extrabold mb-3 text-white tracking-wide drop-shadow-sm">
            {title}
          </h2>
          <p className="text-gray-400 text-md transition-opacity duration-300">
            {subtitle}
          </p>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;
  