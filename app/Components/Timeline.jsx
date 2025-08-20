"use client"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Rocket, Code, CheckCircle, TrendingUp, Zap } from "lucide-react"
import { ScrollTimeline } from "./scroll-timeline"

export default function ScrollableTimeline() {
  const events = [
    {
      title: "Project Started",
      subtitle: "January 2025",
      description: "We began the journey to build something amazing with innovative ideas and cutting-edge technology.",
      icon: <Rocket className="w-6 h-6" />,
      iconBg: "#3B82F6",
      contentStyle: {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
        border: "none",
      },
      contentArrowStyle: { borderRight: "7px solid #667eea" },
    },
    {
      title: "Development Phase",
      subtitle: "February 2025",
      description:
        "The core features were developed and tested with rigorous quality assurance and user feedback integration.",
      icon: <Code className="w-6 h-6" />,
      iconBg: "#10B981",
      contentStyle: {
        background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
        border: "none",
      },
      contentArrowStyle: { borderRight: "7px solid #11998e" },
    },
    {
      title: "Launch Day",
      subtitle: "March 2025",
      description: "We officially launched our product to the public with great success and positive reception!",
      icon: <CheckCircle className="w-6 h-6" />,
      iconBg: "#F59E0B",
      contentStyle: {
        background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)",
        border: "none",
      },
      contentArrowStyle: { borderRight: "7px solid #ff9a9e" },
    },
    {
      title: "User Growth",
      subtitle: "April 2025",
      description: "Achieved significant user adoption and engagement milestones beyond our initial projections.",
      icon: <TrendingUp className="w-6 h-6" />,
      iconBg: "#8B5CF6",
      contentStyle: {
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        color: "#374151",
        boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
        border: "none",
      },
      contentArrowStyle: { borderRight: "7px solid #a8edea" },
    },
    {
      title: "Feature Expansion",
      subtitle: "May 2025",
      description: "Rolled out advanced features based on user feedback and market research insights.",
      icon: <Zap className="w-6 h-6" />,
      iconBg: "#EF4444",
      contentStyle: {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)",
        border: "none",
      },
      contentArrowStyle: { borderRight: "7px solid #667eea" },
    },
  ]

  return (
    <div className=" min-h-screen">
     

      <ScrollTimeline></ScrollTimeline>

     

     
    </div>
  )
}
