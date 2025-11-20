'use client';

import { Activity, useState } from 'react';

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { WeightInput } from '@/components/common/weight-input';
import { HeightInput } from '@/components/common/height-input';

import { formatFormData, proccessResult } from './helpers';
import { useHomeContext } from '../../_context';

export default function Form() {
  const { setResult, setError } = useHomeContext();

  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setError('');
      setResult('');
      setLoading(true);

      const formData = new FormData(event.currentTarget);
      const payload = formatFormData(formData);

      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.status !== 200) throw new Error(data.error);

      setResult(proccessResult(data));
    } catch (error) {
      console.log({ error });
      if (error instanceof Error) return setError(error.message);
      setError(
        'Não foi possivel processar seus dados... por favor tente novamente!'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldSet>
        <FieldGroup className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Field>
            <FieldLabel htmlFor="age">Sua idade</FieldLabel>
            <Input
              id="age"
              name="age"
              type="number"
              autoComplete="off"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="sex">Sexo</FieldLabel>

            <Select name="sex" required>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="female">Feminino</SelectItem>
                <SelectItem value="male">Masculino</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>

        <FieldGroup className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Field>
            <FieldLabel htmlFor="weight">Seu peso</FieldLabel>
            <WeightInput />
            <FieldDescription>
              Seu peso em quilogramas (Kg&apos;s)
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="height">Sua altura</FieldLabel>
            <HeightInput />
            <FieldDescription>Sua altura em metros (m)</FieldDescription>
          </Field>
        </FieldGroup>

        <Field orientation="horizontal">
          <Switch id="highBP" name="highBP" />
          <FieldLabel htmlFor="highBP">Você tem pressão alta?</FieldLabel>
        </Field>

        <Field orientation="horizontal">
          <Switch id="highChol" name="highChol" />
          <FieldLabel htmlFor="highChol">Você tem colesterol alto?</FieldLabel>
        </Field>

        <Field orientation="horizontal">
          <Switch id="smoker" name="smoker" />
          <FieldLabel htmlFor="smoker">Você é fumante?</FieldLabel>
        </Field>

        <Field orientation="horizontal">
          <Switch id="physActivity" name="physActivity" />
          <FieldLabel htmlFor="physActivity">
            Você pratica atividade física?
          </FieldLabel>
        </Field>

        <FieldGroup className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Field className="flex-1">
            <Select name="model" defaultValue="random_florest_model" required>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="random_florest_model">
                  Random Florest
                </SelectItem>
                <SelectItem value="logistic_regression_model">
                  Logistic Regression
                </SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Button
            type="reset"
            variant="outline"
            className="flex-1"
            disabled={loading}
          >
            Limpar dados
          </Button>

          <Button type="submit" className="flex-1" disabled={loading}>
            <Activity name="loading" mode={loading ? 'visible' : 'hidden'}>
              Processando
            </Activity>

            <Activity name="text" mode={loading ? 'hidden' : 'visible'}>
              Processar meus dados
            </Activity>
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
