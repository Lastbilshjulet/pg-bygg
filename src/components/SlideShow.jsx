import { useState, useEffect, useRef } from "react";

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = ["slide-1.jpg", "slide-2.jpg", "slide-3.jpg"];

  // Function to change slide and reset timer
  const changeSlide = (newSlide) => {
    setCurrentSlide(newSlide);
    
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Restart timer
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  // Handle mouse dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const dragEndX = e.clientX;
    const dragDistance = dragStartX - dragEndX;

    if (dragDistance > 50) {
      // Dragged left - next slide
      changeSlide((currentSlide + 1) % slides.length);
    } else if (dragDistance < -50) {
      // Dragged right - previous slide
      changeSlide((currentSlide - 1 + slides.length) % slides.length);
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const dragEndX = e.changedTouches[0].clientX;
    const dragDistance = dragStartX - dragEndX;

    if (dragDistance > 50) {
      // Swiped left - next slide
      changeSlide((currentSlide + 1) % slides.length);
    } else if (dragDistance < -50) {
      // Swiped right - previous slide
      changeSlide((currentSlide - 1 + slides.length) % slides.length);
    }
  };

  // Handle click on left/right sides
  const handleImageClick = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - containerRect.left;
    const containerWidth = containerRect.width;

    if (clickX < containerWidth / 2) {
      // Clicked left side - previous slide
      changeSlide((currentSlide - 1 + slides.length) % slides.length);
    } else {
      // Clicked right side - next slide
      changeSlide((currentSlide + 1) % slides.length);
    }
  };

  return (
    <div className="w-full mt-5">
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleImageClick}
        className="relative w-full lg:w-[80%] h-[350px] lg:h-[650px] m-auto overflow-hidden lg:rounded-xl shadow-lg cursor-pointer bg-gray-200"
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={`/${slide}`}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
          />
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                changeSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;