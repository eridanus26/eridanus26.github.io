import { useMemo } from 'react';
import { blogData } from '../data/blogData';
import { AcademicPost } from '../types';
import PostCard from '../components/PostCard';
import { GraduationCap, Book, Code, Microscope } from 'lucide-react';

export default function Academics() {
  const academicPosts = useMemo(() => 
    blogData.posts.filter(p => p.category === 'academic') as AcademicPost[], 
  []);

  const courseNotes = academicPosts.filter(p => p.projectType === 'course-note');
  const projects = academicPosts.filter(p => p.projectType === 'project');
  const research = academicPosts.filter(p => p.projectType === 'research');

  return (
    <div className="container mx-auto px-4 py-20 space-y-32">
      <div className="text-center space-y-6">
        <div className="inline-flex p-4 bg-[#F0E8E4] rounded-full text-[#A84848] mb-4">
          <GraduationCap size={32} />
        </div>
        <h1 className="text-6xl font-serif italic text-[#1A0E0C]">Academics & Projects</h1>
        <p className="text-[#2A1A18]/50 font-serif max-w-xl mx-auto">A repository of my academic journey, course notes, and technical projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-4 border-b border-[#A84848]/10 pb-4">
            <Book size={20} className="text-[#A84848]" />
            <h2 className="text-2xl font-serif italic text-[#1A0E0C]">Course Notes</h2>
          </div>
          <div className="space-y-8">
            {courseNotes.map(post => <PostCard key={post.id} post={post} />)}
            {courseNotes.length === 0 && <p className="text-sm font-serif italic text-[#2A1A18]/40">No notes uploaded yet.</p>}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4 border-b border-[#A84848]/10 pb-4">
            <Code size={20} className="text-[#A84848]" />
            <h2 className="text-2xl font-serif italic text-[#1A0E0C]">Projects</h2>
          </div>
          <div className="space-y-8">
            {projects.map(post => <PostCard key={post.id} post={post} />)}
            {projects.length === 0 && <p className="text-sm font-serif italic text-[#2A1A18]/40">No projects uploaded yet.</p>}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4 border-b border-[#A84848]/10 pb-4">
            <Microscope size={20} className="text-[#A84848]" />
            <h2 className="text-2xl font-serif italic text-[#1A0E0C]">Research</h2>
          </div>
          <div className="space-y-8">
            {research.map(post => <PostCard key={post.id} post={post} />)}
            {research.length === 0 && <p className="text-sm font-serif italic text-[#2A1A18]/40">No research papers yet.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
