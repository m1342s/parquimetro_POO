class Parquimetro {
  constructor(valorInserido) {
    this.valorInserido = parseFloat(valorInserido);
  }
  calcularTempo() {
    const v = this.valorInserido;

    if (v < 1.0) {
      return 0;
    } else if (v < 1.75) {
      return 30;
    } else if (v < 3.0) {
      return 60;
    } else {
      return 120;
    }
  }
  calcularTroco() {
    const tempo = this.calcularTempo();
    let valorUtilizado = 0;

    switch (tempo) {
      case 30:
        valorUtilizado = 1.0;
        break;
      case 60:
        valorUtilizado = 1.75;
        break;
      case 120:
        valorUtilizado = 3.0;
        break;
    }

    const troco = this.valorInserido - valorUtilizado;
    return troco > 0 ? troco : 0;
  }

  gerarResumo() {
    if (this.valorInserido < 1.0) {
      return `<span>Valor insuficiente. Insira no mínimo 1.00</span>`;
    }

    const tempo = this.calcularTempo();
    const troco = this.calcularTroco();

    return `
    <strong>Valor inserido:</strong> R$ ${this.valorInserido.toFixed(2)}<br>
    <strong>Tempo de estacionamento:</strong> ${tempo} minutos<br>
    <strong>Troco:</strong> R$ ${troco.toFixed(2)}
    `;
  }

  simular() {
    const valorInput = document.getElementById("valor").value;
    const resultadoDiv = document.getElementById("resultado");

    if (!valorInput || parseFloat(valorInput) < 0) {
      resultadoDiv.innerHTML = "<span>Insira um valor válido</span>";
      return;
    }
    const parquimetro = new Parquimetro(valorInput);
    resultadoDiv.innerHTML = parquimetro.gerarResumo();
  }
}
let parquimetro = new Parquimetro();