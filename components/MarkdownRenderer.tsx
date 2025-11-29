import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  content: string;
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  return (
    <div className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:text-golf-900 prose-a:text-golf-600 hover:prose-a:text-golf-700 prose-img:rounded-xl prose-img:shadow-md">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;