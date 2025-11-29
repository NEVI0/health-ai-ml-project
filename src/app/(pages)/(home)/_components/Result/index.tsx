'use client';

import { Activity } from 'react';

import { useHomeContext } from '../../_context';
import { cn } from '@/lib/utils';

const BREAKPOINT = 30;

export default function Result() {
  const { result, error } = useHomeContext();

  return (
    <section className="border flex flex-col items-center justify-center gap-8 p-8 rounded-2xl">
      <Activity name="message" mode={!result && !error ? 'visible' : 'hidden'}>
        <p className="text-center font-semibold">
          Informe seus dados no formulário acima para obter o resultado
        </p>
      </Activity>

      <Activity name="error" mode={error ? 'visible' : 'hidden'}>
        <p className="text-center font-semibold text-red-600">{error}</p>
      </Activity>

      <Activity name="result" mode={result ? 'visible' : 'hidden'}>
        <p
          className={cn(
            'text-center font-semibold',
            result?.diabetic &&
              result.probability <= BREAKPOINT &&
              'text-yellow-600',
            result?.diabetic &&
              result.probability > BREAKPOINT &&
              'text-red-600',
            !result?.diabetic &&
              result?.probability! <= BREAKPOINT &&
              'text-yellow-600',
            !result?.diabetic &&
              result?.probability! > BREAKPOINT &&
              'text-green-600'
          )}
        >
          {result?.message}
        </p>
      </Activity>
    </section>
  );
}
