import { clsx } from 'clsx';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({
  tag,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'max-w-2xl mb-10 sm:mb-12 lg:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      )}
    >
      {tag && (
        <span
          className={clsx(
            'inline-block font-body text-caption font-semibold tracking-widest uppercase mb-3',
            light ? 'text-honey-300' : 'text-honey-400'
          )}
        >
          {tag}
        </span>
      )}
      <h2
        className={clsx(
          'font-display text-h2 sm:text-h1 font-bold text-balance',
          light ? 'text-honey-50' : 'text-earth-800'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'mt-4 font-body text-body-lg',
            light ? 'text-honey-100/70' : 'text-earth-400'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
