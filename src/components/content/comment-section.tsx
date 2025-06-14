
"use client"

import React, { type FC, useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface CommentType {
  id: string;
  name: string;
  avatar: string;
  date: string; // ISO string
  text: string;
}

const initialDummyComments: CommentType[] = [
  {
    id: '1',
    name: 'Alice Wonderland',
    avatar: 'https://placehold.co/40x40.png?text=AW',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), 
    text: 'Great article! Really insightful analysis of the current market conditions. I learned a lot.',
  },
  {
    id: '2',
    name: 'Bob The Builder',
    avatar: 'https://placehold.co/40x40.png?text=BB',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), 
    text: 'Thanks for sharing this. The section on inflation was particularly helpful. Any thoughts on how this affects small businesses?',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    avatar: 'https://placehold.co/40x40.png?text=CB',
    date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), 
    text: 'I agree with Alice. The charts were also very clear and easy to understand. Keep up the good work!',
  },
];

const LOCAL_STORAGE_KEY = 'financeFlashComments';
const MAX_COMMENTS = 15;
const NUM_TO_DELETE_OLDEST = 5;

const CommentSection: FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [nameInput, setNameInput] = useState('');
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    const storedCommentsRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedCommentsRaw) {
      try {
        const parsedComments = JSON.parse(storedCommentsRaw) as CommentType[];
        if (Array.isArray(parsedComments)) {
          setComments(parsedComments);
        } else {
          throw new Error("Stored comments are not an array");
        }
      } catch (error) {
        console.error("Error parsing comments from localStorage:", error);
        setComments(initialDummyComments.slice(0, MAX_COMMENTS));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialDummyComments.slice(0, MAX_COMMENTS)));
      }
    } else {
      setComments(initialDummyComments.slice(0, MAX_COMMENTS));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialDummyComments.slice(0, MAX_COMMENTS)));
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!nameInput.trim() || !commentInput.trim()) {
        alert("Name and comment cannot be empty.");
        return;
    }

    const newComment: CommentType = {
      id: Date.now().toString(),
      name: nameInput,
      avatar: `https://placehold.co/40x40.png?text=${nameInput.substring(0, 2).toUpperCase() || 'NA'}`,
      date: new Date().toISOString(),
      text: commentInput,
    };

    let updatedComments = [...comments, newComment];

    if (updatedComments.length > MAX_COMMENTS) {
      // Remove the 5 oldest comments
      updatedComments = updatedComments.slice(NUM_TO_DELETE_OLDEST);
    }
    
    // Ensure it doesn't exceed MAX_COMMENTS even after slicing if NUM_TO_DELETE_OLDEST is small
    // This case is generally handled if NUM_TO_DELETE_OLDEST >= 1 and makes sense
    // For example, if MAX_COMMENTS = 15, NUM_TO_DELETE_OLDEST = 5
    // If current length is 15, new comment makes it 16. Slice(5) makes it 11. Correct.
    // If for some reason NUM_TO_DELETE_OLDEST was 0 and length became 16, this would trim it back to 15.
    // However, the current logic is: if 16, trim 5, new length 11. Max 15 is maintained.
    if (updatedComments.length > MAX_COMMENTS) {
        updatedComments = updatedComments.slice(updatedComments.length - MAX_COMMENTS);
    }


    setComments(updatedComments);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedComments));

    setNameInput('');
    setCommentInput('');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">Leave a Comment</CardTitle>
        <CardDescription className="text-foreground/80">
          Your feedback is appreciated. Comments are stored locally. Max {MAX_COMMENTS} comments shown.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/90">Name</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Your Name" 
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required 
              className="bg-background" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment" className="text-foreground/90">Comment</Label>
            <Textarea 
              id="comment" 
              placeholder="Write your comment here..." 
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              required 
              rows={4} 
              className="bg-background" 
            />
          </div>
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Submit Comment
          </Button>
        </form>

        <Separator className="my-8 bg-border" />

        <div>
          <h3 className="text-xl font-headline text-primary mb-6">Comments ({comments.length})</h3>
          {comments.length === 0 ? (
            <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
          ) : (
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src={comment.avatar} alt={comment.name} data-ai-hint="person avatar" />
                    <AvatarFallback>{comment.name.substring(0,2).toUpperCase() || 'NA'}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground">{comment.name}</p>
                      <p className="text-xs text-muted-foreground">{formatDate(comment.date)}</p>
                    </div>
                    <p className="text-sm text-foreground/80 mt-1 whitespace-pre-wrap">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentSection;
