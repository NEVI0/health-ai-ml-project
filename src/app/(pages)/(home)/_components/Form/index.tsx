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
      setResult(null);
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
            <FieldLabel htmlFor="age">Faixa de idade</FieldLabel>

            <Select name="age" required>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Entre 18 e 24</SelectItem>
                <SelectItem value="2">Entre 25 e 29</SelectItem>
                <SelectItem value="3">Entre 30 e 34</SelectItem>
                <SelectItem value="4">Entre 35 e 39</SelectItem>
                <SelectItem value="5">Entre 40 e 44</SelectItem>
                <SelectItem value="6">Entre 45 e 49</SelectItem>
                <SelectItem value="7">Entre 50 e 54</SelectItem>
                <SelectItem value="8">Entre 55 e 59</SelectItem>
                <SelectItem value="9">Entre 60 e 64</SelectItem>
                <SelectItem value="10">Entre 65 e 69</SelectItem>
                <SelectItem value="11">Entre 70 e 74</SelectItem>
                <SelectItem value="12">Entre 75 e 79</SelectItem>
                <SelectItem value="13">Mais de 80</SelectItem>
              </SelectContent>
            </Select>
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
