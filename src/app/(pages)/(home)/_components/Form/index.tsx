'use client';

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

export default function Form() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const age = formData.get('age') || '';
    const sex = formData.get('sex') || '';
    const weight = formData.get('weight') || '';
    const height = formData.get('height') || '';
    const highBP = formData.get('highBP') || 'off';
    const highChol = formData.get('highChol') || 'off';
    const smoker = formData.get('smoker') || 'off';
    const physActivity = formData.get('physActivity') || 'off';

    console.log({
      age,
      sex,
      weight,
      height,
      highBP,
      highChol,
      smoker,
      physActivity,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldSet>
        <FieldGroup className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Field>
            <FieldLabel htmlFor="age">Sua idade</FieldLabel>
            <Input id="age" name="age" type="number" autoComplete="off" />
          </Field>

          <Field>
            <FieldLabel htmlFor="sex">Sexo</FieldLabel>

            <Select name="sex">
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
            <Input
              id="weight"
              name="weight"
              type="number"
              autoComplete="off"
              placeholder="0,00 Kg"
            />
            <FieldDescription>Seu peso em quilogramas (Kg's)</FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="height">Sua altura</FieldLabel>
            <Input
              id="height"
              name="height"
              type="number"
              autoComplete="off"
              placeholder="0,00m"
            />
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
          <Button type="reset" variant="outline" className="flex-1">
            Limpar dados
          </Button>

          <Button type="submit" className="flex-1">
            Processar meus dados
          </Button>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
