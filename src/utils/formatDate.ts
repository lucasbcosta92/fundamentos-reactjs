import { format, parseISO } from 'date-fns';
import br from 'date-fns/locale/pt-BR';

const formatDate = (date: string): string =>
  format(parseISO(date), 'P', { locale: br });

export default formatDate;
