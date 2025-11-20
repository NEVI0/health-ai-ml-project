interface Data {
  diabetic: number;
  probability: number;
}

export default function proccessResult(data: Data) {
  const probability = (data.probability * 100).toFixed(2).replaceAll('.', ',');

  if (!data.diabetic) {
    return `Seus dados indicam que você tem ${probability}% de chances de NÃO ter diabetes!`;
  }

  return `Seus dados indicam que você tem ${probability}% de chances de TER diabetes!`;
}
