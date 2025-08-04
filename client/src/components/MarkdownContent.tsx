
import React from 'react';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  // Простая функция для конвертации базового markdown в HTML
  const convertMarkdownToHtml = (markdown: string) => {
    return markdown
      // Заголовки
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mb-4 mt-6">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-6 mt-8">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-8 mt-10">$1</h1>')
      // Жирный текст
      .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      // Курсив
      .replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
      // Ссылки
      .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
      // Списки
      .replace(/^\* (.*$)/gim, '<li class="ml-4 mb-2">• $1</li>')
      // Параграфы
      .replace(/\n\n/gim, '</p><p class="mb-4">');
  };

  const htmlContent = `<p class="mb-4">${convertMarkdownToHtml(content)}</p>`;

  return (
    <div 
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
