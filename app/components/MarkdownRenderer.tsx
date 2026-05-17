"use client";

type Props = {
  content: string;
};

export default function MarkdownRenderer({
  content,
}: Props) {
  const escapeHtml = (text: string) => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const formattedContent = escapeHtml(content)
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/^- (.*$)/gim, "<li>$1</li>")
    .replace(/\n/gim, "<br />");

  return (
    <div
      className="
        max-w-none
        leading-relaxed
        text-zinc-200
        [&_h1]:text-4xl
        [&_h1]:font-bold
        [&_h1]:mb-6
        [&_h1]:mt-8
        [&_h2]:text-2xl
        [&_h2]:font-bold
        [&_h2]:mb-4
        [&_h2]:mt-8
        [&_h3]:text-xl
        [&_h3]:font-semibold
        [&_h3]:mb-3
        [&_h3]:mt-6
        [&_strong]:text-white
        [&_li]:ml-6
        [&_li]:list-disc
        [&_li]:mb-2
      "
      dangerouslySetInnerHTML={{
        __html: formattedContent,
      }}
    />
  );
}