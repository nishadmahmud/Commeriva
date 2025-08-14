"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function PartnersIntegrations() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logos = [
    { id: 1, name: "Company 1", image: "/html.png", position: { top: "20px", left: "180px" }, size: { width: "60px", height: "60px" } },
    { id: 2, name: "VM", image: "/mongodb.png", position: { top: "80px", right: "300px" }, size: { width: "50px", height: "50px" } },
    { id: 3, name: "Oracle", image: "/react.png", position: { top: "120px", right: "180px" }, size: { width: "70px", height: "70px" } },
    { id: 4, name: "Google Cloud", image: "/firebase.jpg", position: { top: "140px", right: "80px" }, size: { width: "60px", height: "60px" } },
    { id: 5, name: "AWS", image: "/nodejs.png", position: { top: "180px", left: "80px" }, size: { width: "80px", height: "80px" } },
    { id: 6, name: "Kubernetes", image: "/postragsql.png", position: { top: "200px", right: "20px" }, size: { width: "50px", height: "50px" } },
    { id: 7, name: "Cisco", image: "/tailwind.jpg", position: { top: "280px", left: "20px" }, size: { width: "60px", height: "60px" } },
    { id: 8, name: "Lambda", image: "/php.png", position: { bottom: "200px", left: "160px" }, size: { width: "70px", height: "70px" } },
    { id: 9, name: "Docker", image: "/cloud.png", position: { bottom: "160px", left: "80px" }, size: { width: "60px", height: "60px" } },
    { id: 10, name: "MongoDB", image: "/shopify.png", position: { bottom: "120px", right: "300px" }, size: { width: "80px", height: "80px" } },
    { id: 11, name: "Company 11", image: "/ts.png", position: { bottom: "80px", right: "180px" }, size: { width: "60px", height: "60px" } },
    { id: 12, name: "GitHub", image: "/wordpress.png", position: { bottom: "20px", right: "80px" }, size: { width: "70px", height: "70px" } },
    { id: 13, name: "Snowflake", image: "/canva.png", position: { top: "40px", right: "400px" }, size: { width: "50px", height: "50px" } },
    { id: 14, name: "Company 14", image: "/figma.png", position: { bottom: "40px", left: "300px" }, size: { width: "60px", height: "60px" } },
    { id: 15, name: "Palo Alto", image: "/next.png", position: { top: "300px", right: "120px" }, size: { width: "55px", height: "55px" } },
    { id: 16, name: "Microsoft", image: "/python.png", position: { top: "60px", left: "300px" }, size: { width: "55px", height: "55px" } },
    { id: 17, name: "Helm", image: "/aws.png", position: { bottom: "100px", left: "200px" }, size: { width: "50px", height: "50px" } },
    { id: 18, name: "Prompt", image: "/flutter.jpg", position: { top: "220px", right: "250px" }, size: { width: "45px", height: "45px" } },
  ];

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Company logos positioned around the content - hidden on mobile */}
        {mounted && window.innerWidth > 768 &&
          logos.map((logo) => (
            <div
              key={logo.id}
              style={{
                ...styles.logo,
                ...logo.position,
                ...logo.size,
              }}
            >
              <img
                src={`${logo.image}`}
                alt={`${logo.name} logo`}
                style={styles.logoImg}
              />
            </div>
          ))}

        {/* Mobile logo grid - only shown on mobile */}
        <div style={styles.mobileLogoGrid}>
          {mounted && window.innerWidth <= 768 &&
            logos.slice(0, 8).map((logo) => (
              <div key={logo.id} style={styles.mobileLogoItem}>
                <img
                  src={`${logo.image}`}
                  alt={`${logo.name} logo`}
                  style={styles.mobileLogoImg}
                />
              </div>
            ))}
        </div>

        {/* Main content */}
        <div style={styles.content}>
          <div style={styles.label}>PARTNERS & INTEGRATIONS</div>
          <h1 style={styles.title}>Built to work with your ecosystem</h1>
          <p style={styles.description}>
            We understand that success doesn't happen in isolation. That's why Commeriva products integrate with the
            technologies that power your business.
          </p>
          <div style={styles.links}>
            <Link
              href="#"
              style={styles.link}
              onMouseEnter={(e) => {
                e.target.style.color = "#2563eb"
                e.target.querySelector(".arrow").style.transform = "translateX(4px)"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#3b82f6"
                e.target.querySelector(".arrow").style.transform = "translateX(0)"
              }}
            >
              Our ecosystem
              <span className="arrow" style={styles.arrow}>
                →
              </span>
            </Link>
            <Link
              href="#"
              style={styles.link}
              onMouseEnter={(e) => {
                e.target.style.color = "#2563eb"
                e.target.querySelector(".arrow").style.transform = "translateX(4px)"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#3b82f6"
                e.target.querySelector(".arrow").style.transform = "translateX(0)"
              }}
            >
              Find integrations
              <span className="arrow" style={styles.arrow}>
                →
              </span>
            </Link>
          </div>
          <div style={styles.stats}>
            <div style={styles.stat}>
              <div style={styles.statNumber}>930+</div>
              <div style={styles.statLabel}>Partners</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>4,000+</div>
              <div style={styles.statLabel}>Integrations</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>500+</div>
              <div style={styles.statLabel}>Systems integrators</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: "white",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "1400px",
    minHeight: "600px",
    padding: "40px 20px",
    "@media (maxWidth: 768px)": {
      padding: "20px 16px",
      minHeight: "auto",
    },
  },
  logo: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    "@media (maxWidth: 768px)": {
      display: "none",
    },
  },
  logoImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  mobileLogoGrid: {
    display: "none",
    "@media (maxWidth: 768px)": {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px",
      marginBottom: "40px",
      padding: "0 20px",
    },
  },
  mobileLogoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    padding: "8px",
  },
  mobileLogoImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
    padding: "0 20px",
    "@media (maxWidth: 768px)": {
      position: "static",
      transform: "none",
      maxWidth: "100%",
      padding: "0",
    },
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#6b7280",
    letterSpacing: "1px",
    marginBottom: "20px",
    "@media (maxWidth: 480px)": {
      fontSize: "12px",
      marginBottom: "16px",
    },
  },
  title: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#1f2937",
    lineHeight: "1.2",
    marginBottom: "24px",
    margin: "0 0 24px 0",
    "@media (maxWidth: 768px)": {
      fontSize: "36px",
    },
    "@media (maxWidth: 480px)": {
      fontSize: "28px",
      marginBottom: "20px",
    },
  },
  description: {
    fontSize: "18px",
    color: "#6b7280",
    lineHeight: "1.6",
    marginBottom: "32px",
    "@media (maxWidth: 768px)": {
      fontSize: "16px",
    },
    "@media (maxWidth: 480px)": {
      fontSize: "14px",
      marginBottom: "24px",
    },
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    marginBottom: "48px",
    "@media (maxWidth: 480px)": {
      flexDirection: "column",
      gap: "16px",
      marginBottom: "32px",
    },
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
    position: "relative",
    transition: "color 0.2s ease",
    "@media (maxWidth: 480px)": {
      fontSize: "14px",
    },
  },
  arrow: {
    marginLeft: "8px",
    transition: "transform 0.2s ease",
    display: "inline-block",
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    "@media (maxWidth: 768px)": {
      gap: "40px",
    },
    "@media (maxWidth: 480px)": {
      flexDirection: "column",
      gap: "24px",
    },
  },
  stat: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "8px",
    "@media (maxWidth: 768px)": {
      fontSize: "28px",
    },
    "@media (maxWidth: 480px)": {
      fontSize: "24px",
      marginBottom: "4px",
    },
  },
  statLabel: {
    fontSize: "16px",
    color: "#6b7280",
    fontWeight: "500",
    "@media (maxWidth: 480px)": {
      fontSize: "14px",
    },
  },
}