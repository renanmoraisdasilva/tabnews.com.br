import { formatDistanceToNowStrict, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Tooltip } from '@primer/react';
import { useEffect, useState } from 'react';

function formatPublishedSince(date) {
  const publishedSince = formatDistanceToNowStrict(new Date(date), {
    locale: ptBR,
  });

  return `${publishedSince} atrás`;
}

function formatTooltipLabel(date) {
  return format(new Date(date), "EEEE, d 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR });
}

export default function PublishedSince({ date }) {
  // added invisible character to force rendering the correct time on the client
  // https://github.com/filipedeschamps/tabnews.com.br/pull/1294#pullrequestreview-1324466790
  const [tooltipLabel, setTooltipLabel] = useState('\u034f' + formatTooltipLabel(date));

  useEffect(() => {
    setTooltipLabel(formatTooltipLabel(date));
  }, [date]);

  return (
    <Tooltip suppressHydrationWarning sx={{ position: 'absolute', ml: 1 }} aria-label={tooltipLabel}>
      <span suppressHydrationWarning>{formatPublishedSince(date)}</span>
    </Tooltip>
  );
}
