'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, MessageCircle } from 'lucide-react';

interface Comment {
  id: string;
  name: string;
  text: string;
  timestamp: Date;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) {
      setError('Name and comment cannot be empty.');
      return;
    }
    setError('');
    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      text: commentText,
      timestamp: new Date(),
    };
    setComments([newComment, ...comments]);
    setName('');
    setCommentText('');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-headline text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center md:text-left">
        Leave a Comment
      </h2>
      <Card className="mb-8 shadow-lg">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full"
                aria-label="Name for comment"
              />
            </div>
            <div>
              <label htmlFor="commentText" className="block text-sm font-medium text-foreground mb-1">
                Comment
              </label>
              <Textarea
                id="commentText"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write your comment here..."
                rows={4}
                className="w-full"
                aria-label="Comment text"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full sm:w-auto">
              <MessageCircle className="mr-2 h-4 w-4" />
              Post Comment
            </Button>
          </form>
        </CardContent>
      </Card>

      <h3 className="font-headline text-xl md:text-2xl font-semibold text-foreground mb-6 text-center md:text-left">
        Comments ({comments.length})
      </h3>
      {comments.length === 0 ? (
        <p className="text-muted-foreground text-center">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <Card key={comment.id} className="shadow-md animate-fade-in">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg font-semibold text-primary">{comment.name}</CardTitle>
                </div>
                <CardDescription className="text-xs text-muted-foreground pt-1">
                  {comment.timestamp.toLocaleDateString()} at {comment.timestamp.toLocaleTimeString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 whitespace-pre-wrap">{comment.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
