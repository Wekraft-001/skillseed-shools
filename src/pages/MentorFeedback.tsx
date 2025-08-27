import React, { useState } from "react";
import {
  Filter,
  Search,
  Star,
  Brain,
  Users,
  Lightbulb,
  Calculator,
  Clock,
  Heart,
  ChevronDown,
  X,
} from "lucide-react";
import { PageMetadata } from "../components/PageMetadata";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

const MentorFeedback = () => {
  const [activeFilter, setActiveFilter] = useState({
    class: "All Classes",
    mentor: "All Mentors",
    rating: "All Ratings",
  });
  const [selectedFeedback, setSelectedFeedback] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const feedbackData = [
    {
      id: 1,
      student: {
        name: "Emma Thompson",
        grade: "Grade 2B",
        age: 8,
        avatar:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      },
      mentor: {
        name: "Dr. Michael Smith",
        subject: "Science Mentor",
        avatar:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      },
      rating: 5,
      feedback:
        "Emma shows exceptional curiosity in science experiments. She asks thoughtful questions and demonstrates excellent problem-solving skills. Her enthusiasm is contagious!",
      fullFeedback:
        "Emma shows exceptional curiosity in science experiments. She asks thoughtful questions and demonstrates excellent problem-solving skills. Her enthusiasm is contagious! During our recent session on simple chemistry, she was able to predict outcomes and explain the reasoning behind her hypotheses. I'm impressed by her ability to connect different concepts and apply them creatively. She works well with her peers and often helps others understand complex ideas through simple analogies. I recommend encouraging her interest in STEM subjects as she has great potential in scientific thinking.",
      skills: [
        { name: "Critical Thinking", grade: "A+", color: "green", icon: Brain },
        { name: "Teamwork", grade: "A", color: "purple", icon: Users },
        { name: "Creativity", grade: "A+", color: "orange", icon: Lightbulb },
      ],
      session: "Jan 15, 2024",
      borderColor: "border-blue-100",
      goals: [
        "Continue exploring advanced science concepts",
        "Develop hypothesis-testing skills",
        "Share knowledge with younger students",
      ],
      improvements: [
        "Focus on documenting experiment processes",
        "Work on scientific vocabulary",
        "Practice presenting findings",
      ],
    },
    {
      id: 2,
      student: {
        name: "James Wilson",
        grade: "Grade 3C",
        age: 9,
        avatar:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      },
      mentor: {
        name: "Ms. Sarah Johnson",
        subject: "Math Mentor",
        avatar:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      },
      rating: 4,
      feedback:
        "James has improved significantly in mathematics. He's more confident with problem-solving and shows great persistence. Keep encouraging his analytical thinking!",
      skills: [
        { name: "Math Skills", grade: "B+", color: "blue", icon: Calculator },
        { name: "Focus", grade: "A-", color: "yellow", icon: Clock },
        { name: "Confidence", grade: "B+", color: "pink", icon: Heart },
      ],
      session: "Jan 12, 2024",
      borderColor: "border-green-100",
    },
    {
      id: 3,
      student: {
        name: "Sophia Chen",
        grade: "Grade 1A",
        age: 7,
        avatar:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      },
      mentor: {
        name: "Mr. David Brown",
        subject: "Art Mentor",
        avatar:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      },
      rating: 5,
      feedback:
        "Sophia has incredible artistic talent for her age. Her imagination and attention to detail are remarkable. She's always eager to try new techniques!",
      skills: [
        { name: "Creativity", grade: "A+", color: "purple", icon: Lightbulb },
        { name: "Focus", grade: "A", color: "blue", icon: Clock },
        { name: "Expression", grade: "A+", color: "pink", icon: Heart },
      ],
      session: "Jan 10, 2024",
      borderColor: "border-purple-100",
    },
  ];

  const FloatingBubbles = () => (
    <>
      <div className="fixed top-10 left-20 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="fixed top-40 right-32 w-16 h-16 bg-yellow-400/10 rounded-full animate-float [animation-delay:-3s]"></div>
      <div className="fixed top-80 left-1/3 w-12 h-12 bg-pink-300/10 rounded-full animate-float"></div>
      <div className="fixed bottom-40 right-20 w-24 h-24 bg-green-300/10 rounded-full animate-float [animation-delay:-3s]"></div>
      <div className="fixed bottom-20 left-40 w-14 h-14 bg-purple-300/10 rounded-full animate-float"></div>
      <div className="fixed top-60 right-1/4 w-18 h-18 bg-orange-300/10 rounded-full animate-float [animation-delay:-3s]"></div>
      <div className="fixed bottom-60 left-1/4 w-10 h-10 bg-teal-300/10 rounded-full animate-float"></div>
    </>
  );

  const handleViewDetails = (feedback: any) => {
    setSelectedFeedback(feedback);
    setIsModalOpen(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-all duration-300 hover:scale-120 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-50 border-green-200 text-green-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-700",
      pink: "bg-pink-50 border-pink-200 text-pink-700",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "bg-gray-50 border-gray-200 text-gray-700"
    );
  };

  const getIconBgColor = (color: string) => {
    const colorMap = {
      green: "bg-green-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      blue: "bg-blue-500",
      yellow: "bg-yellow-500",
      pink: "bg-pink-500",
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-500";
  };

  const getGradeColor = (color: string) => {
    const colorMap = {
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      blue: "text-blue-600",
      yellow: "text-yellow-600",
      pink: "text-pink-600",
    };
    return colorMap[color as keyof typeof colorMap] || "text-gray-600";
  };

  return (
    <>
      <PageMetadata
        title="Mentor Feedback"
        description="View and manage mentor feedback for students"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-yellow-50 relative overflow-hidden">
        <FloatingBubbles />

        <div className="relative">
          <div className="container mx-auto px-6 py-8">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold mb-2">
                Mentor Feedbacks
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                View and manage mentor feedback for students
              </p>
            </div>

            {/* Filter Section */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-yellow-100 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <Filter className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">
                        Filter Feedback
                      </h2>
                      <p className="text-gray-600">
                        Find specific mentor feedback
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-full border-2 border-blue-200 focus:border-blue-500 outline-none text-sm font-semibold appearance-none bg-white"
                      value={activeFilter.class}
                      onChange={(e) =>
                        setActiveFilter((prev) => ({
                          ...prev,
                          class: e.target.value,
                        }))
                      }
                    >
                      <option>All Classes</option>
                      <option>Grade 1A</option>
                      <option>Grade 2B</option>
                      <option>Grade 3C</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>

                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-full border-2 border-green-200 focus:border-green-500 outline-none text-sm font-semibold appearance-none bg-white"
                      value={activeFilter.mentor}
                      onChange={(e) =>
                        setActiveFilter((prev) => ({
                          ...prev,
                          mentor: e.target.value,
                        }))
                      }
                    >
                      <option>All Mentors</option>
                      <option>Dr. Smith</option>
                      <option>Ms. Johnson</option>
                      <option>Mr. Brown</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>

                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-full border-2 border-purple-200 focus:border-purple-500 outline-none text-sm font-semibold appearance-none bg-white"
                      value={activeFilter.rating}
                      onChange={(e) =>
                        setActiveFilter((prev) => ({
                          ...prev,
                          rating: e.target.value,
                        }))
                      }
                    >
                      <option>All Ratings</option>
                      <option>5 Stars</option>
                      <option>4 Stars</option>
                      <option>3 Stars</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>

                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <Search className="w-4 h-4 mr-2 inline" />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            {/* Feedback Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {feedbackData.map((feedback) => (
                <div
                  key={feedback.id}
                  className={`bg-white rounded-3xl p-8 shadow-lg border-2 ${feedback.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden`}
                >
                  <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 rounded-full opacity-50"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-200 rounded-full opacity-40"></div>

                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={feedback.student.avatar}
                      alt={feedback.student.name}
                      className="w-16 h-16 rounded-full border-3 border-blue-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-1">
                        {feedback.student.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {feedback.student.grade} • Age {feedback.student.age}
                      </p>
                      <div className="flex items-center space-x-1 mb-3">
                        {renderStars(feedback.rating)}
                        <span className="text-sm font-semibold text-gray-700 ml-2">
                          {feedback.rating}.0
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl mb-6 border-2 border-blue-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={feedback.mentor.avatar}
                        alt={feedback.mentor.name}
                        className="w-12 h-12 rounded-full border-2 border-blue-400"
                      />
                      <div>
                        <h4 className="font-bold text-slate-800">
                          {feedback.mentor.name}
                        </h4>
                        <p className="text-blue-600 text-sm">
                          {feedback.mentor.subject}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "{feedback.feedback}"
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {feedback.skills.map((skill, idx) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={idx}
                          className={`${getColorClasses(
                            skill.color
                          )} p-4 rounded-2xl text-center border-2`}
                        >
                          <div
                            className={`${getIconBgColor(
                              skill.color
                            )} w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2`}
                          >
                            <IconComponent className="text-white w-5 h-5" />
                          </div>
                          <p className="text-xs font-semibold">{skill.name}</p>
                          <p
                            className={`text-lg font-bold ${getGradeColor(
                              skill.color
                            )}`}
                          >
                            {skill.grade}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Session: {feedback.session}
                    </span>
                    <button
                      onClick={() => handleViewDetails(feedback)}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-slate-800">
                Detailed Feedback - {selectedFeedback?.student.name}
              </DialogTitle>
            </DialogHeader>

            {selectedFeedback && (
              <div className="space-y-6">
                {/* Student & Mentor Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
                    <h3 className="font-bold text-slate-800 mb-4">
                      Student Information
                    </h3>
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedFeedback.student.avatar}
                        alt={selectedFeedback.student.name}
                        className="w-16 h-16 rounded-full border-3 border-blue-300"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-slate-800">
                          {selectedFeedback.student.name}
                        </h4>
                        <p className="text-gray-600">
                          {selectedFeedback.student.grade} • Age{" "}
                          {selectedFeedback.student.age}
                        </p>
                        <div className="flex items-center space-x-1 mt-2">
                          {renderStars(selectedFeedback.rating)}
                          <span className="text-sm font-semibold text-gray-700 ml-2">
                            {selectedFeedback.rating}.0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                    <h3 className="font-bold text-slate-800 mb-4">
                      Mentor Information
                    </h3>
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedFeedback.mentor.avatar}
                        alt={selectedFeedback.mentor.name}
                        className="w-16 h-16 rounded-full border-3 border-green-300"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-slate-800">
                          {selectedFeedback.mentor.name}
                        </h4>
                        <p className="text-green-600">
                          {selectedFeedback.mentor.subject}
                        </p>
                        <p className="text-gray-500 text-sm">
                          Session: {selectedFeedback.session}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Feedback */}
                <div className="bg-yellow-50 p-6 rounded-2xl border-2 border-yellow-200">
                  <h3 className="font-bold text-slate-800 mb-4">
                    Complete Feedback
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    "{selectedFeedback.fullFeedback}"
                  </p>
                </div>

                {/* Skills Assessment */}
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200">
                  <h3 className="font-bold text-slate-800 mb-4">
                    Skills Assessment
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedFeedback.skills.map((skill: any, idx: number) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={idx}
                          className={`${getColorClasses(
                            skill.color
                          )} p-6 rounded-2xl text-center border-2`}
                        >
                          <div
                            className={`${getIconBgColor(
                              skill.color
                            )} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}
                          >
                            <IconComponent className="text-white w-6 h-6" />
                          </div>
                          <p className="text-sm font-semibold mb-1">
                            {skill.name}
                          </p>
                          <p
                            className={`text-2xl font-bold ${getGradeColor(
                              skill.color
                            )}`}
                          >
                            {skill.grade}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Goals and Improvements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                    <h3 className="font-bold text-slate-800 mb-4">
                      Recommended Goals
                    </h3>
                    <ul className="space-y-2">
                      {selectedFeedback.goals?.map(
                        (goal: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">
                              {goal}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-200">
                    <h3 className="font-bold text-slate-800 mb-4">
                      Areas for Improvement
                    </h3>
                    <ul className="space-y-2">
                      {selectedFeedback.improvements?.map(
                        (improvement: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">
                              {improvement}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default MentorFeedback;
