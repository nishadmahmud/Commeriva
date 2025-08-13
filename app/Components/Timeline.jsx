"use client"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Rocket, Code, CheckCircle, TrendingUp, Zap } from "lucide-react"

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
      {/* Header */}
      <div className="text-center py-12 lg:py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Project Timeline
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Follow our journey from conception to success through every milestone
        </p>
      </div>

      {/* Timeline */}
      <div className="pb-20">
        <VerticalTimeline lineColor="#E5E7EB" animate={true}>
          {events.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={event.contentStyle}
              contentArrowStyle={event.contentArrowStyle}
              date={event.subtitle}
              dateClassName="text-gray-600 font-semibold"
              iconStyle={{
                background: event.iconBg,
                color: "#fff",
                boxShadow: `0 0 0 4px ${event.iconBg}20, inset 0 2px 0 rgba(255,255,255,.08), 0 3px 0 4px rgba(0,0,0,.05), 0 8px 17px rgba(0,0,0,.2)`,
                border: "none",
              }}
              icon={event.icon}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed opacity-90">{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

     
    </div>
  )
}
