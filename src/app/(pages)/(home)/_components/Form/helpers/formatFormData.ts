export default function formatFormData(formData: FormData) {
  const age = formData.get('age') || '';
  const sex = formData.get('sex') || '';
  const weight = formData.get('weight') || '';
  const height = formData.get('height') || '';
  const highBP = formData.get('highBP') || 'off';
  const highChol = formData.get('highChol') || 'off';
  const smoker = formData.get('smoker') || 'off';
  const physActivity = formData.get('physActivity') || 'off';
  const model = formData.get('model') || 'random_florest_model';

  const formattedWeight = Number(
    weight.toString().replace(',', '.').replace(' Kg', '')
  );
  const formattedHeight = Number(
    height.toString().replace(',', '.').replace('m', '')
  );

  const bmi = formattedWeight / (formattedHeight * 2);

  return {
    BMI: bmi,
    Age: parseInt(age.toString()),
    Sex: sex.toString() === 'female' ? 0 : 1,
    HighBP: highBP.toString() !== 'off' ? 1 : 0,
    HighChol: highChol.toString() !== 'off' ? 1 : 0,
    Smoker: smoker.toString() !== 'off' ? 1 : 0,
    PhysActivity: physActivity.toString() !== 'off' ? 1 : 0,
    Model: model,
  };
}
