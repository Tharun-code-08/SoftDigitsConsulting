type Props = {
  youtubeId: string;
  title: string;
};

export function ServiceVideoEmbed({ youtubeId, title }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-sm ring-1 ring-slate-900/5">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
