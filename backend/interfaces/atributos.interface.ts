export interface Atributos {
  id?: string;
  nombre: {
    type: string;
    required: [true, "El nombre es obligatorio"];
  };
}
