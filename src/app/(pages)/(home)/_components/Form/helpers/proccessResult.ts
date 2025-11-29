interface Data {
  diabetic: number;
  probability: number;
}

export default function proccessResult(data: Data) {
  const probability = data.probability * 100;
  const probFormatted = probability.toFixed(2).replaceAll('.', ',');

  let message = `Seus dados indicam que você tem ${probFormatted}% de chances de TER diabetes!`;

  if (!data.diabetic) {
    message = `Seus dados indicam que você tem ${probFormatted}% de chances de NÃO ter diabetes!`;
  }

  return {
    message,
    probability,
    diabetic: Boolean(data.diabetic),
  };
}
