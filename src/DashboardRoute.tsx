import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { SidebarProvider } from "./contexts/SidebarContext";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import ChildManagement from "./pages/ChildManagement";
import ClassAssignment from "./pages/ClassAssignment";
import ProgramRollout from "./pages/ProgramRollout";
import LearningGoals from "./pages/LearningGoals";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import MentorSessions from "./pages/MentorSessions";
import CollaborativePage from "./pages/CollaborativePage";
import LiveEventsPage from "./pages/LiveEventsPage";
import NotFound from "./pages/NotFound";

// Create a Tools index page that redirects to the first tool
const ToolsIndex = () => <Navigate to="/tools/collaborative" replace />;

const queryClient = new QueryClient();

const DashboardRoute = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SidebarProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Index />} />
            <Route path="childManagement" element={<ChildManagement />} />
            <Route path="class-assignment" element={<ClassAssignment />} />
            <Route path="program-rollout" element={<ProgramRollout />} />
            <Route path="learning-goals" element={<LearningGoals />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="reports" element={<Reports />} />
            <Route path="mentor-sessions" element={<MentorSessions />} />
            {/* Tools section with nested routes */}
            <Route path="tools" element={<ToolsIndex />} />
            <Route path="tools/collaborative" element={<CollaborativePage />} />
            <Route path="tools/live-events" element={<LiveEventsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default DashboardRoute;
