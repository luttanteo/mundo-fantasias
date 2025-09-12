export async function api(caminho) {
  try {
    const response = await fetch(
      `https://economia.awesomeapi.com.br/json/last/${caminho}`
    );

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    alert("Erro ao buscar as fantasias:", error.message);
    return null;
  }
}


