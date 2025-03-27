import React from "react";

const Testimonials = () => {
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "CTO at TechSolutions",
        image: "https://randomuser.me/api/portraits/women/43.jpg",
        quote: "Alex is an exceptional engineer who consistently delivers high-quality code. His problem-solving skills and attention to detail are unmatched. He's been instrumental in scaling our platform to handle millions of users.",
        rating: 5
      },
      {
        name: "Michael Chen",
        role: "Product Manager at Digital Innovations",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "Working with Alex was a pleasure. He has an incredible ability to translate complex business requirements into elegant technical solutions. His code is clean, well-documented, and performant.",
        rating: 5
      },
      {
        name: "Emily Rodriguez",
        role: "CEO at StartUp Ventures",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "Alex was one of our first engineers and played a crucial role in building our product from scratch. His technical leadership and mentorship helped shape our engineering culture. He's truly a 10x engineer.",
        rating: 5
      }
    ];

    const styles = {
      section: {
        padding: "5rem 1rem",
        maxWidth: "80rem",
        margin: "0 auto",
        backgroundColor: "#F9FAFB",
        borderRadius: "1.5rem",
        marginTop: "3rem",
        marginBottom: "3rem"
      },
      darkSection: {
        backgroundColor: "rgba(31, 41, 55, 0.3)"
      },
      header: {
        textAlign: "center",
        marginBottom: "4rem"
      },
      title: {
        fontSize: "1.875rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        backgroundImage: "linear-gradient(to right, #6366F1, #EC4899)",
        WebkitBackgroundClip: "text",
        color: "transparent"
      },
      subtitle: {
        fontSize: "1.25rem",
        color: "#6B7280",
        maxWidth: "48rem",
        margin: "0 auto"
      },
      darkSubtitle: {
        color: "#9CA3AF"
      },
      grid: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2rem"
      },
      "@media (min-width: 768px)": {
        grid: {
          gridTemplateColumns: "repeat(2, 1fr)"
        }
      },
      "@media (min-width: 1024px)": {
        grid: {
          gridTemplateColumns: "repeat(3, 1fr)"
        }
      },
      card: {
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: "0.75rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        border: "1px solid #E5E7EB"
      },
      darkCard: {
        backgroundColor: "#1F2937",
        borderColor: "#374151"
      },
      cardHeader: {
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem"
      },
      avatar: {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        overflow: "hidden",
        marginRight: "1rem"
      },
      avatarImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      name: {
        fontWeight: "bold",
        color: "#111827"
      },
      darkName: {
        color: "#F3F4F6"
      },
      role: {
        fontSize: "0.875rem",
        color: "#6B7280"
      },
      darkRole: {
        color: "#9CA3AF"
      },
      quote: {
        color: "#4B5563",
        fontStyle: "italic"
      },
      darkQuote: {
        color: "#D1D5DB"
      },
      rating: {
        display: "flex",
        marginTop: "1rem"
      },
      star: {
        width: "1.25rem",
        height: "1.25rem",
        color: "#F59E0B"
      }
    };
  
    return (
      <section 
        id="testimonials" 
        style={styles.section}
      >
        <div style={styles.header}>
          <h2 style={styles.title}>
            Testimonials
          </h2>
          <p style={{...styles.subtitle}}>
            What colleagues and clients say about working with me.
          </p>
        </div>
        
        <div style={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              style={styles.card}
            >
              <div style={styles.cardHeader}>
                <div style={styles.avatar}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    style={styles.avatarImage} 
                  />
                </div>
                <div>
                  <h4 style={styles.name}>{testimonial.name}</h4>
                  <p style={styles.role}>{testimonial.role}</p>
                </div>
              </div>
              <p style={styles.quote}>
                "{testimonial.quote}"
              </p>
              <div style={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    style={styles.star}
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};
  
export default Testimonials;